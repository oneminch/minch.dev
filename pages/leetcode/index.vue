<script setup>
  const seoMeta = {
    title: "Dawit's LeetCode Solutions",
    description:
      "My (imperfect) solutions to some LeetCode problems.",
    image: "/og-image.png",
    page: "leetcode"
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

  // Fetch all LeetCode solutions
  const { pending, data: codeSolutions } = await useAsyncData("leetcode", () =>
    queryContent("/leetcode").find()
  );
</script>

<!-- Blog: LeetCode Coding Problems -->
<template>
  <main id="main-content">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="mb-4 text-3xl font-bold text-left">LeetCode Solutions</h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      My solutions to some LeetCode-style coding problems.
    </p>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2">
      <template v-if="pending">
        <app-code-solution-skeleton
          v-for="skeleton in generateKeys(5)"
          :key="skeleton"
        />
      </template>
      <template v-else>
        <app-code-solution-card
          v-for="solution in codeSolutions"
          :key="solution._path"
          :problem-title="solution.title"
          :url="solution._path"
          :tags="solution.tags"
          :problem-url="solution.problemUrl"
        />
      </template>
    </section>
  </main>
</template>
