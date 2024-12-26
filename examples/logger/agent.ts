import { HiveAgent } from "Hive-agent-framework/agents/Hive/agent";
import { OllamaChatLLM } from "Hive-agent-framework/adapters/ollama/chat";
import { UnconstrainedMemory } from "Hive-agent-framework/memory/unconstrainedMemory";
import { Logger } from "Hive-agent-framework/logger/logger";
import { Emitter } from "Hive-agent-framework/emitter/emitter";

// Set up logging
Logger.defaults.pretty = true;

const logger = Logger.root.child({
  level: "trace",
  name: "app",
});

// Log events emitted during agent execution
Emitter.root.match("*.*", (data, event) => {
  const logLevel = event.path.includes(".run.") ? "trace" : "info";
  logger[logLevel](`Event '${event.path}' triggered by '${event.creator.constructor.name}'.`);
});

// Create and run an agent
const agent = new HiveAgent({
  llm: new OllamaChatLLM(),
  memory: new UnconstrainedMemory(),
  tools: [],
});

const response = await agent.run({ prompt: "Hello!" });
logger.info(response.result.text);
