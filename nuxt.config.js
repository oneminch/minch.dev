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
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        },
        {
          rel: "icon",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        },
        {
          rel: "icon",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        },
        {
          rel: "manifest",
          href: "/site.webmanifest"
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
    pageTransition: { name: "slide", mode: "out-in" },
    layoutTransition: { name: "slide", mode: "out-in" }
  },
  components: [
    { path: "~/components/cards", pathPrefix: false },
    { path: "~/components/skeletons", pathPrefix: false },
    { path: "~/components", pathPrefix: false }
  ],
  content: {
    documentDriven: false,
    highlight: {
      theme: "github-dark",
      preload: ["py"]
    },
    ignores: [
      "root.md",
      "drafts",
      "template.md",
      "/drafts/",
      "/.vscode/",
      "\\.code-workspace$",
      "\\.gitignore$",
      "\\.port$",
      "\\.cache.json$",
      "\\.ws$",
      "\\.yml$"
    ],
    markdown: {
      toc: { depth: 1, searchDepth: 2 }
    },
    sources: {
      content: {
        driver: "fs",
        base: "content/notes"
      }
    }
  },
  devtools: { enabled: false },
  modules: [
    "@nuxt/content",
    "@nuxtjs/partytown",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon"
  ],
  routeRules: {
    "/": { prerender: true },
    "/**": { prerender: true },
    "/picks": { swr: 3600 }
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    raindropTestToken: process.env.RAINDROP_TEST_TOKEN,
    raindropCollectionId: process.env.RAINDROP_COLLECTION_ID
  },
  telemetry: false
});
