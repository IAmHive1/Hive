import "dotenv/config.js";
import { HiveAgent } from "Hive-agent-framework/agents/Hive/agent";
import { TokenMemory } from "Hive-agent-framework/memory/tokenMemory";
import { DuckDuckGoSearchTool } from "Hive-agent-framework/tools/search/duckDuckGoSearch";
import { OllamaChatLLM } from "Hive-agent-framework/adapters/ollama/chat";
import { OpenMeteoTool } from "Hive-agent-framework/tools/weather/openMeteo";

const llm = new OllamaChatLLM();
const agent = new HiveAgent({
  llm,
  memory: new TokenMemory({ llm }),
  tools: [new DuckDuckGoSearchTool(), new OpenMeteoTool()],
});

const response = await agent
  .run({ prompt: "What's the current weather in Las Vegas?" })
  .observe((emitter) => {
    emitter.on("update", async ({ data, update, meta }) => {
      console.log(`Agent (${update.key}) 🤖 : `, update.value);
    });
  });

console.log(`Agent 🤖 : `, response.result.text);
