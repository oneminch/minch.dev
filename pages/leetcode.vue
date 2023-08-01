<!-- Blog: LeetCode Coding Problems -->
<template>
  <main id="leetcode">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="text-3xl text-left font-bold mb-6">LeetCode Solutions</h1>

    <section>
      <template v-if="pending">
        <AppCodeSolutionSkeleton v-for="i in 5" :key="i" />
      </template>
      <template v-else>
        <AppCodeSolutionCard
          v-for="(solution, index) in codeSolutions"
          :key="index"
          :problemTitle="solution.title"
          :url="solution._path"
          :tags="solution.tags"
          :problemUrl="solution.problemUrl"
        />
      </template>
    </section>
  </main>
</template>

<script setup>
  import AppCodeSolutionSkeleton from "../components/skeletons/AppCodeSolutionSkeleton.vue";

  definePageMeta({
    layout: "blog-list-layout"
  });

  const seoMeta = {
    title: "Dawit's LeetCode Solutions",
    description:
      "This page contains my (imperfect) solutions to some LeetCode problems.",
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

  // Fetch all LeetCode solutions
  const { pending, data: codeSolutions } = await useAsyncData("leetcode", () =>
    queryContent("/leetcode").find()
  );
</script>
