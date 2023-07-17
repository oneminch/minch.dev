<template>
  <main class="picks">
    <h1 class="font-bold text-2xl mb-6">Picks</h1>
    <blockquote>Content from across the web I found interesting.</blockquote>
    <br />
    <template v-if="pending">
      <AppPickSkeleton v-for="i in 5" :key="i" />
    </template>
    <template v-else>
      <AppPickCard v-for="pick in picks" :key="pick.link" :pick="pick" />
    </template>
  </main>
</template>

<script setup>
  import AppPickCard from "../components/cards/AppPickCard.vue";

  const seoMeta = {
    title: "Dawit's Picks",
    description:
      "This page contains content from across the web that I found interesting.",
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
    ogUrl: `http://oneminch.dev${useRoute().fullPath}`,
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });

  const { pending, data: picks } = await useLazyFetch("/api/picks");
</script>
