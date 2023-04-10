<!-- Articles -->
<template>
  <main id="articles">
    <h1 class="text-3xl text-left font-bold mt-2 sm:mt-4 mb-6">Articles</h1>

    <section class="columns-2xs gap-6">
      <AppArticleCard
        v-for="(metadata, post) in posts"
        :key="post"
        :tags="metadata.tags"
        :articleTitle="metadata.alt_title"
        :desc="`...`"
        :url="metadata.canonicalUrl"
      ></AppArticleCard>
    </section>
  </main>
</template>

<script setup>
  const { data } = await useFetch("/api/postsMetadata");

  const posts = ref([]);

  console.log(JSON.parse(JSON.stringify(data.value)));
</script>
