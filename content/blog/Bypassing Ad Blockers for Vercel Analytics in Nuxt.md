---
id: bypass-ad-blockers-for-vercel-analytics-nuxt
title: How to Bypass Ad Blockers for Vercel Analytics in Nuxt
description: This article goes over how to bypass ad-blockers for Vercel Analytics in a Nuxt application.
tags:
  - nuxt
  - vercel-analytics
  - middleware
  - nuxt-scripts
image: /content/cover/bypass-ad-blockers-for-vercel-analytics-nuxt.png
published_on: "2025-06-24"
head:
  meta:
    - name: robots
      content: index, follow
    - name: author
      content: Dawit (@oneminch)
    - property: og:type
      content: article
    - name: twitter:card
      content: summary_large_image
---

## The Problem: Analytics Blocked by Ad Blockers

Vercel Analytics offers a seamless & privacy-friendly way to track page views and performance for apps hosted on the platform. However, many ad blockers and VPN providers recognize and block requests to known analytics endpoints, such as `/_vercel/insights/script.js`, which could result in missing valuable data from users.

## Option 1 (Recommended): Using Nuxt Scripts

The simplest way to work around this today is to let [Nuxt Scripts](https://scripts.nuxt.com/) manage the analytics script for you. Its `vercelAnalytics` registry script proxies and bundles the script through your own origin instead of loading it directly from `/_vercel/insights/script.js`, which is enough to avoid most blocklists without any custom middleware.

Install the module and add it to `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@nuxt/scripts"],
  scripts: {
    registry: {
      vercelAnalytics: { trigger: "onNuxtReady" }
    }
  }
});
```

Then register the script wherever you want it to load, e.g. in `app.vue`:

```vue
<script setup>
useScriptVercelAnalytics();
</script>
```

Since Nuxt Scripts handles loading the script, the `@vercel/analytics` package is no longer needed. This is now the approach I use on this site.

## Option 2: Proxying Analytics with Nuxt Middleware

By proxying your analytics through a unique, project-specific endpoint rather than the default one, these blocklists can be avoided. Nuxt allows you to create custom endpoints directly within your application with its powerful server middleware feature powered by Nitro. You can use this feature to proxy Vercel Analytics requests through a unique path, effectively disguising them from most blockers. This was my initial solution to this problem before I switched to Nuxt Scripts.

### Create a Proxy Middleware

First, set up a server middleware in your Nuxt project that intercepts requests to a custom path (e.g., `/my-analytics/`) and forwards them to the real Vercel Analytics endpoint.

Create a file at `server/middleware/analytics-proxy.ts` (Nuxt will auto-register it as a server middleware):

```ts
// server/middleware/analytics-proxy.ts
import { defineEventHandler, proxyRequest } from "h3";

export default defineEventHandler(async (event) => {
  // Only handle requests starting with your custom analytics path
  if (event.node.req.url?.startsWith("/my-analytics/")) {
    // Replace your custom prefix with the real Vercel Analytics endpoint
    const targetPath = event.node.req.url.replace(
      "/my-analytics",
      "/_vercel/insights"
    );

    return proxyRequest(event, `https://yourdomain.com${targetPath}`);
  }
});
```

This middleware listens for requests to `/my-analytics/` and proxies them to the actual analytics endpoint.

### Inject the Analytics Script

Next, update your app to load the analytics script from your new path. In your main layout or a Nuxt plugin, use the `useHead` composable:

```js
// app.vue
useHead({
  script: [
    {
      src: "/my-analytics/script.js",
      async: true,
      "data-endpoint": "/my-analytics"
    }
  ]
});
```

This ensures your app loads the analytics script from the custom path, which is then transparently proxied to Vercel.

Since the script is loaded using `useHead`, the `@vercel/analytics` package is no longer needed.

### Verify and Adjust

You can visit the network tab from your browser’s developer tools to confirm that requests to `/my-analytics/script.js` and related endpoints are not being blocked by ad blockers. If they are, you can try changing the custom path to something even less conspicuous.

That's it. Thanks for reading.
