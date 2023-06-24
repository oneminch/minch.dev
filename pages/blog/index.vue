<!-- Blog: Posts -->
<template>
  <section>
    <template v-if="!pending || blogPosts.length > 0">
      <AppBlogCard
        v-for="(blogPost, index) in blogPosts"
        :key="index"
        :tags="blogPost.tags"
        :blogTitle="blogPost.longTitle || blogPost.title"
        :title="blogPost.title"
        :url="blogPost._path"
        :pubDate="blogPost.updated"
        :coverImage="blogPost.coverImage"
      />
    </template>
    <template v-else>
      <AppBlogSkeleton v-for="i in 5" :key="i" />
    </template>
  </section>
</template>

<script setup>
  definePageMeta({
    layout: "blog-list-layout"
  });

  // Fetch all blog posts sans LeetCode solutions
  const { pending, data: blogPosts } = await useLazyAsyncData("blog", () =>
    queryContent("/")
      .where({ _dir: { $ne: "leetcode" } })
      .find()
  );

  // console.log(JSON.parse(JSON.stringify(blogPosts.value)));
</script>
