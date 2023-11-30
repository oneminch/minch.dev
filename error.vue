<script setup>
  const seoMeta = {
    title: "Page Not Found",
    description: "Non-existent Page",
    image: "/og-image.png"
  };

  useServerSeoMeta({
    title: seoMeta.title,
    ogTitle: seoMeta.title,
    twitterTitle: seoMeta.title,
    description: seoMeta.description,
    ogDescription: seoMeta.description,
    twitterDescription: seoMeta.description,
    ogImage: seoMeta.image,
    twitterImage: seoMeta.image,
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });
</script>

<template>
  <!-- Sidebar -->
  <app-side-bar />

  <!-- Main Content -->
  <main
    id="main-content"
    class="flex flex-col items-center justify-center main-error"
  >
    <app-not-found />
  </main>

  <!-- Mobile Navigation -->
  <app-nav class="flex border border-green-400 md:hidden after:shadow-2xl" />
</template>

<style scoped>
  #main-content.main-error {
    @apply h-full;
  }
</style>
