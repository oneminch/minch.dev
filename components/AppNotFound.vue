<script setup>
  const seoMeta = {
    title: "Page Not Found",
    description: "This is a non-existent page",
    image: "/og-image.png",
    page: ""
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

<!-- Not Found -->
<template>
  <div class="flex flex-col items-center justify-center h-96">
    <Icon
      aria-labelledby="not-found"
      name="fluent-emoji:construction"
      size="10rem"
      class="mb-8"
    />
    <h1
      id="not-found"
      class="font-semibold text-center text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-6"
    >
      This page doesn't exist.
    </h1>
  </div>
</template>
