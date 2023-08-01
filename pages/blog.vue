<!-- Blog: Posts -->
<template>
  <main id="blog">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

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
  const seoMeta = {
    title: "Dawit's Blog",
    description:
      "This page contains my articles on various software and web development topics.",
    image: "/og-image.png"
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
    ogUrl: `http://oneminch.dev${useRoute().fullPath}`,
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });

  // Fetch all blog posts sans LeetCode solutions
  const { pending, data: blogPosts } = await useLazyAsyncData("blog", () =>
    queryContent("/blog").find()
  );
</script>
