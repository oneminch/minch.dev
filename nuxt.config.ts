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
      titleTemplate: "",
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
          href: "https://fonts.bunny.net/css?family=roboto-mono:400,400i,500,600,700"
        }
      ]
    },
    pageTransition: { name: "slide", mode: "out-in" }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxtjs/partytown"
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    raindropTestToken: process.env.RAINDROP_TEST_TOKEN,
    raindropCollectionId: process.env.RAINDROP_COLLECTION_ID
  },
  content: {
    sources: {
      github: {
        prefix: "/articles",
        driver: "github",
        repo: "oneminch/garden",
        branch: "main",
        dir: "Posts/Published",
        token: process.env.GITHUB_TOKEN
      }
    }
  },
  routeRules: {
    // "/*": { static: true }
    // "/articles": { ssr: false }
  }
});
