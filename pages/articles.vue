<!-- Articles -->
<template>
  <main id="articles">
    <h1 class="text-3xl text-left font-bold mb-6">Articles</h1>

    <section class="">
      <!-- <section class="columns-2xs gap-6"> -->
      <AppArticleCard
        v-for="(article, index) in articles"
        :key="index"
        :tags="article.tags"
        :articleTitle="article.alt_title"
        :title="article.title"
        :url="article._path"
        :pubDate="article.created"
      ></AppArticleCard>
      <!-- :desc="article.description" -->
      <!-- :imageUrl="article.imageUrl" -->
      <!-- :readTime="article.readTime" -->
    </section>
  </main>
</template>

<script setup>
  const articles = await queryContent("articles").find();

  // console.log(articles);
</script>
