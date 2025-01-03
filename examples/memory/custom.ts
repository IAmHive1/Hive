import { BaseMemory } from "Hive-agent-framework/memory/base";
import { BaseMessage } from "Hive-agent-framework/llms/primitives/message";
import { NotImplementedError } from "Hive-agent-framework/errors";

export class MyMemory extends BaseMemory {
  get messages(): readonly BaseMessage[] {
    throw new NotImplementedError("Method not implemented.");
  }

  add(message: BaseMessage, index?: number): Promise<void> {
    throw new NotImplementedError("Method not implemented.");
  }

  delete(message: BaseMessage): Promise<boolean> {
    throw new NotImplementedError("Method not implemented.");
  }

  reset(): void {
    throw new NotImplementedError("Method not implemented.");
  }

  createSnapshot(): unknown {
    throw new NotImplementedError("Method not implemented.");
  }

  loadSnapshot(state: ReturnType<typeof this.createSnapshot>): void {
    throw new NotImplementedError("Method not implemented.");
  }
}
