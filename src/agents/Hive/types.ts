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

import { ChatLLMOutput } from "@/llms/chat.js";
import { BaseMemory } from "@/memory/base.js";
import { BaseMessage } from "@/llms/primitives/message.js";
import { Callback } from "@/emitter/types.js";
import { AnyTool, BaseToolRunOptions, ToolError, ToolOutput } from "@/tools/base.js";
import {
  HiveAssistantPrompt,
  HiveSchemaErrorPrompt,
  HiveSystemPrompt,
  HiveToolErrorPrompt,
  HiveToolInputErrorPrompt,
  HiveToolNoResultsPrompt,
  HiveToolNotFoundPrompt,
  HiveUserEmptyPrompt,
  HiveUserPrompt,
} from "@/agents/Hive/prompts.js";
import { LinePrefixParser } from "@/agents/parsers/linePrefix.js";
import { JSONParserField, ZodParserField } from "@/agents/parsers/field.js";
import { NonUndefined } from "@/internals/types.js";

export interface HiveRunInput {
  prompt: string | null;
}

export interface HiveRunOutput {
  result: BaseMessage;
  iterations: HiveAgentRunIteration[];
  memory: BaseMemory;
}

export interface HiveAgentRunIteration {
  raw: ChatLLMOutput;
  state: HiveIterationResult;
}

export interface HiveAgentExecutionConfig {
  totalMaxRetries?: number;
  maxRetriesPerStep?: number;
  maxIterations?: number;
}

export interface HiveRunOptions {
  signal?: AbortSignal;
  execution?: HiveAgentExecutionConfig;
}

export interface HiveMeta {
  iteration: number;
}

export interface HiveUpdateMeta extends HiveMeta {
  success: boolean;
}

export interface HiveCallbacks {
  start?: Callback<{ meta: HiveMeta; tools: AnyTool[]; memory: BaseMemory }>;
  error?: Callback<{ error: Error; meta: HiveMeta }>;
  retry?: Callback<{ meta: HiveMeta }>;
  success?: Callback<{
    data: BaseMessage;
    iterations: HiveAgentRunIteration[];
    memory: BaseMemory;
    meta: HiveMeta;
  }>;
  update?: Callback<{
    data: HiveIterationResult;
    update: { key: keyof HiveIterationResult; value: string; parsedValue: unknown };
    meta: HiveUpdateMeta;
    memory: BaseMemory;
  }>;
  partialUpdate?: Callback<{
    data: HiveIterationResultPartial;
    update: { key: keyof HiveIterationResult; value: string; parsedValue: unknown };
    meta: HiveUpdateMeta;
  }>;
  toolStart?: Callback<{
    data: {
      tool: AnyTool;
      input: unknown;
      options: BaseToolRunOptions;
      iteration: HiveIterationToolResult;
    };
    meta: HiveMeta;
  }>;
  toolSuccess?: Callback<{
    data: {
      tool: AnyTool;
      input: unknown;
      options: BaseToolRunOptions;
      result: ToolOutput;
      iteration: HiveIterationToolResult;
    };
    meta: HiveMeta;
  }>;
  toolError?: Callback<{
    data: {
      tool: AnyTool;
      input: unknown;
      options: BaseToolRunOptions;
      error: ToolError;
      iteration: HiveIterationToolResult;
    };
    meta: HiveMeta;
  }>;
}

export interface HiveAgentTemplates {
  system: typeof HiveSystemPrompt;
  assistant: typeof HiveAssistantPrompt;
  user: typeof HiveUserPrompt;
  userEmpty: typeof HiveUserEmptyPrompt;
  toolError: typeof HiveToolErrorPrompt;
  toolInputError: typeof HiveToolInputErrorPrompt;
  toolNoResultError: typeof HiveToolNoResultsPrompt;
  toolNotFoundError: typeof HiveToolNotFoundPrompt;
  schemaError: typeof HiveSchemaErrorPrompt;
}

export type HiveParserInput = LinePrefixParser.define<{
  thought: ZodParserField<string>;
  tool_name: ZodParserField<string>;
  tool_input: JSONParserField<Record<string, any>>;
  tool_output: ZodParserField<string>;
  final_answer: ZodParserField<string>;
}>;

type HiveParser = LinePrefixParser<HiveParserInput>;
export type HiveIterationResult = LinePrefixParser.inferOutput<HiveParser>;
export type HiveIterationResultPartial = LinePrefixParser.inferPartialOutput<HiveParser>;
export type HiveIterationToolResult = NonUndefined<HiveIterationResult, "tool_input" | "tool_name">;
