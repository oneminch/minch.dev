// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: "app",
    head: {
      title: "Dawit",
      meta: [{ name: "description", content: "My amazing site." }],
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
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt"],
  runtimeConfig: {
    apiKey: process.env.GITHUB_PAT
  }
  // routeRules: {
  //   "/*": { static: true },
  //   "/articles": { ssr: false }
  // }
});
