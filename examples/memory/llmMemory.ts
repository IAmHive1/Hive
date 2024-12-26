import { OllamaChatLLM } from "Hive-agent-framework/adapters/ollama/chat";
import { UnconstrainedMemory } from "Hive-agent-framework/memory/unconstrainedMemory";
import { BaseMessage } from "Hive-agent-framework/llms/primitives/message";

const memory = new UnconstrainedMemory();
await memory.addMany([
  BaseMessage.of({
    role: "system",
    text: `Always respond very concisely.`,
  }),
  BaseMessage.of({ role: "user", text: `Give me first 5 prime numbers.` }),
]);

// Generate response
const llm = new OllamaChatLLM();
const response = await llm.generate(memory.messages);
await memory.add(BaseMessage.of({ role: "assistant", text: response.getTextContent() }));

console.log(`Conversation history`);
for (const message of memory) {
  console.log(`${message.role}: ${message.text}`);
}
