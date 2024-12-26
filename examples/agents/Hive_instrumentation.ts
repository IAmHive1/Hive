////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// RUN THIS EXAMPLE VIA `yarn start:telemetry ./examples/agents/Hive_instrumentation.ts` ///////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

import { HiveAgent } from "Hive-agent-framework/agents/Hive/agent";
import { FrameworkError } from "Hive-agent-framework/errors";
import { TokenMemory } from "Hive-agent-framework/memory/tokenMemory";
import { Logger } from "Hive-agent-framework/logger/logger";
import { DuckDuckGoSearchTool } from "Hive-agent-framework/tools/search/duckDuckGoSearch";
import { WikipediaTool } from "Hive-agent-framework/tools/search/wikipedia";
import { OpenMeteoTool } from "Hive-agent-framework/tools/weather/openMeteo";
import { OllamaChatLLM } from "Hive-agent-framework/adapters/ollama/chat";

Logger.root.level = "silent"; // disable internal logs
const logger = new Logger({ name: "app", level: "trace" });

const llm = new OllamaChatLLM({
  modelId: "llama3.1", // llama3.1:70b for better performance
});

const agent = new HiveAgent({
  llm,
  memory: new TokenMemory({ llm }),
  tools: [
    new DuckDuckGoSearchTool(),
    new WikipediaTool(),
    new OpenMeteoTool(), // weather tool
  ],
});

try {
  const response = await agent.run(
    { prompt: "what is the weather like in Granada?" },
    {
      execution: {
        maxRetriesPerStep: 3,
        totalMaxRetries: 10,
        maxIterations: 20,
      },
    },
  );

  logger.info(`Agent 🤖 : ${response.result.text}`);
} catch (error) {
  logger.error(FrameworkError.ensure(error).dump());
}
