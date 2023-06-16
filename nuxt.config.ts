// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: "app",
    rootTag: "body",
    head: {
      htmlAttrs: {
        lang: "en"
      },
      title: "Dawit",
      // titleTemplate: "",
      meta: [
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "My amazing site." }
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.bunny.net"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.bunny.net/css?family=roboto-mono:400,400i,500,600,700|inter:300,400,500,600,700,800"
        }
      ]
    },
    pageTransition: { name: "slide", mode: "out-in" }
  },
  content: {
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
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxtjs/partytown"
  ],
  routeRules: {
    // Static Pages
    "/": { prerender: true },
    "/contact": { prerender: true },
    "/meta": { prerender: true },
    "/resume": { prerender: true },
    // Dynamic Pages
    "/blog": { isr: true },
    "/blog/**": { isr: true },
    "/leetcode": { isr: true },
    "/leetcode/**": { isr: true },
    "/projects": { isr: true },
    "/picks": { isr: true }
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    raindropTestToken: process.env.RAINDROP_TEST_TOKEN,
    raindropCollectionId: process.env.RAINDROP_COLLECTION_ID
  }
});
