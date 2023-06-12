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
          href: "https://fonts.bunny.net/css?family=roboto-mono:400,400i,500,600,700"
        }
      ]
    },
    pageTransition: { name: "slide", mode: "out-in" }
  },
  content: {
    //sources: {
    //  posts: {
    //    prefix: "/blog",
    //    driver: "github",
    //    repo: "oneminch/garden",
    //    branch: "main",
    //    dir: "Blog",
    //   token: process.env.GITHUB_TOKEN
    //  }
    //},
    highlight: {
      theme: "github-dark"
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxtjs/partytown"
  ],
  nitro: {
    preset: "cloudflare-pages"
  },
  routeRules: {
    // "/blog/**": { static: true }
    // "/*": { static: true }
    // "/blog": { ssr: false }
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    raindropTestToken: process.env.RAINDROP_TEST_TOKEN,
    raindropCollectionId: process.env.RAINDROP_COLLECTION_ID
  }
});
