import "dotenv/config.js";
import { HiveAgent } from "Hive-agent-framework/agents/Hive/agent";
import { createConsoleReader } from "../helpers/io.js";
import { FrameworkError } from "Hive-agent-framework/errors";
import { Logger } from "Hive-agent-framework/logger/logger";
import {
  DuckDuckGoSearchTool,
  DuckDuckGoSearchToolSearchType,
} from "Hive-agent-framework/tools/search/duckDuckGoSearch";
import { OpenMeteoTool } from "Hive-agent-framework/tools/weather/openMeteo";
import {
  HiveAssistantPrompt,
  HiveSchemaErrorPrompt,
  HiveSystemPrompt,
  HiveToolErrorPrompt,
  HiveToolInputErrorPrompt,
  HiveToolNoResultsPrompt,
  HiveUserEmptyPrompt,
} from "Hive-agent-framework/agents/Hive/prompts";
import { PromptTemplate } from "Hive-agent-framework/template";
import { BAMChatLLM } from "Hive-agent-framework/adapters/bam/chat";
import { UnconstrainedMemory } from "Hive-agent-framework/memory/unconstrainedMemory";
import { z } from "zod";

Logger.root.level = "silent"; // disable internal logs
const logger = new Logger({ name: "app", level: "trace" });

const llm = BAMChatLLM.fromPreset("meta-llama/llama-3-1-70b-instruct");

const agent = new HiveAgent({
  llm,
  memory: new UnconstrainedMemory(),
  // You can override internal templates
  templates: {
    user: new PromptTemplate({
      schema: z
        .object({
          input: z.string(),
        })
        .passthrough(),
      template: `User: {{input}}`,
    }),
    system: HiveSystemPrompt.fork((old) => ({
      ...old,
      defaults: {
        instructions: "You are a helpful assistant that uses tools to answer questions.",
      },
    })),
    toolError: HiveToolErrorPrompt,
    toolInputError: HiveToolInputErrorPrompt,
    toolNoResultError: HiveToolNoResultsPrompt.fork((old) => ({
      ...old,
      template: `${old.template}\nPlease reformat your input.`,
    })),
    toolNotFoundError: new PromptTemplate({
      schema: z
        .object({
          tools: z.array(z.object({ name: z.string() }).passthrough()),
        })
        .passthrough(),
      template: `Tool does not exist!
{{#tools.length}}
Use one of the following tools: {{#trim}}{{#tools}}{{name}},{{/tools}}{{/trim}}
{{/tools.length}}`,
    }),
    schemaError: HiveSchemaErrorPrompt,
    assistant: HiveAssistantPrompt,
    userEmpty: HiveUserEmptyPrompt,
  },
  tools: [
    new DuckDuckGoSearchTool({
      maxResults: 10,
      search: {
        safeSearch: DuckDuckGoSearchToolSearchType.STRICT,
      },
    }),
    // new WebCrawlerTool(), // HTML web page crawler
    // new WikipediaTool(),
    new OpenMeteoTool(), // weather tool
    // new ArXivTool(), // research papers
    // new DynamicTool() // custom python tool
  ],
});

const reader = createConsoleReader();

try {
  for await (const { prompt } of reader) {
    const response = await agent
      .run(
        { prompt },
        {
          execution: {
            maxRetriesPerStep: 3,
            totalMaxRetries: 10,
            maxIterations: 20,
          },
          signal: AbortSignal.timeout(2 * 60 * 1000),
        },
      )
      .observe((emitter) => {
        emitter.on("start", () => {
          reader.write(`Agent ?? : `, "starting new iteration");
        });
        emitter.on("error", ({ error }) => {
          reader.write(`Agent ?? : `, FrameworkError.ensure(error).dump());
        });
        emitter.on("retry", () => {
          reader.write(`Agent ?? : `, "retrying the action...");
        });
        emitter.on("update", async ({ data, update, meta }) => {
          // log 'data' to see the whole state
          // to log only valid runs (no errors), check if meta.success === true
          reader.write(`Agent (${update.key}) ?? : `, update.value);
        });
        emitter.on("partialUpdate", ({ data, update, meta }) => {
          // ideal for streaming (line by line)
          // log 'data' to see the whole state
          // to log only valid runs (no errors), check if meta.success === true
          // reader.write(`Agent (partial ${update.key}) ?? : `, update.value);
        });

        // To observe all events (uncomment following block)
        // emitter.match("*.*", async (data: unknown, event) => {
        //   logger.trace(event, `Received event "${event.path}"`);
        // });
      });

    reader.write(`Agent ?? : `, response.result.text);
  }
} catch (error) {
  logger.error(FrameworkError.ensure(error).dump());
} finally {
  reader.close();
}
