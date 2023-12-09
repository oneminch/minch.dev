<script setup>
  useHead({
    titleTemplate: "%s · Dawit"
  });

  const route = useRoute();

  const serverMeta = {
    ogImage: "/og-image.png",
    twitterImage: "/og-image.png",
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary",
    twitterCreator: "@oneminch"
  };

  useSeoMeta({
    title: () => route.meta.title,
    description: () => route.meta.description
  });

  useServerSeoMeta({
    ogTitle: () => route.meta.title,
    twitterTitle: () => route.meta.title,
    ogDescription: () => route.meta.description,
    twitterDescription: () => route.meta.description,
    ogUrl: () => `https://oneminch.dev${route.path}`,
    ...serverMeta
  });
</script>

<!-- Default Layout -->
<template>
  <main id="main-content">
    <slot />
  </main>
</template>
