/**
 * Copyright 2024 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BaseMessage, Role } from "@/llms/primitives/message.js";
import type { AnyTool } from "@/tools/base.js";
import { isEmpty } from "remeda";
import { DefaultRunner } from "@/agents/Hive/runners/default/runner.js";
import { BaseMemory } from "@/memory/base.js";
import type {
  HiveAgentTemplates,
  HiveParserInput,
  HiveRunInput,
  HiveRunOptions,
} from "@/agents/Hive/types.js";
import { HiveAgent, HiveInput } from "@/agents/Hive/agent.js";
import type { GetRunContext } from "@/context.js";
import {
  GraniteHiveAssistantPrompt,
  GraniteHiveSchemaErrorPrompt,
  GraniteHiveSystemPrompt,
  GraniteHiveToolErrorPrompt,
  GraniteHiveToolInputErrorPrompt,
  GraniteHiveToolNotFoundPrompt,
  GraniteHiveUserPrompt,
} from "@/agents/Hive/runners/granite/prompts.js";
import { Cache } from "@/cache/decoratorCache.js";

export class GraniteRunner extends DefaultRunner {
  static {
    this.register();
  }

  constructor(input: HiveInput, options: HiveRunOptions, run: GetRunContext<HiveAgent>) {
    super(input, options, run);

    run.emitter.on(
      "update",
      async ({ update, meta, memory }) => {
        if (update.key === "tool_output") {
          await memory.add(
            BaseMessage.of({
              role: "tool_response",
              text: update.value,
              meta: { success: meta.success },
            }),
          );
        }
      },
      {
        isBlocking: true,
      },
    );
  }

  protected async initMemory(input: HiveRunInput): Promise<BaseMemory> {
    const memory = await super.initMemory(input);

    if (!isEmpty(this.input.tools)) {
      const index = memory.messages.findIndex((msg) => msg.role === Role.SYSTEM) + 1;
      await memory.add(
        BaseMessage.of({
          role: "tools",
          text: JSON.stringify(
            (await this.renderers.system.variables.tools()).map((tool) => ({
              name: tool.name,
              description: tool.description,
              schema: JSON.parse(tool.schema),
            })),
            null,
            4,
          ),
        }),
        index,
      );
    }
    return memory;
  }

  @Cache({ enumerable: false })
  get templates(): HiveAgentTemplates {
    const customTemplates = this.input.templates ?? {};

    return {
      ...super.templates,
      user: customTemplates.user ?? GraniteHiveUserPrompt,
      system: customTemplates.system ?? GraniteHiveSystemPrompt,
      assistant: customTemplates.assistant ?? GraniteHiveAssistantPrompt,
      schemaError: customTemplates.schemaError ?? GraniteHiveSchemaErrorPrompt,
      toolNotFoundError: customTemplates.toolNotFoundError ?? GraniteHiveToolNotFoundPrompt,
      toolError: customTemplates.toolError ?? GraniteHiveToolErrorPrompt,
      toolInputError: customTemplates.toolInputError ?? GraniteHiveToolInputErrorPrompt,
    };
  }

  protected createParser(tools: AnyTool[]) {
    const { parser } = super.createParser(tools);

    return {
      parserRegex: isEmpty(tools)
        ? new RegExp(`Thought: .+\\nFinal Answer: [\\s\\S]+`)
        : new RegExp(
            `Thought: .+\\n(?:Final Answer: [\\s\\S]+|Tool Name: (${tools.map((tool) => tool.name).join("|")})\\nTool Input: \\{.*\\})`,
          ),
      parser: parser.fork<HiveParserInput>((nodes, options) => ({
        options,
        nodes: {
          ...nodes,
          thought: { ...nodes.thought, prefix: "Thought:" },
          tool_name: { ...nodes.tool_name, prefix: "Tool Name:" },
          tool_input: { ...nodes.tool_input, prefix: "Tool Input:", isEnd: true, next: [] },
          final_answer: { ...nodes.final_answer, prefix: "Final Answer:" },
        },
      })),
    };
  }
}
