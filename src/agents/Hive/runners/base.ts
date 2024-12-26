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

import { Serializable } from "@/internals/serializable.js";
import {
  HiveAgentRunIteration,
  HiveAgentTemplates,
  HiveCallbacks,
  HiveIterationToolResult,
  HiveMeta,
  HiveRunInput,
  HiveRunOptions,
} from "@/agents/Hive/types.js";
import type { HiveAgent, HiveInput } from "@/agents/Hive/agent.js";
import { RetryCounter } from "@/internals/helpers/counter.js";
import { AgentError } from "@/agents/base.js";
import { shallowCopy } from "@/serializer/utils.js";
import { BaseMemory } from "@/memory/base.js";
import { GetRunContext } from "@/context.js";
import { Emitter } from "@/emitter/emitter.js";

export interface HiveRunnerLLMInput {
  meta: HiveMeta;
  signal: AbortSignal;
  emitter: Emitter<HiveCallbacks>;
}

export interface HiveRunnerToolInput {
  state: HiveIterationToolResult;
  meta: HiveMeta;
  signal: AbortSignal;
  emitter: Emitter<HiveCallbacks>;
}

export abstract class BaseRunner extends Serializable {
  public memory!: BaseMemory;
  public readonly iterations: HiveAgentRunIteration[] = [];
  protected readonly failedAttemptsCounter: RetryCounter;

  constructor(
    protected readonly input: HiveInput,
    protected readonly options: HiveRunOptions,
    protected readonly run: GetRunContext<HiveAgent>,
  ) {
    super();
    this.failedAttemptsCounter = new RetryCounter(options?.execution?.totalMaxRetries, AgentError);
  }

  async createIteration() {
    const meta: HiveMeta = { iteration: this.iterations.length + 1 };
    const maxIterations = this.options?.execution?.maxIterations ?? Infinity;

    if (meta.iteration > maxIterations) {
      throw new AgentError(
        `Agent was not able to resolve the task in ${maxIterations} iterations.`,
        [],
        { isFatal: true },
      );
    }

    const emitter = this.run.emitter.child({ groupId: `iteration-${meta.iteration}` });
    const iteration = await this.llm({ emitter, signal: this.run.signal, meta });
    this.iterations.push(iteration);

    return {
      emitter,
      state: iteration.state,
      meta,
      signal: this.run.signal,
    };
  }

  async init(input: HiveRunInput) {
    this.memory = await this.initMemory(input);
  }

  abstract llm(input: HiveRunnerLLMInput): Promise<HiveAgentRunIteration>;

  abstract tool(input: HiveRunnerToolInput): Promise<{ output: string; success: boolean }>;

  abstract get templates(): HiveAgentTemplates;

  protected abstract initMemory(input: HiveRunInput): Promise<BaseMemory>;

  createSnapshot() {
    return {
      input: shallowCopy(this.input),
      options: shallowCopy(this.options),
      memory: this.memory,
      failedAttemptsCounter: this.failedAttemptsCounter,
    };
  }

  loadSnapshot(snapshot: ReturnType<typeof this.createSnapshot>) {
    Object.assign(this, snapshot);
  }
}
