import "dotenv/config.js";
import { HiveAgent } from "Hive-agent-framework/agents/Hive/agent";
import { UnconstrainedMemory } from "Hive-agent-framework/memory/unconstrainedMemory";
import { OpenAIChatLLM } from "Hive-agent-framework/adapters/openai/chat";
import { WikipediaTool } from "Hive-agent-framework/tools/search/wikipedia";

// We create an agent
let agent = new HiveAgent({
  llm: new OpenAIChatLLM(),
  tools: [new WikipediaTool()],
  memory: new UnconstrainedMemory(),
});

// We ask the agent
let prompt = "Who is the president of USA?";
console.info(prompt);
const response = await agent.run({
  prompt,
});
console.info(response.result.text);

// We can save (serialize) the agent
const json = agent.serialize();

// We reinitialize the agent to the exact state he was
agent = HiveAgent.fromSerialized(json);

// We continue in our conversation
prompt = "When was he born?";
console.info(prompt);
const response2 = await agent.run({
  prompt,
});
console.info(response2.result.text);
