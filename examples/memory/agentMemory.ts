import { UnconstrainedMemory } from "Hive-agent-framework/memory/unconstrainedMemory";
import { HiveAgent } from "Hive-agent-framework/agents/Hive/agent";
import { OllamaChatLLM } from "Hive-agent-framework/adapters/ollama/chat";

const agent = new HiveAgent({
  memory: new UnconstrainedMemory(),
  llm: new OllamaChatLLM(),
  tools: [],
});
await agent.run({ prompt: "Hello world!" });

console.info(agent.memory.messages.length); // 2

const userMessage = agent.memory.messages[0];
console.info(`User: ${userMessage.text}`); // User: Hello world!

const agentMessage = agent.memory.messages[1];
console.info(`Agent: ${agentMessage.text}`); // Agent: Hello! It's nice to chat with you.
