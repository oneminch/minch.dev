export default defineNuxtConfig({
  app: {
    rootId: "app",
    rootTag: "body",
    head: {
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "author", content: "Dawit (@oneminch)" },
        { name: "robots", content: "index, follow" }
      ],
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
  components: [{ path: "~/components", pathPrefix: false }],
  content: {
    contentHead: false,
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
  modules: [
    "@nuxt/content",
    "@nuxtjs/partytown",
    "@nuxtjs/turnstile",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon"
  ],
  routeRules: {
    "/": { prerender: true },
    "/**": { prerender: true },
    "/picks": { isr: 3600 }
  },
  runtimeConfig: {
    raindropToken: process.env.RAINDROP_TOKEN,
    raindropCollectionId: process.env.RAINDROP_COLLECTION_ID,
    resendApiKey: process.env.RESEND_API_KEY,
    resendFrom: process.env.RESEND_FROM,
    resendTo: process.env.RESEND_TO,
    turnstile: { secretKey: process.env.TURNSTILE_SECRET_KEY }
  },
  tailwindcss: {
    mode: "jit",
    darkMode: "class",
    content: [
      "./app.vue",
      "./components/**/*.vue",
      "./layouts/**/*.vue",
      "./pages/**/*.vue"
    ],
    plugins: [require("@tailwindcss/typography")]
  },
  telemetry: false,
  turnstile: {
    siteKey: "0x4AAAAAAABlDwSHN3HVmFWH"
  }
});
