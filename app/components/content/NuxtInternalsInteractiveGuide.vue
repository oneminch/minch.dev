<script lang="ts" setup>
	import { computed, ref } from 'vue';

	const phases = [
		{ label: 'Phase 1: Build Init', key: 'build' },
		{ label: 'Phase 2: Server Runtime', key: 'server' },
		{ label: 'Phase 3: Client Runtime', key: 'client' },
		{ label: 'Phase 4: Navigation', key: 'nav' }
	];

	const content: Record<string, any[]> = {
		build: [
			{
				num: '1.1',
				title: 'CLI entry — loadNuxtConfig',
				hooks: [],
				body: `<code>nuxt dev</code> or <code>nuxt build</code> is called via <code>@nuxt/cli</code>. The first thing that runs is <code>loadNuxtConfig()</code> from <code>@nuxt/kit</code>, which uses <code>c12</code> (the UnJS config loader) to read <code>nuxt.config.ts</code>.<br><br>c12 resolves the config file, evaluates it, then recursively processes any <code>extends</code> layers, merging their configs bottom-up using <code>defu</code> (deep merge, user values win). The result is a fully normalized <code>NuxtOptions</code> object. Every key has a typed default from <code>@nuxt/schema</code>.`,
				source: 'packages/nuxt/src/core/config.ts · @nuxt/kit/src/config.ts'
			},
			{
				num: '1.2',
				title: 'createNuxt — the nuxt object is born',
				hooks: [{ label: 'ready', type: 'build' }],
				body: `<code>createNuxt(options)</code> constructs the build-time singleton: a <code>hookable</code> event bus, the virtual file system map (<code>nuxt.vfs</code>), the apps registry, and path resolvers. It also installs <code>AsyncLocalStorage</code> if <code>experimental.asyncContext</code> is on.<br><br>Calling <code>nuxt.ready()</code> triggers <code>initNuxt(nuxt)</code>. This is the real initialization function. From here, every subsequent step happens inside <code>initNuxt</code>.`,
				source: 'packages/nuxt/src/core/nuxt.ts → createNuxt()'
			},
			{
				num: '1.3',
				title: 'Built-in internal modules registered',
				hooks: [],
				body: `Before any user modules, Nuxt installs its own internal modules in a fixed order:<br><br>1. <code>metaModule</code> — registers <code>unhead</code> for <code>&lt;Head&gt;</code> management<br>2. <code>componentsModule</code> — sets up component auto-import scanning<br>3. <code>importsModule</code> — sets up composable/util auto-import via <code>unimport</code><br>4. <code>pagesModule</code> — sets up file-based routing<br>5. <code>compilerModule</code> — registers Vue compiler transforms<br>6. <code>schemaModule</code> — processes <code>@nuxt/schema</code> augmentations<br><br>Each of these is itself a Nuxt module calling <code>addPlugin</code>, <code>addTemplate</code>, etc. internally.`,
				source: 'packages/nuxt/src/core/nuxt.ts → initNuxt()'
			},
			{
				num: '1.4',
				title: 'User modules run — setup() called sequentially',
				hooks: [
					{ label: 'modules:before', type: 'build' },
					{ label: 'modules:done', type: 'build' }
				],
				body: `Nuxt calls <code>installModules()</code>, which iterates through <code>nuxt.options.modules</code> in order (config modules first, then <code>modules/</code> directory in alphabetical order).<br><br>For each module, <code>defineNuxtModule</code>'s wrapper: merges defaults, checks compatibility, guards against double-install, then calls <code>setup(options, nuxt)</code>. Modules are awaited sequentially — order matters.<br><br>Inside <code>setup()</code>, modules register hooks, call <code>addPlugin()</code>, <code>addComponent()</code>, <code>addTemplate()</code>, <code>extendNitroConfig()</code>, etc. — all of which mutate the <code>nuxt</code> object and its template registry.<br><br>After all modules finish, <code>modules:done</code> fires. This is where modules that need all peers to be registered should call their own custom hooks.`,
				source:
					'packages/nuxt/src/core/modules.ts · @nuxt/kit/src/module/install.ts'
			},
			{
				num: '1.5',
				title: 'Filesystem scan — pages, components, composables',
				hooks: [
					{ label: 'pages:extend', type: 'build' },
					{ label: 'components:extend', type: 'build' },
					{ label: 'imports:extend', type: 'build' }
				],
				body: `After modules register what they want, Nuxt scans the actual filesystem:<br><br><strong>Pages:</strong> <code>app/pages/</code> is walked. Each <code>.vue</code> file maps to a route. The filename pattern determines segment type: <code>[id].vue</code> → dynamic, <code>[...slug].vue</code> → catch-all. <code>definePageMeta()</code> is statically extracted at this point (AST transform, not runtime execution). The route list is passed to <code>pages:extend</code> so modules can mutate it.<br><br><strong>Components:</strong> <code>app/components/</code> is walked. Each component file is registered with its PascalCase/kebab-case names. Lazy variants (<code>LazyFoo</code>) are registered automatically.<br><br><strong>Imports:</strong> <code>app/composables/</code> and <code>app/utils/</code> are scanned for named exports. Third-party presets from modules are merged in.`,
				source:
					'packages/nuxt/src/pages/ · packages/nuxt/src/components/ · packages/nuxt/src/imports/'
			},
			{
				num: '1.6',
				title: 'Virtual file generation — the .nuxt/ directory',
				hooks: [
					{ label: 'app:templates', type: 'build' },
					{ label: 'prepare:types', type: 'build' }
				],
				body: `Nuxt writes virtual files from its internal template registry. These are the generated files in <code>.nuxt/</code> that wire everything together:<br><br>• <code>#build/routes.mjs</code> — the vue-router route array, generated from the scanned pages<br>• <code>#build/plugins/server.mjs</code> / <code>client.mjs</code> — ordered plugin registration lists<br>• <code>#build/components.mjs</code> — the component auto-import map<br>• <code>#build/imports.mjs</code> — the composable/util import map<br>• <code>nuxt.d.ts</code> / <code>tsconfig.json</code> — TypeScript config pointing at all generated types<br><br>Modules that called <code>addTypeTemplate()</code> also get their <code>.d.ts</code> files written here.`,
				source: 'packages/nuxt/src/core/templates.ts'
			},
			{
				num: '1.7',
				title: 'Nitro is configured and initialized',
				hooks: [
					{ label: 'nitro:config', type: 'build' },
					{ label: 'nitro:init', type: 'build' },
					{ label: 'nitro:build:before', type: 'build' }
				],
				body: `Nuxt constructs a Nitro config object, merging <code>nuxt.options.nitro</code>, route rules, server plugins, server middleware, and any <code>publicAssets</code> registered by modules via <code>nuxt.hook("nitro:config", ...)</code>.<br><br>Then <code>createNitro()</code> is called. Nitro scans <code>server/api/</code>, <code>server/routes/</code>, <code>server/middleware/</code>, and <code>server/plugins/</code> to build its own route tree. This scan is independent of the Vue app — Nitro has no concept of Vue pages.<br><br>Nitro also resolves its own virtual imports (<code>#imports</code>, auto-imported server utils from <code>server/utils/</code>).`,
				source: 'packages/nuxt/src/core/server.ts · nitro/src/core/build.ts'
			},
			{
				num: '1.8',
				title: 'Vite (or webpack) build — two bundles',
				hooks: [
					{ label: 'build:before', type: 'build' },
					{ label: 'vite:extendConfig', type: 'build' },
					{ label: 'build:done', type: 'build' }
				],
				body: `Two separate Vite builds run — one for the client, one for the SSR server renderer:<br><br><strong>Client bundle</strong>: entry is <code>#build/entry.client.mjs</code> (generated). Outputs to <code>.output/public/_nuxt/</code>. Includes Vue app, router, plugins, components, composables — all tree-shaken.<br><br><strong>Server renderer bundle</strong>: entry is <code>#build/entry.server.mjs</code>. Outputs the Vue SSR renderer used by Nitro to render pages on the server. This is not the Nitro bundle — it's specifically the Vue SSR rendering function.<br><br>Nuxt registers several internal Vite plugins during this step: <code>VirtualFSPlugin</code> (serves <code>#build/*</code> virtual files), <code>UnctxTransformPlugin</code> (injects async context), <code>TreeShakeComposablesPlugin</code>, <code>ImpoundPlugin</code> (import protection between server/client code).`,
				source: 'packages/vite/src/ · packages/nuxt/src/core/builder.ts'
			},
			{
				num: '1.9',
				title: 'Nitro build — standalone output',
				hooks: [
					{ label: 'nitro:build:public-assets', type: 'build' },
					{ label: 'close', type: 'build' }
				],
				body: `Nitro bundles the server using Rollup. It inlines the Vue SSR renderer bundle, all server API handlers, middleware, and plugins into a single deployable unit.<br><br>The output lands in <code>.output/</code>:<br>• <code>.output/server/</code> — the Nitro server entry (Node, edge, or serverless adapter)<br>• <code>.output/public/</code> — static assets (client bundle + public dir)<br><br>Critically, this output has no dependency on <code>node_modules</code> or <code>nuxt.config</code>. It is fully self-contained. The <code>close</code> hook fires, and module cleanup callbacks registered via <code>nuxt.hook("close", ...)</code> run.`,
				source: 'nitro/src/rollup/ · nitro/src/presets/'
			}
		],
		server: [
			{
				num: '2.1',
				title: 'Nitro server process starts',
				hooks: [],
				body: `The <code>.output/server/index.mjs</code> entry runs. Nitro boots its h3 router and registers all routes and middleware it discovered during the build.<br><br>Nitro server plugins from <code>server/plugins/</code> execute once at startup (or once per cold start in serverless). These can:<br>• Register request/response lifecycle hooks on <code>nitroApp.hooks</code><br>• Set up error handlers<br>• Initialize connections (DB, cache)<br><br>In serverless environments, this entire startup sequence replays on each cold invocation.`,
				source: 'nitro/src/runtime/app.ts'
			},
			{
				num: '2.2',
				title: 'Incoming request → h3 router',
				hooks: [
					{ label: 'request', type: 'nitro' },
					{ label: 'beforeResponse', type: 'nitro' }
				],
				body: `A request arrives. Nitro's h3 router matches it against the route tree built during the Nitro build.<br><br>If the path matches a <code>server/api/</code> or <code>server/routes/</code> handler, that handler runs directly and the response is returned. No Vue rendering happens.<br><br>If no explicit handler matches, the request falls through to the catch-all Nuxt SSR renderer handler, which triggers the Vue rendering pipeline.<br><br>Server middleware from <code>server/middleware/</code> runs for every request before the handler, regardless of which route matches.`,
				source: 'nitro/src/runtime/router.ts'
			},
			{
				num: '2.3',
				title: 'nuxtApp created — per-request context',
				hooks: [{ label: 'app:created', type: 'runtime' }],
				body: `For page rendering requests, Nitro calls the Vue SSR renderer. This creates a fresh <code>nuxtApp</code> scoped to this request. Every request gets its own isolated <code>nuxtApp</code> — this is what prevents state leaking between users.<br><br>The <code>nuxtApp</code> is populated with: the Vue <code>app</code> instance, a new <code>hooks</code> instance (runtime hookable), <code>ssrContext</code> (contains the raw request/response objects, runtimeConfig, url), and an empty <code>payload</code> object.<br><br>The <code>app:created</code> hook fires here. This is the first runtime hook available.`,
				source: 'packages/nuxt/src/app/nuxt.ts'
			},
			{
				num: '2.4',
				title: 'App plugins execute — server + universal',
				hooks: [{ label: 'app:created', type: 'runtime' }],
				body: `Nuxt runs all registered plugins in order. The order is determined at build time from the sorted plugin registration list in <code>#build/plugins/server.mjs</code>.<br><br>Plugins with no suffix run on both server and client. Plugins with <code>.server</code> suffix run only here. Plugins with <code>.client</code> suffix are skipped.<br><br>Each plugin is called with <code>nuxtApp</code> as context. Plugins can:<br>• Register Vue plugins via <code>nuxtApp.vueApp.use()</code><br>• Provide globals via <code>nuxtApp.provide('key', value)</code><br>• Add runtime hooks<br>• Set up composables that need early initialization<br><br>Plugins are awaited sequentially (unless marked <code>parallel: true</code>).`,
				source: 'packages/nuxt/src/app/plugins/'
			},
			{
				num: '2.5',
				title: 'Route validation and middleware',
				hooks: [{ label: 'page:start', type: 'runtime' }],
				body: `vue-router resolves the matched route. If the matched page component has a <code>validate()</code> function in its <code>definePageMeta()</code>, it runs now. A falsy return or thrown error aborts rendering with a 404/error response.<br><br>Then middleware executes in order:<br>1. Global middleware (all files in <code>app/middleware/</code> without a name key)<br>2. Named middleware specified in <code>definePageMeta({ middleware: [...] })</code><br><br>Middleware can call <code>navigateTo()</code> or <code>abortNavigation()</code>. On server, <code>navigateTo()</code> results in a <code>Location:</code> header and 3xx response — the full page cycle does not complete.`,
				source: 'packages/nuxt/src/app/composables/router.ts'
			},
			{
				num: '2.6',
				title: 'Vue SSR render — components + data fetching',
				hooks: [{ label: 'app:rendered', type: 'runtime' }],
				body: `Vue's <code>renderToString()</code> runs the component tree from the root (<code>app.vue</code>) downward. Key behaviors during this phase:<br><br>• <code>onBeforeMount</code>, <code>onMounted</code>, and all DOM-related hooks are NOT called<br>• Vue pauses reactivity tracking for performance<br>• <code>useAsyncData</code> and <code>useFetch</code> execute their fetcher functions. Results are stored in <code>nuxtApp.payload.data[key]</code><br>• <code>useState</code> values are stored in <code>nuxtApp.payload.state</code><br>• <code>useHead()</code> calls accumulate into the <code>unhead</code> tag list<br><br>The render is synchronous top-down — once a component renders its output, it cannot be modified. This is why side effects in <code>&lt;script setup&gt;</code> root scope are dangerous.`,
				source: 'packages/nuxt/src/app/composables/asyncData.ts'
			},
			{
				num: '2.7',
				title: 'HTML assembly and payload injection',
				hooks: [
					{ label: 'render:html', type: 'nitro' },
					{ label: 'render:response', type: 'nitro' }
				],
				body: `Vue's rendered HTML string is passed to Nitro. <code>unhead</code> generates the <code>&lt;head&gt;</code> tags (title, meta, links, scripts) and merges them into the HTML template.<br><br>The <code>nuxtApp.payload</code> object (data, state, serverRendered flag) is JSON-serialized and injected as a <code>&lt;script&gt;</code> tag in the HTML. This is the mechanism that enables hydration without double-fetching.<br><br>Nitro fires <code>render:html</code> — Nitro plugins hooking this can modify the HTML string directly (e.g., inject analytics, rewrite head tags).<br><br>The complete HTML response is sent to the browser.`,
				source:
					'packages/nuxt/src/core/runtime/nitro/ · nitro/src/runtime/renderer.ts'
			}
		],
		client: [
			{
				num: '3.1',
				title: 'Browser receives HTML — initial paint',
				hooks: [],
				body: `The browser receives the full HTML from the server. The page can be displayed immediately — this is the SSR benefit. At this point there is no interactivity; it's a static snapshot.<br><br>The browser starts parsing the HTML and encounters the Nuxt client bundle script tag(s) in <code>&lt;head&gt;</code> or before <code>&lt;/body&gt;</code>. These are loaded as ES modules.<br><br>The <code>&lt;script id="__NUXT_DATA__"&gt;</code> tag containing the serialized payload is also parsed and stored in <code>window.__NUXT__</code> for the runtime to read.`,
				source: 'packages/nuxt/src/app/entry.ts (client entry)'
			},
			{
				num: '3.2',
				title: 'Client entry executes — nuxtApp created (client)',
				hooks: [{ label: 'app:created', type: 'runtime' }],
				body: `The client entry (<code>#build/entry.client.mjs</code>) runs. It calls <code>createNuxtApp()</code> again — this time on the client — creating a new <code>nuxtApp</code> for the browser session. This is a single long-lived instance (not per-request).<br><br>The payload from <code>window.__NUXT__</code> is read and merged into <code>nuxtApp.payload</code>. This pre-populates all <code>useAsyncData</code> keys and <code>useState</code> values with the server-fetched data before any composable runs.<br><br><code>app:created</code> fires on the client side.`,
				source: 'packages/nuxt/src/app/entry.ts'
			},
			{
				num: '3.3',
				title: 'Client plugins execute',
				hooks: [],
				body: `Same plugin sequence runs as on the server, but filtered to the client-appropriate set (<code>#build/plugins/client.mjs</code>). Plugins without a suffix run again. Plugins with <code>.server</code> suffix are skipped. Plugins with <code>.client</code> suffix run only now.<br><br>This is where you'd initialize browser-only things: analytics SDKs, local storage adapters, service workers, etc.`,
				source: 'packages/nuxt/src/app/plugins/'
			},
			{
				num: '3.4',
				title: 'Route validation and middleware (client)',
				hooks: [{ label: 'page:start', type: 'runtime' }],
				body: `Same middleware and validation pipeline as the server, but now running in the browser. For the initial load, global middleware runs once.<br><br>Note that if server-side middleware already executed a redirect, the browser never reaches this step for the original URL — it's already on the redirected page.`,
				source: 'packages/nuxt/src/app/composables/router.ts'
			},
			{
				num: '3.5',
				title: 'Vue hydration — app mounts to DOM',
				hooks: [
					{ label: 'app:beforeMount', type: 'runtime' },
					{ label: 'app:mounted', type: 'runtime' },
					{ label: 'app:suspense:resolve', type: 'runtime' }
				],
				body: `<code>app:beforeMount</code> fires, then <code>app.mount('#__nuxt')</code> is called.<br><br>Vue runs its hydration algorithm: it walks the server-rendered DOM and the client VDOM in parallel, attaching event listeners and reactivity to each node without recreating the DOM. Because payload data was pre-populated in step 3.2, <code>useAsyncData</code> returns the cached values synchronously — no network requests are made during hydration.<br><br>If Vue detects a mismatch between the server DOM and client VDOM (hydration mismatch), it logs a warning and falls back to full client-side rendering for the mismatched subtree.<br><br>After mounting, <code>app:mounted</code> fires. <code>onMounted</code> hooks in components now execute. The full Vue lifecycle is active.`,
				source: 'packages/nuxt/src/app/entry.ts · Vue SSR hydration'
			}
		],
		nav: [
			{
				num: '4.1',
				title: 'User clicks a NuxtLink',
				hooks: [
					{ label: 'page:start', type: 'runtime' },
					{ label: 'link:prefetch', type: 'runtime' }
				],
				body: `<code>&lt;NuxtLink&gt;</code> renders as an <code>&lt;a&gt;</code> tag. On click, it intercepts the native navigation and calls vue-router's <code>router.push()</code> — no full page reload.<br><br>The router starts resolving the new route. If the destination route's page component hasn't been loaded yet (it's a lazy chunk from the Vite build), it is dynamically imported now. Nuxt calls <code>preloadRouteComponents()</code> on hover/intersection by default, so in many cases the chunk is already in the browser's cache.<br><br><code>page:start</code> fires at the beginning of the navigation.`,
				source: 'packages/nuxt/src/app/components/nuxt-link.ts'
			},
			{
				num: '4.2',
				title: 'Client-only middleware re-runs',
				hooks: [],
				body: `All global route middleware executes again for the new route. Named middleware defined in the destination page's <code>definePageMeta()</code> also runs.<br><br>Middleware runs exclusively on the client for subsequent navigations (no server involved). If middleware calls <code>navigateTo()</code>, the navigation is aborted and replaced with the redirect destination.`,
				source: 'packages/nuxt/src/app/composables/router.ts'
			},
			{
				num: '4.3',
				title: 'useAsyncData / useFetch re-execute',
				hooks: [],
				body: `As the new page component renders, its <code>useAsyncData</code> and <code>useFetch</code> calls check their key against <code>nuxtApp.payload.data</code>. Since this is a client-side navigation (not the initial load), the cache is either empty or stale for new keys.<br><br>Fetchers execute in the browser. <code>$fetch</code> makes actual HTTP requests to the Nitro server (or third-party APIs). Requests hit Nitro's h3 router — they go through the same server API pipeline as any external request.<br><br>Components show their <code>pending</code> state while fetching (if using <code>useFetch</code>'s status ref).`,
				source: 'packages/nuxt/src/app/composables/asyncData.ts'
			},
			{
				num: '4.4',
				title: 'New page renders and page:finish fires',
				hooks: [
					{ label: 'page:finish', type: 'runtime' },
					{ label: 'page:transition:finish', type: 'runtime' }
				],
				body: `Vue renders the new page component and updates the DOM via its virtual DOM diff algorithm. No full page HTML is generated — only the changed component subtree is patched.<br><br>The page transition (if any) plays. <code>page:finish</code> fires after the new page is rendered and settled. <code>page:transition:finish</code> fires after the transition animation completes.<br><br>The browser URL updates via the History API (<code>history.pushState()</code>). The <code>&lt;head&gt;</code> is updated by <code>unhead</code> with the new page's meta tags.`,
				source: 'packages/nuxt/src/app/components/nuxt-page.ts'
			}
		]
	};

	const initialPhase = 'build';
	const curPhaseKey = ref<keyof typeof content>(initialPhase);
	const curIdx = ref(0);

	const curPhase = computed(() => content[curPhaseKey.value]);
	const curStage = computed(() => content[curPhaseKey.value][curIdx.value]);

	function setPhase(p: string) {
		curPhaseKey.value = p;
		curIdx.value = 0;
	}

	function move(d: number) {
		const arr = content[curPhaseKey.value];
		curIdx.value = Math.max(0, Math.min(arr.length - 1, curIdx.value + d));
	}
