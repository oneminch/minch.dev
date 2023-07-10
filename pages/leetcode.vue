<!-- Blog: LeetCode Coding Problems -->
<template>
  <main id="leetcode">
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
    title: "LeetCode Solutions",
    description: "My solutions to some LeetCode problems.",
    layout: "blog-list-layout"
  });

  // Fetch all LeetCode solutions
  const { pending, data: codeSolutions } = await useAsyncData("leetcode", () =>
    queryContent("/")
      .where({ _dir: { $eq: "leetcode" } })
      .find()
  );
</script>
