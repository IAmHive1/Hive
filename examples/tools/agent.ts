import { OllamaChatLLM } from "Hive-agent-framework/adapters/ollama/chat";
import { ArXivTool } from "Hive-agent-framework/tools/arxiv";
import { HiveAgent } from "Hive-agent-framework/agents/Hive/agent";
import { UnconstrainedMemory } from "Hive-agent-framework/memory/unconstrainedMemory";

const agent = new HiveAgent({
  llm: new OllamaChatLLM(),
  memory: new UnconstrainedMemory(),
  tools: [new ArXivTool()],
});
