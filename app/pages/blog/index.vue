<script setup>
  definePageMeta({
    title: 'Blog',
    description: 'My articles on various software development topics.'
  });

  // Fetch all blog posts
  const { pending, data: posts } = await useLazyAsyncData('all-posts', () =>
    queryCollection('blog')
      .select('id', 'meta', 'title', 'path', 'published_on')
      .order('published_on', 'DESC')
      .all()
  );
</script>

<!-- Blog: Posts -->
<template>
  <article>
    <h1 class="mb-4 text-3xl font-bold text-left">Blog</h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      Writing as a tool for thinking.
    </p>
    <section class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <template v-if="pending">
        <app-blog-skeleton
          v-for="skeleton in generateKeys(5)"
          :key="skeleton" />
      </template>
      <template v-else>
        <app-blog-card
          v-for="post in posts"
          :key="post.id"
          :tags="post.meta.tags"
          :blog-title="post.title"
          :title="post.title"
          :url="post.path"
          :pub-date="post.published_on"
          :cover-image="post.meta.image" />
      </template>
    </section>
  </article>
</template>
