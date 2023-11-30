<script setup>
  const nuxtApp = useNuxtApp();

  const seoMeta = {
    title: "Dawit's Picks",
    description:
      "This page contains content from across the web that I found interesting.",
    image: "/og-image.png",
    page: "picks"
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
    ogUrl: `https://oneminch.dev/${seoMeta.page}`,
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });

  const { pending, data: picks } = await useLazyFetch("/api/picks", {
    getCachedData(key) {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    }
  });
</script>

<template>
  <main class="picks" id="main-content">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="mb-4 text-2xl font-bold">Picks</h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      Content from across the web I found interesting.
    </p>

    <template v-if="pending">
      <app-pick-skeleton v-for="skeleton in generateKeys(5)" :key="skeleton" />
    </template>
    <template v-else>
      <app-pick-card v-for="pick in picks" :key="pick.link" :pick="pick" />
    </template>
  </main>
</template>
