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
  components: [
    { path: "~/components/cards", pathPrefix: false },
    { path: "~/components/skeletons", pathPrefix: false },
    { path: "~/components", pathPrefix: false }
  ],
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
    "nuxt-simple-robots",
    "nuxt-simple-sitemap"
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"]
    },
    sitemap: {
      strictNuxtContentPaths: true
    }
  },
  routeRules: {
    // Static Pages
    "/": { prerender: true },
    "/contact": { prerender: true },
    "/meta": { prerender: true },
    "/resume": { prerender: true },
    // Dynamic Pages
    "/blog": { isr: 86400 },
    "/blog/**": { isr: 86400 },
    "/leetcode": { isr: 86400 },
    "/leetcode/**": { isr: 86400 },
    "/projects": { isr: 86400 },
    "/picks": { isr: 86400 }
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    raindropTestToken: process.env.RAINDROP_TEST_TOKEN,
    raindropCollectionId: process.env.RAINDROP_COLLECTION_ID
  },
  site: {
    url: "https://oneminch.dev"
  },
  sitemap: {
    // provide dynamic URLs to be included
    // urls: async () => {
    //   const blogPages = await getBlogPages();
    //   return blogPages.map((page) => ({
    //     loc: `/blog/${page.slug}`
    //   }));
    // }
  }
});
