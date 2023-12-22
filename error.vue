<script setup>
  const pageMeta = {
    title: "Page Not Found · Dawit",
    description: "This page doesn't exist."
  };

  const serverMeta = {
    ogImage: "/og-image.png",
    twitterImage: "/og-image.png",
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary",
    twitterCreator: "@oneminch"
  };

  useSeoMeta({
    title: () => pageMeta.title,
    description: () => pageMeta.description,
    ogTitle: () => pageMeta.title,
    twitterTitle: () => pageMeta.title,
    ogDescription: () => pageMeta.description,
    twitterDescription: () => pageMeta.description,
    ...serverMeta
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
  <app-nav
    class="flex ring-1 ring-inset ring-green-500 md:hidden after:shadow-2xl"
  />
</template>

<style scoped>
  #main-content.main-error {
    @apply h-full flex flex-col items-center justify-center;
  }
</style>
