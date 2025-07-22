import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/partytown',
    '@nuxtjs/turnstile',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/icon'
  ],
  app: {
    rootId: 'app',
    rootTag: 'body',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'author', content: 'Dawit (@oneminch)' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        }
      ]
    },
    pageTransition: { name: 'slide', mode: 'out-in' },
    layoutTransition: { name: 'slide', mode: 'out-in' }
  },

  compatibilityDate: '2025-05-16',

  components: [{ path: '~/components', pathPrefix: false }],

  content: {
    build: {
      markdown: {
        toc: { depth: 1, searchDepth: 2 },
        highlight: {
          theme: 'github-dark',
          langs: ['js', 'md', 'py']
        }
      }
    }
  },

  css: ['~/assets/css/main.css'],

  devtools: {
    enabled: true
  },

  icon: {
    mode: 'svg',
    clientBundle: {
      scan: true
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/**': { prerender: true }
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    resendFrom: process.env.RESEND_FROM,
    resendTo: process.env.RESEND_TO,
    turnstile: { secretKey: process.env.TURNSTILE_SECRET_KEY }
  },

  telemetry: false,

  turnstile: {
    siteKey: process.env.TURNSTILE_SITE_KEY
  },

  vite: { plugins: [tailwindcss()] }
});
