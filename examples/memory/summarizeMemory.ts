import { BaseMessage } from "Hive-agent-framework/llms/primitives/message";
import { SummarizeMemory } from "Hive-agent-framework/memory/summarizeMemory";
import { OllamaChatLLM } from "Hive-agent-framework/adapters/ollama/chat";

const memory = new SummarizeMemory({
  llm: new OllamaChatLLM({
    modelId: "llama3.1",
    parameters: {
      temperature: 0,
      num_predict: 250,
    },
  }),
});

await memory.addMany([
  BaseMessage.of({ role: "system", text: "You are a guide through France." }),
  BaseMessage.of({ role: "user", text: "What is the capital?" }),
  BaseMessage.of({ role: "assistant", text: "Paris" }),
  BaseMessage.of({ role: "user", text: "What language is spoken there?" }),
]);

console.info(memory.isEmpty()); // false
console.log(memory.messages.length); // 1
console.log(memory.messages[0].text); // The capital city of France is Paris, ...
