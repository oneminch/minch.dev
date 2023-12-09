<script setup>
  useHead({
    titleTemplate: "%s · Dawit"
  });

  const route = useRoute();

  useSeoMeta({
    title: () => route.meta.title,
    ogTitle: () => route.meta.title,
    twitterTitle: () => route.meta.title,
    description: () => route.meta.description,
    ogDescription: () => route.meta.description,
    twitterDescription: () => route.meta.description,
    ogImage: "/og-image.png",
    twitterImage: "/og-image.png",
    ogUrl: () => `https://oneminch.dev${route.path}`
  });

  useServerSeoMeta({
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary",
    twitterCreator: "@oneminch",
    author: "Dawit (@oneminch)",
    robots: "index, follow"
  });
</script>

<!-- Default Layout -->
<template>
  <main id="main-content">
    <slot />
  </main>
</template>
