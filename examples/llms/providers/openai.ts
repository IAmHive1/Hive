import "dotenv/config";
import { BaseMessage } from "Hive-agent-framework/llms/primitives/message";
import { OpenAIChatLLM } from "Hive-agent-framework/adapters/openai/chat";

const llm = new OpenAIChatLLM({
  modelId: "gpt-4o",
  parameters: {
    max_tokens: 10,
    stop: ["post"],
  },
});

console.info("Meta", await llm.meta());
const response = await llm.generate([
  BaseMessage.of({
    role: "user",
    text: "Hello world!",
  }),
]);
console.info(response.getTextContent());
