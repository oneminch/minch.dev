<!-- Blog: Coding Problems -->
<template>
  <section>
    <AppCodeSolutionCard v-for="i in 4" :key="i"></AppCodeSolutionCard>
  </section>
</template>

<script setup>
  definePageMeta({
    layout: "blog-layout"
  });

  const blogPosts = await queryContent("blog", "cps").find();

  console.log(blogPosts);
</script>
