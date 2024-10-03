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
          src: process.env.UMAMI_BASE_URL,
          async: true,
          "data-website-id": process.env.UMAMI_WEBSITE_ID
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
    markdown: {
      toc: { depth: 1, searchDepth: 2 }
    }
  },
  modules: [
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/partytown",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/turnstile",
    "@vueuse/nuxt"
  ],
  routeRules: {
    "/": { prerender: true },
    "/**": { prerender: true },
    "/bookmarks": { isr: 3600 }
  },
  runtimeConfig: {
    raindropToken: process.env.RAINDROP_TOKEN,
    raindropCollectionId: process.env.RAINDROP_COLLECTION_ID,
    resendApiKey: process.env.RESEND_API_KEY,
    resendFrom: process.env.RESEND_FROM,
    resendTo: process.env.RESEND_TO,
    umamiApiToken: process.env.UMAMI_API_TOKEN,
    umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
    turnstile: { secretKey: process.env.TURNSTILE_SECRET_KEY }
  },
  telemetry: false,
  turnstile: {
    siteKey: process.env.TURNSTILE_SITE_KEY
  }
});