</script>

<template>
	<div>
		<p>A step-by-step walkthrough of the Nuxt lifecycle.</p>

		<!-- Hook Legends -->
		<div class="flex gap-2 flex-wrap mb-6 text-xs">
			<span class="hook-type hook-build">Build Hook</span>
			<span class="hook-type hook-runtime">Runtime Hook</span>
			<span class="hook-type hook-nitro">Nitro Hook</span>
		</div>

		<!-- Lifecycle Phases -->
		<div class="relative flex items-center gap-2 mb-1 flex-wrap isolate">
			<!-- <div class="absolute inset-0 top-1/2 bg-indigo-500 z-0"></div> -->
			<button
				v-for="phase in phases"
				:key="phase.key"
				:class="[
					'py-1 px-4 border border-indigo-500 text-sm cursor-pointer transition-all whitespace-nowrap z-20 bg-indigo-100 dark:bg-indigo-800/35 rounded-2xl',
					{
						'bg-indigo-500! text-zinc-50 rounded-md': phase.key === curPhaseKey
					}
				]"
				@click="setPhase(phase.key)">
				{{ phase.label }}
			</button>
		</div>

		<div
			:class="[
				'border-2 border-b-4 border-indigo-500 rounded-lg py-4 px-5 mb-2 min-h-48',
				{
					' rounded-tl-md': curPhaseKey === initialPhase
				}
			]">
			<!-- Active Stage Content -->
			<div class="flex items-baseline gap-3 mb-2.5">
				<span class="min-w-5 text-zinc-500">{{ curStage.num }}</span>
				<span class="font-medium">{{ curStage.title }}</span>
			</div>

			<div v-if="curStage.hooks" class="mb-2.5 flex items-center gap-2">
				<span
					v-for="hook in curStage.hooks"
					:key="hook.label"
					:class="['hook-type', `hook-${hook.type}`]"
					>{{ hook.label }}</span
				>
			</div>

			<div v-html="curStage.body"></div>
			<!-- <div>{{ curStage.body }}</div> -->

			<!-- Source for Content -->
			<div class="text-zinc-500 dark:text-zinc-600 text-sm font-mono mt-8">
				<strong>Sources</strong>: {{ curStage.source }}
			</div>
		</div>

		<!-- Stage Counter -->
		<div class="text-center text-sm mt-1">
			{{ curIdx + 1 }} / {{ curPhase.length }}
		</div>

		<!-- Stage Navigation -->
		<div class="flex items-center justify-between gap-2 mt-3">
			<button
				class="cursor-pointer disabled:cursor-not-allowed disabled:text-zinc-400 dark:disabled:text-zinc-600"
				@click="move(-1)"
				:aria-disabled="curIdx === 0"
				:disabled="curIdx === 0">
				&larr; Prev
			</button>

			<div class="flex gap-1">
				<div
					v-for="(_, i) in curPhase"
					:key="i"
					:class="[
						'size-2 rounded-full bg-zinc-300 dark:bg-zinc-700 cursor-pointer transition-colors',
						{ 'bg-zinc-500 dark:bg-zinc-300': i === curIdx }
					]"
					@click="curIdx = i"></div>
			</div>

			<button
				class="cursor-pointer disabled:cursor-not-allowed disabled:text-zinc-400 dark:disabled:text-zinc-600"
				@click="move(1)"
				:aria-disabled="curIdx === curPhase.length - 1"
				:disabled="curIdx === curPhase.length - 1">
				Next &rarr;
			</button>
		</div>
	</div>
</template>

<style scoped>
	@reference "../../assets/css/main.css";

	.hook-type {
		@apply inline-block font-mono text-xs py-0.5 px-2 rounded-full m-0.5 ml-0 border text-black;
	}

	.hook-build {
		@apply border-emerald-600 text-emerald-600 bg-emerald-100 dark:bg-emerald-800/25 dark:border-emerald-400 dark:text-emerald-400;
	}
	.hook-runtime {
		@apply border-indigo-600 text-indigo-600 bg-indigo-100 dark:bg-indigo-800/25 dark:border-indigo-400 dark:text-indigo-400;
	}
	.hook-nitro {
		@apply border-fuchsia-600 text-fuchsia-600 bg-fuchsia-100 dark:bg-fuchsia-800/25 dark:border-fuchsia-400 dark:text-fuchsia-400;
	}

	.active-pill {
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
		border-color: var(--color-border-secondary);
	}
</style>
