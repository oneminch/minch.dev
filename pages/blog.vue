<script setup>
  const seoMeta = {
    title: "Dawit's Blog",
    description:
      "This page contains my articles on various software and web development topics.",
    image: "/og-image.png",
    page: "blog"
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
    ogUrl: `https://oneminch.dev/${seoMeta.page}`,

    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });

  // Skeletons
  const skeletons = [...Array(5).fill(Math.random())];

  // Fetch all blog posts sans LeetCode solutions
  const { pending, data: blogPosts } = await useLazyAsyncData("all-posts", () =>
    queryContent("/blog").sort({ publishedOn: -1 }).find()
  );
</script>

<!-- Blog: Posts -->
<template>
  <main id="main-content">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="text-3xl text-left font-bold mb-6">Blog</h1>
    <p class="text-zinc-500 dark:text-zinc-300 mb-8">
      I use writing as a tool for thought. In the form of articles, I sometimes
      share some of the things I've learned or the process behind some of my
      projects.
    </p>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <template v-if="pending">
        <AppBlogSkeleton v-for="skeleton in skeletons" :key="skeleton" />
      </template>
      <template v-else>
        <AppBlogCard
          v-for="blogPost in blogPosts"
          :key="blogPost._id"
          :tags="blogPost.tags"
          :blogTitle="blogPost.title"
          :title="blogPost.title"
          :url="blogPost._path"
          :pubDate="blogPost.updated"
          :coverImage="blogPost.image"
        />
      </template>
    </section>
  </main>
</template>
