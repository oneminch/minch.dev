<script setup>
  import AppPickCard from "../components/cards/AppPickCard.vue";

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

  // Skeletons
  const skeletons = [...Array(5).fill(Math.random())];

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

    <h1 class="font-bold text-2xl mb-6">Picks</h1>
    <p class="text-zinc-600 dark:text-zinc-400 mb-8">
      Content from across the web I found interesting.
    </p>

    <template v-if="pending">
      <AppPickSkeleton v-for="skeleton in skeletons" :key="skeleton" />
    </template>
    <template v-else>
      <AppPickCard v-for="pick in picks" :key="pick.link" :pick="pick" />
    </template>
  </main>
</template>
