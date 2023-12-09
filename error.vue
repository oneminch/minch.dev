<script setup>
  const pageMeta = {
    title: "Page Not Found · Dawit",
    description: "This page doesn't exist."
  };

  useSeoMeta({
    title: () => pageMeta.title,
    ogTitle: () => pageMeta.title,
    twitterTitle: () => pageMeta.title,
    description: () => pageMeta.description,
    ogDescription: () => pageMeta.description,
    twitterDescription: () => pageMeta.description
  });

  useServerSeoMeta({
    ogImage: "/og-image.png",
    twitterImage: "/og-image.png",
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary",
    twitterCreator: "@oneminch",
    author: "Dawit (@oneminch)",
    robots: "index, follow"
  });
</script>

<template>
  <!-- Sidebar -->
  <app-side-bar />

  <!-- Main Content -->
  <main id="main-content" class="main-error">
    <app-not-found />
  </main>

  <!-- Mobile Navigation -->
  <app-nav class="flex border border-green-400 md:hidden after:shadow-2xl" />
</template>

<style scoped>
  #main-content.main-error {
    @apply h-full flex flex-col items-center justify-center;
  }
</style>
