<p align="center">
    <img alt="Hive Framework logo" src="/docs/assets/Hive_Dark.svg" height="128">
    <h1 align="center">Hive Agent Framework</h1>
</p>

<p align="center">
  <img align="cener" alt="Project Status: Alpha" src="https://img.shields.io/badge/Status-Alpha-red">

  <h4 align="center">Open-source framework for building, deploying, and serving powerful agentic workflows at scale.</h4>
</p>

The Hive Agent Framework makes it easy to build scalable agent-based workflows with your model of choice. The framework is Hiven designed to perform robustly with [IBM Granite](https://www.ibm.com/granite/docs/) and [Llama 3.x](https://ai.meta.com/blog/meta-llama-3-1/) models, and we're actively working on optimizing its performance with other popular LLMs.<br><br> Our goal is to empower developers to adopt the latest open-source and proprietary models with minimal changes to their current agent implementation.

## Key Features

- 🤖 **AI agents**: Use our powerful [Hive agent](/docs/agents.md) refined for Llama 3.1 and Granite 3.0, or [build your own](/docs/agents.md).
- 🛠️ **Tools**: Use our [built-in tools](/docs/tools.md) or [create your own](/docs/tools.md) in Javascript/Python.
- 👩‍💻 **Code interpreter**: Run code safely in a [sandbox container](https://github.com/i-am-Hive/Hive-code-interpreter).
- 💾 **Memory**: Multiple [strategies](/docs/memory.md) to optimize token spend.
- ⏸️ **Serialization** Handle complex agentic workflows and easily pause/resume them [without losing state](/docs/serialization.md).
- 🔍 **Instrumentation**: Use [Instrumentation](/docs/instrumentation.md) based on [Emitter](/docs/emitter.md) to have full visibility of your agent’s inner workings.
- 🎛️ **Production-level** control with [caching](/docs/cache.md) and [error handling](/docs/errors.md).
- 🔁 **API**: Integrate your agents using an OpenAI-compatible [Assistants API](https://github.com/i-am-Hive/Hive-api) and [Python SDK](https://github.com/i-am-Hive/Hive-python-sdk).
- 🖥️ **Chat UI**: Serve your agent to users in a [delightful UI](https://github.com/i-am-Hive/Hive-ui) with built-in transparency, explainability, and user controls.
- ... more on our [Roadmap](#roadmap)

## Getting started

> [!TIP]
>
> 🚀 Would you like a fully set-up TypeScript project with Hive, Code Interpreter, and Observability? Check out our [Hive Framework Starter](https://github.com/i-am-Hive/Hive-agent-framework-starter).

> [!TIP]
>
> 🚀 Would you like to work with Hive in your web browser? See [Hive Stack](https://github.com/i-am-Hive/Hive-stack)

### Installation

```shell
npm install Hive-agent-framework
```

or

```shell
yarn add Hive-agent-framework
```

### Example

```ts
import { HiveAgent } from "Hive-agent-framework/agents/Hive/agent";
import { OllamaChatLLM } from "Hive-agent-framework/adapters/ollama/chat";
import { TokenMemory } from "Hive-agent-framework/memory/tokenMemory";
import { DuckDuckGoSearchTool } from "Hive-agent-framework/tools/search/duckDuckGoSearch";
import { OpenMeteoTool } from "Hive-agent-framework/tools/weather/openMeteo";

const llm = new OllamaChatLLM(); // default is llama3.1 (8B), it is recommended to use 70B model

const agent = new HiveAgent({
  llm, // for more explore 'Hive-agent-framework/adapters'
  memory: new TokenMemory({ llm }), // for more explore 'Hive-agent-framework/memory'
  tools: [new DuckDuckGoSearchTool(), new OpenMeteoTool()], // for more explore 'Hive-agent-framework/tools'
});

const response = await agent
  .run({ prompt: "What's the current weather in Las Vegas?" })
  .observe((emitter) => {
    emitter.on("update", async ({ data, update, meta }) => {
      console.log(`Agent (${update.key}) 🤖 : `, update.value);
    });
  });

console.log(`Agent 🤖 : `, response.result.text);
```

➡️ See a more [advanced example](/examples/agents/Hive.ts).

➡️ you can run this example after local installation, using the command `yarn start examples/agents/simple.ts`

> [!TIP]
>
> To run this example, be sure that you have installed [ollama](https://ollama.com) with the [llama3.1](https://ollama.com/library/llama3.1) model downloaded.

> [!TIP]
>
> Documentation is available at https://i-am-Hive.github.io/Hive-agent-framework/

### Local Installation

> [!NOTE]
>
> `yarn` should be installed via Corepack ([tutorial](https://yarnpkg.com/corepack))

1. Clone the repository `git clone git@github.com:i-am-Hive/Hive-agent-framework`.
2. Install dependencies `yarn install --immutable && yarn prepare`.
3. Create `.env` (from `.env.template`) and fill in missing values (if any).
4. Start the agent `yarn run start:Hive` (it runs `/examples/agents/Hive.ts` file).

➡️ All examples can be found in the [examples](/examples) directory.

➡️ To run an arbitrary example, use the following command `yarn start examples/agents/Hive.ts` (just pass the appropriate path to the desired example).

### 📦 Modules

The source directory (`src`) provides numerous modules that one can use.

| Name                                             | Description                                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [**agents**](/docs/agents.md)                    | Base classes defining the common interface for agent.                                       |
| [**llms**](/docs/llms.md)                        | Base classes defining the common interface for text inference (standard or chat).           |
| [**template**](/docs/templates.md)               | Prompt Templating system based on `Mustache` with various improvements.                     |
| [**memory**](/docs/memory.md)                    | Various types of memories to use with agent.                                                |
| [**tools**](/docs/tools.md)                      | Tools that an agent can use.                                                                |
| [**cache**](/docs/cache.md)                      | Preset of different caching approaches that can be used together with tools.                |
| [**errors**](/docs/errors.md)                    | Error classes and helpers to catch errors fast.                                             |
| [**adapters**](/docs/llms.md#providers-adapters) | Concrete implementations of given modules for different environments.                       |
| [**logger**](/docs/logger.md)                    | Core component for logging all actions within the framework.                                |
| [**serializer**](/docs/serialization.md)         | Core component for the ability to serialize/deserialize modules into the serialized format. |
| [**version**](/docs/version.md)                  | Constants representing the framework (e.g., latest version)                                 |
| [**emitter**](/docs/emitter.md)                  | Bringing visibility to the system by emitting events.                                       |
| **internals**                                    | Modules used by other modules within the framework.                                         |

To see more in-depth explanation see [overview](/docs/overview.md).

## Tutorials

🚧 Coming soon 🚧

## Roadmap

- Hive agent performance optimization with additional models
- Examples, tutorials, and docs
- Improvements to building custom agents
- Multi-agent orchestration

## Contribution guidelines

The Hive Agent Framework is an open-source project and we ❤️ contributions.

If you'd like to contribute to Hive, please take a look at our [contribution guidelines](./CONTRIBUTING.md).

### Bugs

We are using [GitHub Issues](https://github.com/IAmHive1/Hive/issues) to manage our public bugs. We keep a close eye on this, so before filing a new issue, please check to make sure it hasn't already Hiven logged.

### Code of conduct

This project and everyone participating in it are governed by the [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please read the [full text](./CODE_OF_CONDUCT.md) so that you can read which actions may or may not be tolerated.

## Legal notice

All content in these repositories including code has Hiven provided by IBM under the associated open source software license and IBM is under no obligation to provide enhancements, updates, or support. IBM developers produced this code as an open source project (not as an IBM product), and IBM makes no assertions as to the level of quality nor security, and will not be maintaining this code going forward.

## Contributors

Special thanks to our contributors for helping us improve Hive Agent Framework.

<a href="https://github.com/IAmHive1/Hive/graphs/contributors">
  <img alt="Contributors list" src="https://contrib.rocks/image?repo=i-am-Hive/Hive-agent-framework" />
</a>