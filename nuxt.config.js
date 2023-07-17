// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: "app",
    rootTag: "body",
    head: {
      htmlAttrs: {
        lang: "en"
      },
      meta: [{ "http-equiv": "X-UA-Compatible", content: "IE=edge" }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.bunny.net"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.bunny.net/css?family=roboto-mono:400,400i,500,600,700|inter:300,400,500,600,700,800"
        }
      ],
      script: [
        {
          type: "text/partytown",
          src: "https://measure.oneminch.dev/minch-measure",
          async: true,
          "data-website-id": "1e0e9daa-a25b-4943-af4e-68c91b2d3c72"
        }
      ]
    },
    pageTransition: { name: "slide", mode: "out-in" }
  },
  components: [
    { path: "~/components/cards", pathPrefix: false },
    { path: "~/components/skeletons", pathPrefix: false },
    { path: "~/components", pathPrefix: false }
  ],
  content: {
    documentDriven: false,
    sources: {
      content: {
        prefix: "/blog",
        driver: "github",
        repo: "oneminch/garden",
        branch: "main",
        dir: "/Blog/notes",
        token: process.env.GITHUB_TOKEN
      }
    },
    highlight: {
      theme: "github-dark"
    },
    ignores: [
      "root.md",
      "/assets/",
      "/drafts/",
      "/.vscode/",
      "\\.png$",
      "\\.json$",
      "\\.yml$"
    ],
    markdown: {
      toc: { depth: 1, searchDepth: 2 }
    }
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/partytown",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-simple-robots"
  ],
  routeRules: {
    // Static pages
    "/": { prerender: true },
    "/contact": { prerender: true },
    // "/meta": { prerender: true },
    "/resume": { prerender: true },
    // Dynamic Pages
    "/blog": { swr: 86400 },
    "/blog/**": { swr: 86400, robots: "index, follow" },
    "/projects": { swr: 86400 },
    "/picks": { swr: 86400 },
    "/leetcode": { swr: 86400 },
    "/leetcode/**": { swr: 86400 }
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    raindropTestToken: process.env.RAINDROP_TEST_TOKEN,
    raindropCollectionId: process.env.RAINDROP_COLLECTION_ID
  }
});
