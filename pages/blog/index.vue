<!-- Blog: Posts -->
<template>
  <section>
    <AppBlogCard
      v-for="(blogPost, index) in blogPosts"
      :key="index"
      :tags="blogPost.tags"
      :blogTitle="blogPost.longTitle || blogPost.title"
      :title="blogPost.title"
      :url="blogPost._path"
      :pubDate="blogPost.updated"
      :coverImage="blogPost.coverImage"
    ></AppBlogCard>
  </section>
</template>

<script setup>
  definePageMeta({
    layout: "blog-list-layout"
  });

  // Fetch all blog posts sans LeetCode solutions
  const { data: blogPosts } = await useAsyncData("blog", () =>
    queryContent("/")
      .where({ _dir: { $ne: "leetcode" } })
      .find()
  );

  // console.log(JSON.parse(JSON.stringify(blogPosts.value)));
</script>
