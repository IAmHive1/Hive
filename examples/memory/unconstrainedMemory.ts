import { UnconstrainedMemory } from "Hive-agent-framework/memory/unconstrainedMemory";
import { BaseMessage } from "Hive-agent-framework/llms/primitives/message";

const memory = new UnconstrainedMemory();
await memory.add(
  BaseMessage.of({
    role: "user",
    text: `Hello world!`,
  }),
);

console.info(memory.isEmpty()); // false
console.log(memory.messages.length); // 1
console.log(memory.messages);
