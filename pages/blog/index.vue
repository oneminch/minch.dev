<!-- Blog: Posts -->
<template>
  <main id="blog">
    <h1 class="text-3xl text-left font-bold mb-6">Blog</h1>

    <section>
      <template v-if="pending">
        <AppBlogSkeleton v-for="i in 5" :key="i" />
      </template>
      <template v-else>
        <AppBlogCard
          v-for="blogPost in blogPosts"
          :key="blogPost._id"
          :tags="blogPost.tags"
          :blogTitle="blogPost.longTitle || blogPost.title"
          :title="blogPost.title"
          :url="blogPost._path"
          :pubDate="blogPost.updated"
          :coverImage="blogPost.image"
        />
      </template>
    </section>
  </main>
</template>

<script setup>
  // Fetch all blog posts sans LeetCode solutions
  const { pending, data: blogPosts } = await useLazyAsyncData("blog", () =>
    queryContent("/")
      .where({ _dir: { $ne: "leetcode" } })
      .find()
  );

  // console.log(JSON.parse(JSON.stringify(blogPosts)));
</script>
