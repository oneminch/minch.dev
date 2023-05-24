<!-- Blog: Posts -->
<template>
  <section>
    <AppBlogCard
      v-for="(blogPost, index) in blogPosts"
      :key="index"
      :tags="blogPost.tags"
      :blogTitle="blogPost.alt_title || blogPost.title"
      :title="blogPost.title"
      :url="blogPost._path"
      :pubDate="blogPost.created"
    ></AppBlogCard>
    <!-- :slug="blogPost.title" -->
  </section>
</template>

<script setup>
  definePageMeta({
    layout: "blog-list-layout"
  });

  const { data: blogPosts } = await useAsyncData("blog", () =>
    queryContent("/")
      .where({ _dir: { $ne: "leetcode" } })
      .find()
  );

  // console.log(JSON.parse(JSON.stringify(blogPosts.value)));
</script>
