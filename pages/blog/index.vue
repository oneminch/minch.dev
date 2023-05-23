<!-- Blog: Posts -->
<template>
  <section>
    <AppBlogCard
      v-for="(blogPost, index) in blogPosts"
      :key="index"
      :tags="blogPost.tags"
      :blogTitle="blogPost.alt_title"
      :title="blogPost.title"
      :url="blogPost._path"
      :pubDate="blogPost.created"
    ></AppBlogCard>
  </section>
</template>

<script setup>
  definePageMeta({
    layout: "blog-layout"
  });

  const blogPosts = await queryContent().find();

  // console.log(blogPosts);
</script>
