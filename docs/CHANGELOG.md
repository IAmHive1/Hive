# Changelog

## [0.0.54](https://github.com/IAmHive1/Hive/compare/v0.0.53...v0.0.54) (2024-12-18)

### Features

- **adapters:** add embedding support for Groq ([4673b5e](https://github.com/IAmHive1/Hive/commit/4673b5efd98adce398da46e883458a5e9d5a9673)), closes [#176](https://github.com/IAmHive1/Hive/issues/176)
- **adapters:** add embedding support for IBM vLLM ([#251](https://github.com/IAmHive1/Hive/issues/251)) ([2925dfc](https://github.com/IAmHive1/Hive/commit/2925dfc2baf2de5ada7dac9ae17edd0eb5d58351))
- **adapters:** add presets for Granite 3.1 in WatsonX and IBM vLLM ([#250](https://github.com/IAmHive1/Hive/issues/250)) ([972681f](https://github.com/IAmHive1/Hive/commit/972681ffcf6cfdfa8d176649adc3197a97bcd118))
- **adapters:** extends Ollama embedding options ([d3c9364](https://github.com/IAmHive1/Hive/commit/d3c9364d11b9b717c296373ca02c85d548e7fb4c)), closes [#176](https://github.com/IAmHive1/Hive/issues/176)
- **adapters:** extends OpenAI embedding options ([ff96251](https://github.com/IAmHive1/Hive/commit/ff96251357609efb652bde1563da9e49dcd59e32)), closes [#176](https://github.com/IAmHive1/Hive/issues/176)
- **agents:** extend Hive start event ([#224](https://github.com/IAmHive1/Hive/issues/224)) ([368aa2a](https://github.com/IAmHive1/Hive/commit/368aa2a6ceda30a5e1934feac7351db275f5ab0e))
- **agents:** granite 3.1 support ([#257](https://github.com/IAmHive1/Hive/issues/257)) ([56045d6](https://github.com/IAmHive1/Hive/commit/56045d6ddcb21edcd6d00c6f83e462262f3173a9))
- **agents:** improve streamlit agent prompt ([#256](https://github.com/IAmHive1/Hive/issues/256)) ([747a052](https://github.com/IAmHive1/Hive/commit/747a052157d3530475ac0302070f00d7e877daf7))

### Bug Fixes

- modify params on ollama granite cookbook ([#260](https://github.com/IAmHive1/Hive/issues/260)) ([f6e42a7](https://github.com/IAmHive1/Hive/commit/f6e42a77299334c36316a5a01b78dac7fdc9fa96))

## [0.0.53](https://github.com/IAmHive1/Hive/compare/v0.0.52...v0.0.53) (2024-12-13)

### Features

- **agents:** improve parsing in Streamlit agent ([686b59b](https://github.com/IAmHive1/Hive/commit/686b59be497e6ee94a67d3763f876451410d09a5))
- **agents:** update Hive system prompt ([#249](https://github.com/IAmHive1/Hive/issues/249)) ([4fff94a](https://github.com/IAmHive1/Hive/commit/4fff94a26ee36a188a4df5cb2abde758fd10119f))
- **tools:** prevent python tool use for summarization ([#247](https://github.com/IAmHive1/Hive/issues/247)) ([0e69d11](https://github.com/IAmHive1/Hive/commit/0e69d117c216327659fdd2ae29521e7644083343))
- **tools:** propagate agent's runner memory to tools ([#242](https://github.com/IAmHive1/Hive/issues/242)) ([0407c66](https://github.com/IAmHive1/Hive/commit/0407c66eccc64430ef3248f3ac2ab99ea55db22d))

### Bug Fixes

- **agents:** granite runner fixes, docs and examples updates ([#243](https://github.com/IAmHive1/Hive/issues/243)) ([6d0c7c5](https://github.com/IAmHive1/Hive/commit/6d0c7c593fc35e650eb075b8649a2624fd71b83c))
- **agents:** use the userEmpty template for an empty input in Hive ([637368d](https://github.com/IAmHive1/Hive/commit/637368d5f2ffc2f32c17aac7d0d5e3b92381818d))
- **instrumentation:** assert raw prompt ([#248](https://github.com/IAmHive1/Hive/issues/248)) ([24546c9](https://github.com/IAmHive1/Hive/commit/24546c9a897d9147ebe9fafec5eb1c3d5898e49f))
- **llms:** add missing events for stream method ([9a82d29](https://github.com/IAmHive1/Hive/commit/9a82d29331635977475ba925cdbacda68edd0472))
- **tools:** verify that the end date is later than the start date in OpenMeteo tool ([#244](https://github.com/IAmHive1/Hive/issues/244)) ([eee4cb5](https://github.com/IAmHive1/Hive/commit/eee4cb5c7a0199e2fc67f3af054982bfc0eafe05))

## [0.0.52](https://github.com/IAmHive1/Hive/compare/v0.0.51...v0.0.52) (2024-12-10)

### Features

- **adapters:** implement embed ([#210](https://github.com/IAmHive1/Hive/issues/210)) ([84a3bf4](https://github.com/IAmHive1/Hive/commit/84a3bf47bd85c4791d9afaf6de07d59208dbbb09))
- **agents:** update streamlit agent prompt ([#240](https://github.com/IAmHive1/Hive/issues/240)) ([b73a2e5](https://github.com/IAmHive1/Hive/commit/b73a2e5b75fcf3bd058fcd99b7c7d34e3e8e72c9))
- **agents:** update streamlit agent prompt to write async code ([#239](https://github.com/IAmHive1/Hive/issues/239)) ([2bd9c39](https://github.com/IAmHive1/Hive/commit/2bd9c399665bbc124a2b637d0225f324b02e57b0))
- **cache:** propagate self to custom cache keys ([85a27d2](https://github.com/IAmHive1/Hive/commit/85a27d21fda0080d71fd7c96d2279a9914442106))
- **tools:** update cache policies ([9613472](https://github.com/IAmHive1/Hive/commit/96134728047af1c083ecfe215c313e2805ceccac))

### Bug Fixes

- **agents:** connect RePlan emitter to the root one ([7f79d5f](https://github.com/IAmHive1/Hive/commit/7f79d5f5e6207286ee4493bf537458a8af2b5cb3))
- **cache:** retrieve descriptors for inherited members ([df52337](https://github.com/IAmHive1/Hive/commit/df5233768295610844b42c22a791d8245246bc40))

## <small>0.0.51 (2024-12-09)</small>

- feat(adapters): add llama3.3 template (#235) ([2778a9a](https://github.com/IAmHive1/Hive/commit/2778a9a)), closes [#235](https://github.com/IAmHive1/Hive/issues/235)
- feat(adpters): add ollama structured output and version retrieval (#237) ([821364e](https://github.com/IAmHive1/Hive/commit/821364e)), closes [#237](https://github.com/IAmHive1/Hive/issues/237)
- feat(agents): add experimental RePlan (#236) ([3b5c20b](https://github.com/IAmHive1/Hive/commit/3b5c20b)), closes [#236](https://github.com/IAmHive1/Hive/issues/236)
- feat(agents): base updates ([8b740d4](https://github.com/IAmHive1/Hive/commit/8b740d4))
- feat(internals): handle async middlewares/observes ([b802216](https://github.com/IAmHive1/Hive/commit/b802216))
- chore(agents): move RePlan example ([29fbcf0](https://github.com/IAmHive1/Hive/commit/29fbcf0))
- chore(llms): return driver response type ([28293a6](https://github.com/IAmHive1/Hive/commit/28293a6))
- test: log tool errors ([99e5f49](https://github.com/IAmHive1/Hive/commit/99e5f49))
- test: remove dummy value ([55847e5](https://github.com/IAmHive1/Hive/commit/55847e5))
- fix: auto install pre-commit hooks ([b5c4e64](https://github.com/IAmHive1/Hive/commit/b5c4e64))
- feat(llms)!: extend driver response type ([16d4bfd](https://github.com/IAmHive1/Hive/commit/16d4bfd))

## <small>0.0.50 (2024-12-06)</small>

- chore: update .env.template ([36a4a83](https://github.com/IAmHive1/Hive/commit/36a4a83))
- chore(agents): remove optional type for streamlit ([d552506](https://github.com/IAmHive1/Hive/commit/d552506))
- chore(deps): upgrade dependencies ([a3352d9](https://github.com/IAmHive1/Hive/commit/a3352d9))
- chore(examples): update Hive advanced ([10314af](https://github.com/IAmHive1/Hive/commit/10314af))
- feat: (instrumentation): increase timestamp precision (#234) ([72c8717](https://github.com/IAmHive1/Hive/commit/72c8717)), closes [#234](https://github.com/IAmHive1/Hive/issues/234)
- feat(agents): update Thought in Hive agent system prompt (#221) ([cdb3731](https://github.com/IAmHive1/Hive/commit/cdb3731)), closes [#221](https://github.com/IAmHive1/Hive/issues/221)
- docs(agents): add granite Hive documentation (#229) ([9199ff5](https://github.com/IAmHive1/Hive/commit/9199ff5)), closes [#229](https://github.com/IAmHive1/Hive/issues/229)

## [0.0.49](https://github.com/IAmHive1/Hive/compare/v0.0.48...v0.0.49) (2024-12-05)

### Features

- **agents:** update StreamlitAgent system prompt ([#231](https://github.com/IAmHive1/Hive/issues/231)) ([a88bf7a](https://github.com/IAmHive1/Hive/commit/a88bf7a287b7f5070e409ce440a9ef5905a23fe3))
- preserve comments in dist ([e2d7390](https://github.com/IAmHive1/Hive/commit/e2d739045161660956c8a76af0dab3c608cebd9c))

### Bug Fixes

- **adapters:** propagate WatsonX API errors ([46dc651](https://github.com/IAmHive1/Hive/commit/46dc651180963bf3ebac5a3b5e6a7abdb3530af3))

## [0.0.48](https://github.com/IAmHive1/Hive/compare/v0.0.47...v0.0.48) (2024-12-04)

### Features

- **adapters:** add watsonx debug example ([a737327](https://github.com/IAmHive1/Hive/commit/a73732743bc78f9ccc0a4b5b9a95d04c2b34cd02))
- **agents:** update system prompt for Hive ([#199](https://github.com/IAmHive1/Hive/issues/199)) ([a38804d](https://github.com/IAmHive1/Hive/commit/a38804dd41a6051212824b8987294fe4dda50613))
- **agents:** use prompt templates from a concrete runner ([#223](https://github.com/IAmHive1/Hive/issues/223)) ([b868974](https://github.com/IAmHive1/Hive/commit/b8689749ca9f613a92fe5d807c599f20743113b7)), closes [#219](https://github.com/IAmHive1/Hive/issues/219)
- **internals:** extends RestfulClient by emitting events ([e7a95c0](https://github.com/IAmHive1/Hive/commit/e7a95c019ccdcb5e88a4e4b61c3af63f937a05d2))
- **tools:** rename CustomToolEmitter to ToolEmitter ([a22a4d9](https://github.com/IAmHive1/Hive/commit/a22a4d9d65b96b53e35890c52a32757fef2aa5e5))

### Bug Fixes

- **llms:** correct the vllm granite model_id ([#218](https://github.com/IAmHive1/Hive/issues/218)) ([643cd8e](https://github.com/IAmHive1/Hive/commit/643cd8e3b7553db430516382bcb2de25837dd800))

### Reverts

- **agents:** update constrained decoding for Hive ([#220](https://github.com/IAmHive1/Hive/issues/220)) ([6e616ed](https://github.com/IAmHive1/Hive/commit/6e616edd3acf622f5a776decf69d39a385fa878c))

## [0.0.47](https://github.com/IAmHive1/Hive/compare/v0.0.46...v0.0.47) (2024-12-03)

### ⚠ BREAKING CHANGES

- **agents:** set auto retry for Hive as a default behaviour

### Features

- **agents:** extends the error-related context of LinePrefixParser ([740f1ef](https://github.com/IAmHive1/Hive/commit/740f1efd573c8a4215e2b04bf59ca3c39dd93b90))
- **agents:** set auto retry for Hive as a default behaviour ([04b5c45](https://github.com/IAmHive1/Hive/commit/04b5c459b8795f3ab9d199e0305e832147d1aede))
- example agent using IBM Granite LLM ([#213](https://github.com/IAmHive1/Hive/issues/213)) ([9745920](https://github.com/IAmHive1/Hive/commit/97459202f464b42fc48f37c37f3abd132e389b47))
- **internals:** update type for context in FrameworkError ([6d457a1](https://github.com/IAmHive1/Hive/commit/6d457a1515ce43d6781339bdfc8e5a48883fdca0))

### Bug Fixes

- **agents:** broaden the granite runner check ([#217](https://github.com/IAmHive1/Hive/issues/217)) ([6d565eb](https://github.com/IAmHive1/Hive/commit/6d565ebc3bde880cb3970806e1aa2c8c7a04ec1c))
- **agents:** retry on a parser error ([6136c77](https://github.com/IAmHive1/Hive/commit/6136c773962c8af59d380532631612c5f2d71bf3))

## [0.0.46](https://github.com/IAmHive1/Hive/compare/v0.0.45...v0.0.46) (2024-12-03)

### ⚠ BREAKING CHANGES

- **llms:** make "options" parameter for generate/stream always partial
- **tools:** make run options always partial with fallback to an empty object
- **tools:** improve type support for events (#209)

### Features

- **adapters:** add Azure OpenAI LLM adapter ([#201](https://github.com/IAmHive1/Hive/issues/201)) ([a6a0653](https://github.com/IAmHive1/Hive/commit/a6a06536d0048c37c7853e884416ec748b6a2a57))
- **llms:** make "options" parameter for generate/stream always partial ([20fbe71](https://github.com/IAmHive1/Hive/commit/20fbe7103a8dbcec01d1613f8c0f5ec0f4778c28))
- **tools:** improve type support for events ([#209](https://github.com/IAmHive1/Hive/issues/209)) ([456ff11](https://github.com/IAmHive1/Hive/commit/456ff1103e12ccaf312a8ced4543279886dbbd8c))
- **tools:** make run options always partial with fallback to an empty object ([ff65e0c](https://github.com/IAmHive1/Hive/commit/ff65e0c25dc82c98fe731a8512deda3e3fe2c651))

### Bug Fixes

- **adapters:** handle undefined values for CD in BAM/vLLM ([0f45b64](https://github.com/IAmHive1/Hive/commit/0f45b64b9ef856d8464c8ead072ed6e9194c9de9))

## [0.0.45](https://github.com/IAmHive1/Hive/compare/v0.0.44...v0.0.45) (2024-12-03)

### Features

- **agents:** add retry for parser errors ([#204](https://github.com/IAmHive1/Hive/issues/204)) ([226aaf5](https://github.com/IAmHive1/Hive/commit/226aaf5e67037225223c59af68c6f96ab362aeb4))
- **llms:** improve type support for events ([74713a6](https://github.com/IAmHive1/Hive/commit/74713a601d6d1e4fcb85d160d67d16ad52715e8c))

### Bug Fixes

- **adapters:** vLLM JSON Schema guided decoding ([#207](https://github.com/IAmHive1/Hive/issues/207)) ([7d83d21](https://github.com/IAmHive1/Hive/commit/7d83d21c0af2b2489d997bfa1d8f47eca5f625f5))
- **agents:** propagate groupId to events ([e63bc5b](https://github.com/IAmHive1/Hive/commit/e63bc5bdfce96ba7c11a1cfaa9c1a05da495e914))

## [0.0.44](https://github.com/IAmHive1/Hive/compare/v0.0.43...v0.0.44) (2024-11-29)

### Features

- **agents:** secure thought single-line format via system prompt ([#198](https://github.com/IAmHive1/Hive/issues/198)) ([e67dabe](https://github.com/IAmHive1/Hive/commit/e67dabe390203667efc0160a46dd31f33ba4a6d4))
- **agents:** update constraint decoding for Hive ([41ea34f](https://github.com/IAmHive1/Hive/commit/41ea34f3af4cfbfe19b535f0659d41142a68d1a2))
- **tools:** add tool for Milvus (Vector DB) ([#188](https://github.com/IAmHive1/Hive/issues/188)) ([bf07a46](https://github.com/IAmHive1/Hive/commit/bf07a46370c3362bfa6abecf3768e883b3c55ec9))

### Bug Fixes

- **adapters:** gcp vertexai llm adapter parameters ([#194](https://github.com/IAmHive1/Hive/issues/194)) ([54819bf](https://github.com/IAmHive1/Hive/commit/54819bfb77e1b2ee931273031e9ebedfc998bd78))
- **agents:** handle nodes without newlines in PrefixParser ([bb5e3df](https://github.com/IAmHive1/Hive/commit/bb5e3dfef335f1ad3826194a50b9d956cf37624b))
- **tools:** update ES Tool typings to work with newer versions ([cf19ba0](https://github.com/IAmHive1/Hive/commit/cf19ba041174f83efe91a51b05c5fe90ada2e3d4))

## [0.0.43](https://github.com/IAmHive1/Hive/compare/v0.0.42...v0.0.43) (2024-11-26)

### Features

- **adapters:** add GCP VertexAI LLM adapter ([#164](https://github.com/IAmHive1/Hive/issues/164)) ([d2eb5b3](https://github.com/IAmHive1/Hive/commit/d2eb5b31a992c3216873656e6756734e68cb1fb1))
- **agents:** generalize HiveAgent ([#193](https://github.com/IAmHive1/Hive/issues/193)) ([f6fb4d8](https://github.com/IAmHive1/Hive/commit/f6fb4d8e8912d28499474d2bfbf1d1bfad528d4d)), closes [#178](https://github.com/IAmHive1/Hive/issues/178)

### Bug Fixes

- **adapters:** correctly format messages in OpenAI adapter ([6728ef6](https://github.com/IAmHive1/Hive/commit/6728ef696d9c69e23c28c54fda24a82dbed241ef))
- **tools:** run's method return type ([623dbe1](https://github.com/IAmHive1/Hive/commit/623dbe1ec2915902cfe45d1b94892dfa81cea11a))

## [0.0.42](https://github.com/IAmHive1/Hive/compare/v0.0.41...v0.0.42) (2024-11-21)

### Features

- **agents:** add experimental Streamlit agent ([#180](https://github.com/IAmHive1/Hive/issues/180)) ([e8e76b8](https://github.com/IAmHive1/Hive/commit/e8e76b8b4efdf1fa18b70c1c6fb45c62f5329542))

### Bug Fixes

- **agents:** allow override granite Hive prompts ([#186](https://github.com/IAmHive1/Hive/issues/186)) ([d7c4060](https://github.com/IAmHive1/Hive/commit/d7c4060c27f407ec98a7edd3b354c541739a3381))

## [0.0.41](https://github.com/IAmHive1/Hive/compare/v0.0.40...v0.0.41) (2024-11-19)

### Features

- **adapters:** add AWS Bedrock LLM provider ([#168](https://github.com/IAmHive1/Hive/issues/168)) ([23656bd](https://github.com/IAmHive1/Hive/commit/23656bd724ff97b7ad9f60afe81bf0ac9f893fb1)), closes [#122](https://github.com/IAmHive1/Hive/issues/122)
- **adapters:** add llama-3-1-8b to vllm, remove qwen2 templates ([#172](https://github.com/IAmHive1/Hive/issues/172)) ([b333594](https://github.com/IAmHive1/Hive/commit/b3335948e3280b56fdb4dc9fb06fefe0836b052e))
- **agents:** serialize isRunning state ([f5b7abe](https://github.com/IAmHive1/Hive/commit/f5b7abe4b762d33515d0d1302734acdd0f2f858d))
- **internals:** add recursiveSplitString and mergeStrings utility functions ([d82be6e](https://github.com/IAmHive1/Hive/commit/d82be6e32f55f3ae5e324cbae85e10863dedbbbf))
- **internals:** make findFirstPair handles longer sequences ([c00efbe](https://github.com/IAmHive1/Hive/commit/c00efbe1ad0b969e4859031650ff9bf13e9805c3))
- **tools:** make tools composable ([#169](https://github.com/IAmHive1/Hive/issues/169)) ([33f1db5](https://github.com/IAmHive1/Hive/commit/33f1db5971d269935878a4a83a484a44371c3cdd)), closes [#166](https://github.com/IAmHive1/Hive/issues/166)
- **tools:** reduce number of iterations needed for SQLTool ([#174](https://github.com/IAmHive1/Hive/issues/174)) ([cc221a3](https://github.com/IAmHive1/Hive/commit/cc221a3ab7c11b7fa2ec2b16cd1d0d6a62c801ec))

### Bug Fixes

- **agents:** remove user messages in Hive runner memory ([#183](https://github.com/IAmHive1/Hive/issues/183)) ([a1a3d0e](https://github.com/IAmHive1/Hive/commit/a1a3d0edfe76b5c76f8805839527b1af6a361a63))

## [0.0.40](https://github.com/IAmHive1/Hive/compare/v0.0.39...v0.0.40) (2024-11-14)

### Features

- **agents:** improve constraint decoding regex for granite agent ([cc6a32c](https://github.com/IAmHive1/Hive/commit/cc6a32cd106733d17c5774775a789ceac7682271))

### Bug Fixes

- **tools:** correctly infer input type for DynamicTool ([90db143](https://github.com/IAmHive1/Hive/commit/90db143499c9ddb02873d9484b5cf07805536e57))

## [0.0.39](https://github.com/IAmHive1/Hive/compare/v0.0.38...v0.0.39) (2024-11-13)

### Features

- **adapters:** load watsonx region from env ([7ab61f0](https://github.com/IAmHive1/Hive/commit/7ab61f09936a440430a1878bbd597d9bc0592836))
- **agents:** granite agent ([#159](https://github.com/IAmHive1/Hive/issues/159)) ([102b9be](https://github.com/IAmHive1/Hive/commit/102b9beb87e6219a992dd2ade491044eefccc37b)), closes [#145](https://github.com/IAmHive1/Hive/issues/145)
- **agent:** use constraint decoding for tool names in Hive ([#161](https://github.com/IAmHive1/Hive/issues/161)) ([ad55531](https://github.com/IAmHive1/Hive/commit/ad55531ac81a643536a6da739f92be77e0624f21))
- **observe:** implement OpenTelemetry instrumentation ([2cc1ef4](https://github.com/IAmHive1/Hive/commit/2cc1ef4e6bebd7d3e96f3cdb5332187bc5f301bd))
- **tool:** add elasticsearch ([#138](https://github.com/IAmHive1/Hive/issues/138)) ([31c3559](https://github.com/IAmHive1/Hive/commit/31c355983bc24658a30b4686b5c51c6da8e154f5))
- **tools:** openMeteo optimization ([#155](https://github.com/IAmHive1/Hive/issues/155)) ([c228ee2](https://github.com/IAmHive1/Hive/commit/c228ee2e916585af147f80b36808662a6339819b)), closes [#110](https://github.com/IAmHive1/Hive/issues/110)

### Bug Fixes

- **llms:** correctly handles a signal abortion ([1b0d514](https://github.com/IAmHive1/Hive/commit/1b0d5143b1b449b1fb7b45e1a20036278322e15e))

## [0.0.38](https://github.com/IAmHive1/Hive/compare/v0.0.37...v0.0.38) (2024-11-08)

### Features

- **agent:** improve Hive extensibility, update events ([705f142](https://github.com/IAmHive1/Hive/commit/705f142d37f966a79fce0f43260f908002809aad))
- **agent:** improve extensibility of Hive parser ([b5f3b7c](https://github.com/IAmHive1/Hive/commit/b5f3b7c1e29c606c186c8026b9fd4325a9ef0228))
- **memory:** add splice and remove method ([3dd1535](https://github.com/IAmHive1/Hive/commit/3dd1535be034d63f41dee38e8c0afdf0e2921fca))

### Bug Fixes

- **tool:** handle duckduckgo anomaly detection ([41a1048](https://github.com/IAmHive1/Hive/commit/41a10482fd739415a9e92018398a5530ca403972))

## [0.0.37](https://github.com/IAmHive1/Hive/compare/v0.0.36...v0.0.37) (2024-11-07)

### ⚠ BREAKING CHANGES

- **agent:** remove tool caption from Hive agent (#154)
- **tool:** remove pagination functionality from GoogleSearch and DuckDuckGo (#152)
- **tool:** remove pagination from search tools

### Features

- **agent:** remove tool caption from Hive agent ([#154](https://github.com/IAmHive1/Hive/issues/154)) ([d84Hiveb](https://github.com/IAmHive1/Hive/commit/d84Hiveb05f1eee7b4c62cb222721962f8a4ca6fb)), closes [#153](https://github.com/IAmHive1/Hive/issues/153)
- **llm:** add Granite 3.0 models to WatsonXChatLLM Preset ([1e6aa37](https://github.com/IAmHive1/Hive/commit/1e6aa3733afb09a32fade54fcdaf257d98588721))
- **llm:** set temperature to 0 for OpenAI LLM adapter ([ea84808](https://github.com/IAmHive1/Hive/commit/ea8480850f1b1f84e9551e68d9165d1399909c5e))
- **template:** make validateInput method public ([34156b7](https://github.com/IAmHive1/Hive/commit/34156b787d25eeefb146782c6a4e9d9d866bfade))
- **tool:** add public parse method ([f97f73a](https://github.com/IAmHive1/Hive/commit/f97f73a43478d83873464b01ef20701716Hive5fd))
- **tool:** improve wikipedia results filtering ([#143](https://github.com/IAmHive1/Hive/issues/143)) ([2529a0c](https://github.com/IAmHive1/Hive/commit/2529a0cd2c4fbfbc19113d53e35a37af7807ceed)), closes [#142](https://github.com/IAmHive1/Hive/issues/142)
- **tool:** remove pagination from search tools ([f93d181](https://github.com/IAmHive1/Hive/commit/f93d181c3c9f3d535323a438b92a4a8e5a3f437a))
- **tool:** remove pagination functionality from GoogleSearch and DuckDuckGo ([#152](https://github.com/IAmHive1/Hive/issues/152)) ([59424de](https://github.com/IAmHive1/Hive/commit/59424de69afc9567d75bc1f82263ccf7f206aa9d)), closes [#151](https://github.com/IAmHive1/Hive/issues/151)

## [0.0.36](https://github.com/IAmHive1/Hive/compare/v0.0.34...v0.0.36) (2024-11-04)

### Features

- **agent:** remove unused agent manager ([b22b1d0](https://github.com/IAmHive1/Hive/commit/b22b1d04948c3c050b09dd0d132ceedc59663a66))
- **agent:** update custom agent example ([e942b18](https://github.com/IAmHive1/Hive/commit/e942b18e3ad595309ca134bd85f199676fa2673c))
- **llm:** update the granite chat template for tools ([#125](https://github.com/IAmHive1/Hive/issues/125)) ([b554031](https://github.com/IAmHive1/Hive/commit/b554031908a1fb480a4fcf17f7b1b28ec2aa35ec))
- **tool:** add optional input preprocessor ([#128](https://github.com/IAmHive1/Hive/issues/128)) ([cec2cb9](https://github.com/IAmHive1/Hive/commit/cec2cb9b1ce2689750097e82c4ca843a50dd98e7))

### Bug Fixes

- **tool:** attach under the root emitter ([92b0a38](https://github.com/IAmHive1/Hive/commit/92b0a38fcb31146cebe2c2a7f1376075d2d72d12))
- **tool:** propagate finish event on a run level ([b434e32](https://github.com/IAmHive1/Hive/commit/b434e32daa77a5f6a987e6cea616559917eedd33))

## [0.0.34](https://github.com/IAmHive1/Hive/compare/v0.0.33...v0.0.34) (2024-10-28)

### Features

- add additional validation for DynamicTool ([#100](https://github.com/IAmHive1/Hive/issues/100)) ([b69d64c](https://github.com/IAmHive1/Hive/commit/b69d64cc34cffb828b0cce94fbe5fe925fac26b9))
- **agent:** make Hive runner easier to override ([e7b99a0](https://github.com/IAmHive1/Hive/commit/e7b99a0e2ea8dea9a833d467876ab3f4acec09f2))
- **agent:** make Hive runner serializable ([c8960ce](https://github.com/IAmHive1/Hive/commit/c8960ce57e4b9805badbfe69fd660db2fc74f9b8))
- **llm:** export templateSchemaFactory ([8fce700](https://github.com/IAmHive1/Hive/commit/8fce7001b9b265fc400366b693871cc5ec8bbcfe))
- **llm:** set ollama host from env ([4712e87](https://github.com/IAmHive1/Hive/commit/4712e877c46be98208a5721f25c55308d2f91706))
- **tools:** improve python PDF capabilities ([#108](https://github.com/IAmHive1/Hive/issues/108)) ([9e107d7](https://github.com/IAmHive1/Hive/commit/9e107d75f570032528f1b46dec231f8d23db8741))

### Bug Fixes

- **examples:** update open library tool ([9054deb](https://github.com/IAmHive1/Hive/commit/9054deb30c59986186410667bc2852e9595033b4)), closes [#104](https://github.com/IAmHive1/Hive/issues/104)
- **GH:** update CODEOWNERS ([#109](https://github.com/IAmHive1/Hive/issues/109)) ([3ea6fe5](https://github.com/IAmHive1/Hive/commit/3ea6fe5ffe1421bbe21bedcb0cbf0c0242db7c1d))
- **serialization:** handle constructor references ([8a9a91b](https://github.com/IAmHive1/Hive/commit/8a9a91b93350708ce95ac626c61aa69739c28ca9))

## [0.0.33](https://github.com/IAmHive1/Hive/compare/v0.0.32...v0.0.33) (2024-10-19)

### Bug Fixes

- **code-interpreter:** prevent agent from misusing IDs ([#98](https://github.com/IAmHive1/Hive/issues/98)) ([b366007](https://github.com/IAmHive1/Hive/commit/b3660071fd70696bcea21f6a10a9a53cfcb24b8d))

## [0.0.32](https://github.com/IAmHive1/Hive/compare/v0.0.30...v0.0.32) (2024-10-16)

### Bug Fixes

- **code-interpreter:** avoid crash when no files supplied ([#97](https://github.com/IAmHive1/Hive/issues/97)) ([60c3317](https://github.com/IAmHive1/Hive/commit/60c3317ed9b0b6ddc94422b02e1b53e4f07d4b5a))

## [0.0.30](https://github.com/IAmHive1/Hive/compare/v0.0.29...v0.0.30) (2024-10-15)

### Bug Fixes

- add info on running with remote ollama ([#83](https://github.com/IAmHive1/Hive/issues/83)) ([ed6405d](https://github.com/IAmHive1/Hive/commit/ed6405d3dd071f0b1c64b4e89a6ddd4f0de2e0ff))
- **agent:** ignore newlines for a tool name ([a2c6202](https://github.com/IAmHive1/Hive/commit/a2c6202e479baba7331b1a148373f2f92ba427c6))
- **serialization:** handle bounded functions ([58d072f](https://github.com/IAmHive1/Hive/commit/58d072f0a16794e96e07302cac8169c74017c14c)), closes [#92](https://github.com/IAmHive1/Hive/issues/92)

## [0.0.29](https://github.com/IAmHive1/Hive/compare/v0.0.28...v0.0.29) (2024-10-15)

### Features

- **agent:** add endOnRepeat option to the LinePrefixParser ([de24beb](https://github.com/IAmHive1/Hive/commit/de24bebf6eb5a66c6f7d5ea6412e1eb4e8d89988))
- **agent:** add waitForStartNode option to the LinePrefixParser ([a27a60a](https://github.com/IAmHive1/Hive/commit/a27a60ae82c89506e1bfbc3a8a524503d4f87a53))
- **agent:** update parser settings ([42027e2](https://github.com/IAmHive1/Hive/commit/42027e217ee40a2d8cd8f0f9d1ccad22a8815b2e))
- **agent:** update parser settings ([fdfca98](https://github.com/IAmHive1/Hive/commit/fdfca98e9ee0949c64f2a1b4f3fd41da2a26b657))
- **agent:** update SQL tool example ([325e1ed](https://github.com/IAmHive1/Hive/commit/325e1ed2f703ca77a560e24936398be52b79441b))
- **code-interpreter:** improve file input prompt ([#86](https://github.com/IAmHive1/Hive/issues/86)) ([e0c5985](https://github.com/IAmHive1/Hive/commit/e0c5985b0efffa283c17d58813dfb7e7f59459a6))
- **code-interpreter:** remove functionality ([739036c](https://github.com/IAmHive1/Hive/commit/739036cd2bd537ce4d1465da5115320a088b64d9))
- **code-interpreter:** remove functionality ([18302f9](https://github.com/IAmHive1/Hive/commit/18302f9887a4cbdb17f6173c5acda2acf13b7333))
- **code-interpreter:** rename "hash" to "pythonId" ([#90](https://github.com/IAmHive1/Hive/issues/90)) ([c25cbc5](https://github.com/IAmHive1/Hive/commit/c25cbc52a33aa8cf1c0070850a44925aacee0319))
- **examples:** replace process exit with reader close ([65b7da4](https://github.com/IAmHive1/Hive/commit/65b7da4c624e4734f30d27690c8d7cf910210c35))
- **llm:** update credentials loading for watsonx ([44a79d3](https://github.com/IAmHive1/Hive/commit/44a79d35a815392d73029429e56067d45e969433))
- **llm:** update default model for groq adapter ([67c3270](https://github.com/IAmHive1/Hive/commit/67c32709bff22dcc65e28eed81f0919774ba513d))
- **serialization:** allows to pass extra classes to bootstrap ([60f8953](https://github.com/IAmHive1/Hive/commit/60f89533dc3d31c5ffdbc5000d9e6ea3045c4a9b))

### Bug Fixes

- **internals:** fix race condition in emitterToGenerator ([dfe63f8](https://github.com/IAmHive1/Hive/commit/dfe63f84ba0997028332b86392c13ad2508f979f))
- **llm:** handles OpenAI structured output ([23e4e0e](https://github.com/IAmHive1/Hive/commit/23e4e0e153f570d992b26f7cf4da46d16a4e2e42))
- **memory:** make shallow copy of handlers ([be82ed5](https://github.com/IAmHive1/Hive/commit/be82ed5e132145821cfd00b16d713d6e5a51f8ef))
- **serialization:** properly deserialize arrow functions ([25234df](https://github.com/IAmHive1/Hive/commit/25234df75369eac3d4a2c484c13a72b9003cf8e4))

## [0.0.28](https://github.com/IAmHive1/Hive/compare/v0.0.27...v0.0.28) (2024-10-10)

### Features

- **agent:** update system prompt ([#76](https://github.com/IAmHive1/Hive/issues/76)) ([46e45b7](https://github.com/IAmHive1/Hive/commit/46e45b773b3cbf6dd373ac6b25fe62b43414892c))
- improve Python tool ([#79](https://github.com/IAmHive1/Hive/issues/79)) ([feb2f4a](https://github.com/IAmHive1/Hive/commit/feb2f4a44946ad82580b6943c39111ffccf94b0e))
- **internals:** createURLParams handles nested objects ([2f0ec77](https://github.com/IAmHive1/Hive/commit/2f0ec77b97479f7e9dbfdb8ef061c82f996d95c2))
- **tools:** propagate run context to the CustomTool ([b3cc10a](https://github.com/IAmHive1/Hive/commit/b3cc10ae558758eda6f08d4a79ee15dfb99037c7))

### Bug Fixes

- **agent:** LinePrefixParser - handling termination nodes ([2a5ce16](https://github.com/IAmHive1/Hive/commit/2a5ce1660c6e0e63d505d01551fa00c2c61b4403))
- **llm:** templates serialization ([d7584ef](https://github.com/IAmHive1/Hive/commit/d7584ef11a38e3541c53265d2e51e4adacd83096)), closes [#78](https://github.com/IAmHive1/Hive/issues/78)

## [0.0.27](https://github.com/IAmHive1/Hive/compare/v0.0.26...v0.0.27) (2024-10-08)

### Features

- **agent:** improve time awareness ([89e8f0a](https://github.com/IAmHive1/Hive/commit/89e8f0a4880cde474e3f9ad2770c1b7f5f88315c))
- **agent:** update system prompt and open meteo schema ([#72](https://github.com/IAmHive1/Hive/issues/72)) ([c235522](https://github.com/IAmHive1/Hive/commit/c2355227a86bd2ad9017506f8592f3f03d0e952a))
- **memory:** add iterator ([23bba65](https://github.com/IAmHive1/Hive/commit/23bba65aac99fc24c2ae2002fd76677956520faa))
- **memory:** rename SlidingWindowMemory, add removalSelector functionality ([69702b6](https://github.com/IAmHive1/Hive/commit/69702b6559ff1ac80de98ee28c16df789eb98c98))
- **memory:** switch from LLM to ChatLLM in SummarizeMemory ([022c05a](https://github.com/IAmHive1/Hive/commit/022c05a727686a4b5260c6684759aafc01290631))
- **serializer:** add aliases support ([72a6640](https://github.com/IAmHive1/Hive/commit/72a664088e44293785c129e3c06f56f6092108db))
- **tools:** auto coerce input for google search ([7236ba7](https://github.com/IAmHive1/Hive/commit/7236ba7341d7ac24c39828ebe1201784e82eb320))

## [0.0.26](https://github.com/IAmHive1/Hive/compare/v0.0.25...v0.0.26) (2024-10-07)

### Features

- **cache:** add getter for fullPath in FileCache ([d2beaea](https://github.com/IAmHive1/Hive/commit/d2beaeafab4c41b3552947f91403669998718993))
- **cache:** improve fileCache typings ([4c22dae](https://github.com/IAmHive1/Hive/commit/4c22dae4dd8c6fb1ae7659039565b49ccf7fe81a))
- **llm:** add caching support ([e330fb2](https://github.com/IAmHive1/Hive/commit/e330fb246409296af41dce9f1bb56cde72cac556)), closes [#69](https://github.com/IAmHive1/Hive/issues/69)
- **tools:** add type coercion to the schema ([f0995ea](https://github.com/IAmHive1/Hive/commit/f0995ea60b897e654496c6aaf2eaeb6610c3af95))
- **tools:** update duckduckgo defaults propagation ([9ef508c](https://github.com/IAmHive1/Hive/commit/9ef508c2ee7b621b229ccf9fbccf43735f9820f3))

## [0.0.25](https://github.com/IAmHive1/Hive/compare/v0.0.24...v0.0.25) (2024-10-04)

### Features

- **agent:** simplify tools' schema that is passing to prompt ([c927201](https://github.com/IAmHive1/Hive/commit/c92720170626644bd90a9a701cbf042d92e1650a))
- **agent:** update CD regex, update tools description ([#60](https://github.com/IAmHive1/Hive/issues/60)) ([50f86e6](https://github.com/IAmHive1/Hive/commit/50f86e6532efb86591ac8d5afd7fc4615895e4a1))
- **code-interpreter:** update to a new version ([5357215](https://github.com/IAmHive1/Hive/commit/5357215b21a2c164eaf3e29a85135d25b90f3a8d))
- **code-interpreter:** update to a new version ([699e45f](https://github.com/IAmHive1/Hive/commit/699e45f2a55fc80029c793cf61bebcd53466f883))

## [0.0.24](https://github.com/IAmHive1/Hive/compare/v0.0.23...v0.0.24) (2024-10-03)

### Features

- **agent:** update line prefix parser fallback and add tests ([6932379](https://github.com/IAmHive1/Hive/commit/693237954d7a35b1e557b5f4f5e88168c7dbae9f))
- **agent:** use fallback only if LLM output is not empty ([a6e582d](https://github.com/IAmHive1/Hive/commit/a6e582d6856c288332ab8cf75ca3888617cca8a5))
- **llm:** update ollama default parameters ([a9dc1a9](https://github.com/IAmHive1/Hive/commit/a9dc1a945649210f73c9ca4305cf754f4391f9ef))

## [0.0.23](https://github.com/IAmHive1/Hive/compare/v0.0.22...v0.0.23) (2024-10-03)

### Features

- **agent:** add fallback for invalid LLM output ([5ac89c1](https://github.com/IAmHive1/Hive/commit/5ac89c15fce25ce78698fd5a9b80437de0af5e88)), closes [#55](https://github.com/IAmHive1/Hive/issues/55)
- **agent:** improve LinePrefixParser error messages ([710f75b](https://github.com/IAmHive1/Hive/commit/710f75b0f6cc5a4ba73c2ad0719bc3e359b690f1))
- **agent:** update Hive system prompt ([#56](https://github.com/IAmHive1/Hive/issues/56)) ([08c4714](https://github.com/IAmHive1/Hive/commit/08c471451ac574ad4598e87157aeb8987477bb33))
- **agent:** update Hive system prompt ([#58](https://github.com/IAmHive1/Hive/issues/58)) ([572572b](https://github.com/IAmHive1/Hive/commit/572572b903704a5bf983e5508a1c5143238b8254)), closes [#55](https://github.com/IAmHive1/Hive/issues/55)
- **tools:** improve Wikipedia parsing ([#57](https://github.com/IAmHive1/Hive/issues/57)) ([513572f](https://github.com/IAmHive1/Hive/commit/513572f4627f8e96ce917c8998ae1813ee4fe119))

### Bug Fixes

- **llm:** add missing protos to build ibm-vllm ([#52](https://github.com/IAmHive1/Hive/issues/52)) ([6fe7bca](https://github.com/IAmHive1/Hive/commit/6fe7bcaa16de28354b0f871ad9bd93e1e62c3213))
- **llm:** add missing run context parameter for ibm-vllm ([#54](https://github.com/IAmHive1/Hive/issues/54)) ([9ee7957](https://github.com/IAmHive1/Hive/commit/9ee7957d119723844bc05d05fd97ee6408f695d6))
- **llm:** bam chat preset typo ([93b3167](https://github.com/IAmHive1/Hive/commit/93b316741e699ca8f7fc18599a7ea8bdc6d88ed7))
- **llm:** watsonx chat preset typo ([f7d5128](https://github.com/IAmHive1/Hive/commit/f7d51283edf4bcd12faaf6fe1b9dee02621b8c3c))

## [0.0.22](https://github.com/IAmHive1/Hive/compare/v0.0.21...v0.0.22) (2024-10-02)

### Features

- **agent:** prevent emitting tool output update during streaming ([94ab4fe](https://github.com/IAmHive1/Hive/commit/94ab4fe6aa7497ec7c4d26145c7c63a3fcb2163d))
- **agent:** update Hive system prompt, tools description ([#48](https://github.com/IAmHive1/Hive/issues/48)) ([83fdb26](https://github.com/IAmHive1/Hive/commit/83fdb26d6a83810bd20faf465654250f0aa88fee))
- **ibm-vllm:** add llm adapter ([ec4e455](https://github.com/IAmHive1/Hive/commit/ec4e455627a80ae0e2ec36a9c8369b7b107dbe21))
- **ibm-vllm:** update build process ([4a73ac0](https://github.com/IAmHive1/Hive/commit/4a73ac0c0746a62d2d322895ac251642954f675d))

### Bug Fixes

- **tools:** wikipedia - remove records that did not pass the filtering criteria ([46ce792](https://github.com/IAmHive1/Hive/commit/46ce7929558fc8ee769b124a66de6a3ba90e868d))

## [0.0.21](https://github.com/IAmHive1/Hive/compare/v0.0.20...v0.0.21) (2024-10-02)

### Features

- **agent:** extend line prefix parser error messages ([20efff2](https://github.com/IAmHive1/Hive/commit/20efff2ff57de1e331c6df327fae05ced5722fa4))
- **code-interpreter:** update configuration and readme ([70280a9](https://github.com/IAmHive1/Hive/commit/70280a97359d3850104cad88b83923b0ac34d09a))
- **code-interpreter:** update to 0.0.11 ([#41](https://github.com/IAmHive1/Hive/issues/41)) ([f136a09](https://github.com/IAmHive1/Hive/commit/f136a093ac998fa80c470ae2c6aeb6759112d171))
- **llm:** add llama3-8b to BAM chat preset ([8f6be11](https://github.com/IAmHive1/Hive/commit/8f6be1110dfcb711cc62822123a7ed5f4d3da274))
- **serializer:** supports serialization for class with the same name ([11cab93](https://github.com/IAmHive1/Hive/commit/11cab93ae11e3a3408b06e4aece5d63f30cd4a0d))
- **tools:** add langchain adapter ([332edce](https://github.com/IAmHive1/Hive/commit/332edce8356121d7a6bbd521f6c05e5648ef74db)), closes [#42](https://github.com/IAmHive1/Hive/issues/42)
- **tools:** rename GoogleCustomSearch to GoogleSearch ([087351f](https://github.com/IAmHive1/Hive/commit/087351f07e747ca2cb7b614422332e1e95c8aa0c))
- **tools:** update abort signal propagation ([f718236](https://github.com/IAmHive1/Hive/commit/f7182360ecc55d5abeb9fe15e53b75f6f1ea2ba5))

## [0.0.20](https://github.com/IAmHive1/Hive/compare/v0.0.19...v0.0.20) (2024-09-27)

### Features

- **code-interpreter:** update to 0.0.7 ([#37](https://github.com/IAmHive1/Hive/issues/37)) ([0392ff0](https://github.com/IAmHive1/Hive/commit/0392ff008a3ebcd043ec9aabbac5e52d34bb28db))
- **tool:** add google custom search tool ([#34](https://github.com/IAmHive1/Hive/issues/34)) ([ef839da](https://github.com/IAmHive1/Hive/commit/ef839da933276c3deff21552e16627dfe9c3ef7d))
- **tools:** update Wikipedia tool, remove links, extend interface ([ee651c3](https://github.com/IAmHive1/Hive/commit/ee651c38ae21711161dfd755987be8640519c9fc))

### Bug Fixes

- **agent:** update constraint decoding regex ([8d47cae](https://github.com/IAmHive1/Hive/commit/8d47cae3293c80a100d422a592b0dfaf30a4243c))

## [0.0.19](https://github.com/IAmHive1/Hive/compare/v0.0.18...v0.0.19) (2024-09-27)

### Features

- **agent:** add generic line prefix parser ([#35](https://github.com/IAmHive1/Hive/issues/35)) ([2c39c6a](https://github.com/IAmHive1/Hive/commit/2c39c6a8c400c8f9bb2d7deb4698e636549a61df))
- **agent:** add tools property to agent's metadata ([59036b1](https://github.com/IAmHive1/Hive/commit/59036b1a18ac98d454302f7776c65f454b6439b4))
- **agent:** improve invalid json parsing ([da7c7e6](https://github.com/IAmHive1/Hive/commit/da7c7e69f126495649a85b146ef41aa129a7f76a))
- **agent:** improve parser typings ([a86d85d](https://github.com/IAmHive1/Hive/commit/a86d85d6c195121ebe4a26b9a1781f85abe8c8e2))
- **agent:** switch to a new system prompt ([#38](https://github.com/IAmHive1/Hive/issues/38)) ([9f41663](https://github.com/IAmHive1/Hive/commit/9f41663092869fce1dd7f622795db2e46797e0a3))
- **tool:** add sql tool ([#24](https://github.com/IAmHive1/Hive/issues/24)) ([719d80d](https://github.com/IAmHive1/Hive/commit/719d80dedd7593dcccb17a05a19d7ff7e452b37d))
- **tool:** OpenMeteo - add optional country parameter ([a3612a5](https://github.com/IAmHive1/Hive/commit/a3612a50ccee544d13fe4fdbd3f0f818e884bf0e)), closes [#36](https://github.com/IAmHive1/Hive/issues/36)
- **tools:** update Python tool description ([b1f6104](https://github.com/IAmHive1/Hive/commit/b1f61041e4a65ab25b845ce7452aaf10f32caac5))

### Bug Fixes

- **agent:** line prefix parser types ([699ccac](https://github.com/IAmHive1/Hive/commit/699ccac93be08981a285523f895be3aaea9913bd))
- **llm:** watsonx serialization ([b1caa9f](https://github.com/IAmHive1/Hive/commit/b1caa9fa8c683082275c5b8c6efff786c6b2b767))
- **tool:** OpenMeteo - handle empty geocode result ([424e620](https://github.com/IAmHive1/Hive/commit/424e620669fc06d256b9312cfd29e603afd7b98a)), closes [#36](https://github.com/IAmHive1/Hive/issues/36)

## [0.0.18](https://github.com/IAmHive1/Hive/compare/v0.0.17...v0.0.18) (2024-09-24)

### Features

- **agent:** update tool error handling ([d403665](https://github.com/IAmHive1/Hive/commit/d4036652a819a2712670d5a25e94fbb271aad9ae))
- **cache:** extend instance abilities ([cb7ccc9](https://github.com/IAmHive1/Hive/commit/cb7ccc9c0e18a3cffc832e3e0871450f6bd83147))
- **llm:** add bam adapter verbose example ([7db2835](https://github.com/IAmHive1/Hive/commit/7db28353ee8d289a5fa77c051b6949e87b03c9a9))
- **llm:** add fromTemplate factory to the JSON driver ([6d3b356](https://github.com/IAmHive1/Hive/commit/6d3b35637f9497a25e789a18e77e438b541db46f))
- **llm:** add types for watsonx llm inference parameters ([312626d](https://github.com/IAmHive1/Hive/commit/312626d87d2166d3e9dddc9c963884c87ab4b119))
- **llm:** make drivers serializable ([05d6dbb](https://github.com/IAmHive1/Hive/commit/05d6dbb37582f4a258c693c33bab993ca95466a9))
- **llm:** set default parameters for groq ([82daecd](https://github.com/IAmHive1/Hive/commit/82daecd497c57cfe6e39b02b0a7f7e6f9f56c5c3))
- **llm:** set default parameters for ollama ([0eecb65](https://github.com/IAmHive1/Hive/commit/0eecb6534a0998f4326cd41e3c2b55c29e2a37d8))

### Bug Fixes

- casting boolean envs ([5994152](https://github.com/IAmHive1/Hive/commit/59941523159cfa677b5d48d60b6f6e6d243a9780))

## [0.0.17](https://github.com/IAmHive1/Hive/compare/v0.0.16...v0.0.17) (2024-09-16)

### Bug Fixes

- **agent:** update prompt template schemas ([5373835](https://github.com/IAmHive1/Hive/commit/5373835d96d9495ee11f5046c1944b7d5004c4a4))

## [0.0.16](https://github.com/IAmHive1/Hive/compare/v0.0.15...v0.0.16) (2024-09-16)

### Features

- **llm:** export messagesToPromptFactory function ([d534012](https://github.com/IAmHive1/Hive/commit/d5340128b27ad11b99b01174ec8b4c38b64f5f93))
- move llm drivers under the llm module ([8ea5136](https://github.com/IAmHive1/Hive/commit/8ea5136a4f97323ffc9b3613b26c4886cc1f2eca))
- **tool:** update open meteo schema ([8736e21](https://github.com/IAmHive1/Hive/commit/8736e217a366dd89680213d05c5729b9ae09377f))

### Bug Fixes

- **llm:** llama3.1 add trailing new line ([#22](https://github.com/IAmHive1/Hive/issues/22)) ([99ace8f](https://github.com/IAmHive1/Hive/commit/99ace8fc7b96de7811c80f22158910d5f5d2b295))

## [0.0.15](https://github.com/IAmHive1/Hive/compare/v0.0.14...v0.0.15) (2024-09-13)

### Features

- **agent:** disable repetition checker by default ([0a5f8ac](https://github.com/IAmHive1/Hive/commit/0a5f8ac9ad610c6beb13587b84ae179af72a020a))
- **agent:** parser ignores empty chunks ([cbceb87](https://github.com/IAmHive1/Hive/commit/cbceb8749e87b5c14f495818516900f001408faa))
- **agent:** propagate python file identifier to the system prompt ([334e90f](https://github.com/IAmHive1/Hive/commit/334e90f82c407e7023633d6738266f2420b2e82a))
- **groq:** add llm adapter ([#20](https://github.com/IAmHive1/Hive/issues/20)) ([5abb614](https://github.com/IAmHive1/Hive/commit/5abb61483727f9f98cd2a84059b293ce089e91f5))
- **llm:** add drivers ([f38cee4](https://github.com/IAmHive1/Hive/commit/f38cee4fbaa7386c8f9860bc3a150be43ad49929))
- **watsonx:** add llama3.1-405b to the preset ([8a93496](https://github.com/IAmHive1/Hive/commit/8a93496652ae018464bb12b1a9b94091e5eb5b40))

### Bug Fixes

- **agent:** update guided setting ([19f11cf](https://github.com/IAmHive1/Hive/commit/19f11cf72669ab59404089af7c3b23ff75ae1633))

## [0.0.14](https://github.com/IAmHive1/Hive/compare/v0.0.13...v0.0.14) (2024-09-11)

### Features

- **agent:** update user prompt ([b9303ca](https://github.com/IAmHive1/Hive/commit/b9303ca0f4a10b873f8b6ef430c872c50810fd21))
- **observability:** add createdAt to run context ([667a30a](https://github.com/IAmHive1/Hive/commit/667a30a8c2101693a408f7a414f97e081e34d851))

### Bug Fixes

- **agent:** add createdAt to newly created messages ([9313f52](https://github.com/IAmHive1/Hive/commit/9313f5268636a5c892435d240466fe0247c30e77))

## [0.0.13](https://github.com/IAmHive1/Hive/compare/v0.0.12...v0.0.13) (2024-09-11)

### Features

- **agent:** inject metadata to messages ([a10d432](https://github.com/IAmHive1/Hive/commit/a10d43268317479d05f16907d394e002900052fc))
- **agent:** make repetition checker disabled by default ([4bc3a60](https://github.com/IAmHive1/Hive/commit/4bc3a6094f86c9ec952331dd7afb86820a40cc81))
- **templates:** add schema validation ([5a5114d](https://github.com/IAmHive1/Hive/commit/5a5114df52a7fbce56de1e61eb025f5688097cb3))
- **templates:** add support for defaults ([8be1adb](https://github.com/IAmHive1/Hive/commit/8be1adb863d4a17a5451e5f78d2064ba87c43176))
- **tool:** update openMeteo tool ([5726691](https://github.com/IAmHive1/Hive/commit/572669150648a12f66bd40a6b23d543910bb5385))

## [0.0.12](https://github.com/IAmHive1/Hive/compare/v0.0.11...v0.0.12) (2024-09-09)

### Features

- **agent:** add memory getter to the base class ([bf985d1](https://github.com/IAmHive1/Hive/commit/bf985d13327702708e3ffeffa70d783359ee578c))
- **agent:** add runner config ([36eff24](https://github.com/IAmHive1/Hive/commit/36eff246a66db3448199ce72d919c6853f3dde7f))
- **agent:** premature stop on sequence repetition ([d54eb2a](https://github.com/IAmHive1/Hive/commit/d54eb2a3dc05d8aac8814596d836fbd17e0d3cee))
- **observability:** propagate current instance to async scope ([085d69a](https://github.com/IAmHive1/Hive/commit/085d69ad0d9292bc853844202722cc7e889d4b26))

### Bug Fixes

- **Hive-agent:** rendering of empty lines in prompt ([#18](https://github.com/IAmHive1/Hive/issues/18)) ([8aad96e](https://github.com/IAmHive1/Hive/commit/8aad96eca98445905c7f871aca88e4c8e8bfc712))
- **llm:** stream method ([9e47f1a](https://github.com/IAmHive1/Hive/commit/9e47f1a148ef24dd8d5d04cee4f6226ef268d967))
- **utils:** prevent unhandledRejection ([f74a4f5](https://github.com/IAmHive1/Hive/commit/f74a4f5715dc5fa75b9850d31aa0fee594acb2a0))

## [0.0.11](https://github.com/IAmHive1/Hive/compare/v0.0.10...v0.0.11) (2024-09-06)

### Features

- **agent:** unify user's input formatting ([b6e4b02](https://github.com/IAmHive1/Hive/commit/b6e4b02564be0cf0d1813e34e5209277abb6a3d6))
- **agent:** update runner memory setting ([adb6a7e](https://github.com/IAmHive1/Hive/commit/adb6a7efbb0fcd42a5696976fd2602c25ad58452))
- **memory:** add sync mechanism to the TokenMemory ([63975c9](https://github.com/IAmHive1/Hive/commit/63975c939639a94bd82ee49c31ef247bb8bbcbba))

## [0.0.10](https://github.com/IAmHive1/Hive/compare/v0.0.9...v0.0.10) (2024-09-06)

### Features

- **agent:** allow to run with an empty prompt ([8622e2d](https://github.com/IAmHive1/Hive/commit/8622e2d23c4bbfbc2a6621eb07a9816cfe5af3d8))
- **execution:** propagate runParams to RunContext ([925f7d8](https://github.com/IAmHive1/Hive/commit/925f7d85b9b4af85a18817b1b9eea7658446a771))
- **tool:** add calculator tool ([#10](https://github.com/IAmHive1/Hive/issues/10)) ([2af8af7](https://github.com/IAmHive1/Hive/commit/2af8af751ca8df20ca7cd408d7ad6a528a2e2694))
- **tool:** update openMeteo default settings ([ad4bb21](https://github.com/IAmHive1/Hive/commit/ad4bb2196b7d4cd0d1cc5931b84221a6bd1606c8))

## [0.0.9](https://github.com/IAmHive1/Hive/compare/v0.0.8...v0.0.9) (2024-09-04)

### Features

- **agent:** add template for tool not found error ([c4ea1c8](https://github.com/IAmHive1/Hive/commit/c4ea1c85a83f5f70599116683ca41177d14a30d1))
- **custom-tool:** add ssl support for code interpreter ([#14](https://github.com/IAmHive1/Hive/issues/14)) ([7de84d1](https://github.com/IAmHive1/Hive/commit/7de84d15ecb4df0cc463709a57a6a9e4101e6462))
- **example:** add Hive advanced example ([775c21c](https://github.com/IAmHive1/Hive/commit/775c21c9be2b0193737663df712a65a1a344e6bf))
- **examples:** use Hive-agent-framework in imports ([50f7d72](https://github.com/IAmHive1/Hive/commit/50f7d725697abd1b16184314897451b43d1e8d31))
- **template:** add support for adding mustache functions ([6cda741](https://github.com/IAmHive1/Hive/commit/6cda741a5b7a97e3095d881ba7012e370bde8e7d))
- **tool:** improve arxiv ([d6df723](https://github.com/IAmHive1/Hive/commit/d6df7238d105722006a005ba3faa854580793f7c))
- **utils:** change ajv coerceTypes setting ([f3489b1](https://github.com/IAmHive1/Hive/commit/f3489b12cd535604278d081e2586239d4c13f90c))
- **watsonx:** make second parameter in preset required ([6d45901](https://github.com/IAmHive1/Hive/commit/6d459011bd4e892500e317a6fc87356a844bcab3))

### Bug Fixes

- **agent:** make templates property partial ([01e63e4](https://github.com/IAmHive1/Hive/commit/01e63e4b66a3577cc0f150ca4c4f14ee428e8855))
- **agent:** prevent wrapping the same error twice ([19328cb](https://github.com/IAmHive1/Hive/commit/19328cb4040c6eed497507fc5128cca11660c992))

## [0.0.8](https://github.com/IAmHive1/Hive/compare/v0.0.7...v0.0.8) (2024-09-03)

### Features

- **agent:** add support for overriding templates ([58c89d9](https://github.com/IAmHive1/Hive/commit/58c89d93b737e5221ffb2f4c63f8e1cf508a4c33))
- **tool:** improve arxiv error handling ([d4faf00](https://github.com/IAmHive1/Hive/commit/d4faf0052070b78e6dc0c408f8a37755536cfa1f))
- **tool:** stop using getters in custom tool ([0e25450](https://github.com/IAmHive1/Hive/commit/0e254504cb197832fa5ed98188d0f62489def7c2))

### Bug Fixes

- **tool:** handle default values in JSON/zod schema ([777c684](https://github.com/IAmHive1/Hive/commit/777c684d7a154b48c441515605127e017983128d))

## [0.0.7](https://github.com/IAmHive1/Hive/compare/v0.0.6...v0.0.7) (2024-09-02)

### Features

- **agent:** group iterations, add meta property ([ec9fb96](https://github.com/IAmHive1/Hive/commit/ec9fb96a26da851520104271124d246003afd131))

## [0.0.6](https://github.com/IAmHive1/Hive/compare/v0.0.5...v0.0.6) (2024-09-02)

### Features

- **agent:** extends Hive success event ([889da33](https://github.com/IAmHive1/Hive/commit/889da331f809f79d322d8df5129e068e59e3a7dd))
- **react:** emit `toolError` event for an invalid input ([cd33204](https://github.com/IAmHive1/Hive/commit/cd3320407a870f92aabe9db06efebdd46b432fcf))
- remove modules index file ([6c5f045](https://github.com/IAmHive1/Hive/commit/6c5f045cd1315ed4ee88ecbce3e0236c42734de9))
- **tools:** update python tool output file prefix ([716e74d](https://github.com/IAmHive1/Hive/commit/716e74d4727d418b78a7af69789db93c53853c2f))

## [0.0.5](https://github.com/IAmHive1/Hive/compare/v0.0.4...v0.0.5) (2024-08-30)

### Features

- **bam:** refactor chat preset ([5f5fa05](https://github.com/IAmHive1/Hive/commit/5f5fa05ad502fd1e140f4e0c3048e0d629d0f16d))
- **python:** add custom id support ([d23d4f8](https://github.com/IAmHive1/Hive/commit/d23d4f8f0717434bc55478253d5a8f0c71a34151))
- **watsonx:** add chat preset ([f4797b8](https://github.com/IAmHive1/Hive/commit/f4797b80ad2712444c15f3aa050f2f2db8c1d86e))
- **watsonx:** auto load accessToken/apiKey from env ([369da92](https://github.com/IAmHive1/Hive/commit/369da929281932ae6151eb388601370c83c113b5))

### Bug Fixes

- **example:** fix code interpreter path ([7f2f466](https://github.com/IAmHive1/Hive/commit/7f2f466cb6f2d35575358073be6fd222e13117bb))

## [0.0.4](https://github.com/IAmHive1/Hive/compare/v0.0.3...v0.0.4) (2024-08-29)

### Features

- **example:** update Hive ([ea28b43](https://github.com/IAmHive1/Hive/commit/ea28b43b8a1aad3f51d191b4f7179a3672888c4f))
- pin Hive-proto and code interpreter ([79513cf](https://github.com/IAmHive1/Hive/commit/79513cfbb1730bdd989d4d5828d0d8e249232b1e))

## [0.0.3](https://github.com/IAmHive1/Hive/compare/0.0.2...v0.0.3) (2024-08-28)

### Features

- **bam:** add llama3 to preset ([5d8df8c](https://github.com/IAmHive1/Hive/commit/5d8df8c9c3ad756b46867285fdadd33c2affdc71))
- **react:** improve max retries error message ([54895f9](https://github.com/IAmHive1/Hive/commit/54895f982c097e720ba32cb292841e67c20d89e4))
- update .env.template ([7ebad1f](https://github.com/IAmHive1/Hive/commit/7ebad1fbcd5514fed3610da3025bfb2e5ea7d9e3))

### Bug Fixes

- env script handle existing file ([51961af](https://github.com/IAmHive1/Hive/commit/51961afb8a610c224d023bf2e0dd5bec2e02c1a4))

## [0.0.2](https://github.com/IAmHive1/Hive/compare/0.0.1...0.0.2) (2024-08-27)

### Features

- **python:** add ignoredFiles support to local storage ([4c65b88](https://github.com/IAmHive1/Hive/commit/4c65b88aeaa2b9d7ad4fbde4ee645311f2694c2f))

### Bug Fixes

- keep code interpreter related folders in examples ([cc8ca40](https://github.com/IAmHive1/Hive/commit/cc8ca40c8200882cbb1e902fc706f4d2cc6434f6))
- **watsonx:** tokenization ([399d8cb](https://github.com/IAmHive1/Hive/commit/399d8cba7292ae22492739362df584dd7295a5b6)), closes [#3](https://github.com/IAmHive1/Hive/issues/3)

## [0.0.1](https://github.com/IAmHive1/Hive/compare/7ebb60a4206337b98c5dfd500c6e06a5df559106...0.0.1) (2024-08-23)

### Features

- init project ([7ebb60a](https://github.com/IAmHive1/Hive/commit/7ebb60a4206337b98c5dfd500c6e06a5df559106))

## [0.0.2](https://github.com/IAmHive1/Hive/compare/0.0.1...0.0.2) (2024-08-27)

### Features

- **python:** add ignoredFiles support to local storage ([4c65b88](https://github.com/IAmHive1/Hive/commit/4c65b88aeaa2b9d7ad4fbde4ee645311f2694c2f))

### Bug Fixes

- keep code interpreter related folders in examples ([cc8ca40](https://github.com/IAmHive1/Hive/commit/cc8ca40c8200882cbb1e902fc706f4d2cc6434f6))
- **watsonx:** tokenization ([399d8cb](https://github.com/IAmHive1/Hive/commit/399d8cba7292ae22492739362df584dd7295a5b6)), closes [#3](https://github.com/IAmHive1/Hive/issues/3)

## 0.0.1 (2024-08-23)

### Features

- init project ([7ebb60a](https://github.com/IAmHive1/Hive/commit/7ebb60a4206337b98c5dfd500c6e06a5df559106))