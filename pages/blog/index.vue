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

  // Fetch all blog posts sans LeetCode solutions
  const { pending, data: blogPosts } = await useLazyAsyncData("all-posts", () =>
    queryContent("/blog").sort({ published_on: -1 }).find()
  );
</script>

<!-- Blog: Posts -->
<template>
  <main id="main-content">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="mb-4 text-3xl font-bold text-left">Blog</h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      Writing is a tool for thinking.
    </p>

    <section class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <template v-if="pending">
        <app-blog-skeleton
          v-for="skeleton in generateKeys(5)"
          :key="skeleton"
        />
      </template>
      <template v-else>
        <app-blog-card
          v-for="blogPost in blogPosts"
          :key="blogPost._id"
          :tags="blogPost.tags"
          :blog-title="blogPost.title"
          :title="blogPost.title"
          :url="blogPost._path"
          :pub-date="blogPost.updated"
          :cover-image="blogPost.image"
        />
      </template>
    </section>
  </main>
</template>
