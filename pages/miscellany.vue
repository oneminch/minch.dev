<template>
  <main id="main-content">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="font-bold text-2xl mb-6">Miscellany</h1>
    <p class="text-zinc-600 dark:text-zinc-300 mb-8">
      A mix of related links about me (or this website), my interests and my
      work.
    </p>

    <!-- Other Links -->
    <section class="space-y-2 mb-2">
      <h2 class="font-bold text-xl py-2">Links</h2>

      <div
        class="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:grid-flow-col gap-4 lg:gap-2 lg:[&_:first-child]:row-span-2 lg:[&_:last-child]:row-span-2"
      >
        <app-link-card
          label="Resume"
          icon="fluent-emoji:briefcase"
          url="/resume"
        ></app-link-card>
        <app-link-card
          label="LeetCode"
          icon="fluent-emoji:teacup-without-handle"
          url="/leetcode"
        ></app-link-card>
        <app-link-card
          label="Picks"
          icon="fluent-emoji:leafy-green"
          url="/picks"
        ></app-link-card>
        <app-link-card
          label="Notes"
          icon="fluent-emoji:spiral-notepad"
          is-external="true"
          url="https://github.com/oneminch/garden"
        ></app-link-card>
        <app-link-card
          label="Photography"
          icon="fluent-emoji:camera"
          is-external="true"
          url="https://unsplash.com/@oneminch"
        ></app-link-card>
        <app-link-card
          label="TBD"
          icon="fluent-emoji:red-question-mark"
          is-external="true"
          url="https://github.com/oneminch/garden"
        ></app-link-card>
      </div>
    </section>

    <!-- Meta - About the website  -->
    <section class="space-y-2 mb-2">
      <h2 class="font-bold text-xl py-2">Meta</h2>

      <!-- Stack & Credits -->
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2">
        <app-link-card
          label="Nuxt"
          icon="logos:nuxt-icon"
          is-external="true"
          url="https://nuxt.com"
        ></app-link-card>
        <app-link-card
          label="Tailwind CSS"
          icon="logos:tailwindcss-icon"
          is-external="true"
          url="https://tailwindcss.com"
        ></app-link-card>
        <app-link-card
          label="Vercel"
          icon="logos:vercel-icon"
          is-external="true"
          url="https://vercel.com"
        ></app-link-card>
      </div>
    </section>
  </main>
</template>

<script setup>
  const seoMeta = {
    title: "Miscellany",
    description:
      "This page contains a mix of related links about me, my interests and my work.",
    image: "/og-image.png",
    page: "miscellany"
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
