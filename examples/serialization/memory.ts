import { TokenMemory } from "Hive-agent-framework/memory/tokenMemory";
import { OllamaChatLLM } from "Hive-agent-framework/adapters/ollama/chat";
import { BaseMessage } from "Hive-agent-framework/llms/primitives/message";

const llm = new OllamaChatLLM();
const memory = new TokenMemory({ llm });
await memory.addMany([
  BaseMessage.of({
    role: "user",
    text: "What is your name?",
  }),
]);

const serialized = memory.serialize();
const deserialized = TokenMemory.fromSerialized(serialized);

await deserialized.add(
  BaseMessage.of({
    role: "assistant",
    text: "Hive",
  }),
);
