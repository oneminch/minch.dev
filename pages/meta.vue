<template>
  <main>
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="font-bold text-2xl mb-6">Meta</h1>

    <!-- Tech Stack -->
    <h2 class="font-bold text-xl mb-2">Tech Stack</h2>
    <section class="w-full h-auto flex justify-between mb-4">
      <div class="card-style rounded-lg w-[30%] h-28"></div>
      <div class="card-style rounded-lg w-[30%] h-28"></div>
      <div class="card-style rounded-lg w-[30%] h-28"></div>
    </section>

    <!-- Lighthouse -->
    <h2 class="font-bold text-xl mb-2">Lighthouse</h2>
    <section
      class="card-style w-full h-auto flex justify-evenly px-2 py-4 mb-4 rounded-lg"
    >
      <div class="bg-zinc-900 rounded-full w-14 h-14"></div>
      <div class="bg-zinc-900 rounded-full w-14 h-14"></div>
      <div class="bg-zinc-900 rounded-full w-14 h-14"></div>
      <div class="bg-zinc-900 rounded-full w-14 h-14"></div>
    </section>

    <!-- Carbon  -->
    <h2 class="font-bold text-xl mb-2">Carbon Footprint</h2>
    <section></section>
  </main>
</template>

<script setup>
  const seoMeta = {
    title: "Meta",
    description:
      "This page contains a mix of related links about me, my interests and my work.",
    image: "/og-image.png",
    page: "meta"
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
</script>
