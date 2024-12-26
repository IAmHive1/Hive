import "dotenv/config";
import { LLMTool } from "Hive-agent-framework/tools/llm";
import { OllamaChatLLM } from "Hive-agent-framework/adapters/ollama/chat";
import { Tool } from "Hive-agent-framework/tools/base";
import { UnconstrainedMemory } from "Hive-agent-framework/memory/unconstrainedMemory";
import { BaseMessage } from "Hive-agent-framework/llms/primitives/message";

const memory = new UnconstrainedMemory();
await memory.addMany([
  BaseMessage.of({ role: "system", text: "You are a helpful assistant." }),
  BaseMessage.of({ role: "user", text: "Hello!" }),
  BaseMessage.of({ role: "assistant", text: "Hello user. I am here to help you." }),
]);

const tool = new LLMTool({
  llm: new OllamaChatLLM(),
});

const response = await tool
  .run({
    task: "Classify whether the tone of text is POSITIVE/NEGATIVE/NEUTRAL.",
  })
  .context({
    // if the context is not passed, the tool will throw an error
    [Tool.contextKeys.Memory]: memory,
  });

console.info(response.getTextContent());
