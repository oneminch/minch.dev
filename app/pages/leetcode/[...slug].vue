<script setup>
  definePageMeta({
    layout: 'blog-layout'
  });

  useHead({
    titleTemplate: '%s (LeetCode Solution) · Dawit'
  });

  const route = useRoute();

  const { data: page } = await useAsyncData(route.path, () =>
    queryCollection('leetcode').path(route.path).first()
  );

  const { title: postTitle, description: postDescription } = page.value;

  const serverMeta = {
    ogImage: '/og-image.png',
    twitterImage: '/og-image.png',
    ogType: 'article',
    ogLocale: 'en_US',
    twitterCard: 'summary',
    twitterCreator: '@oneminch'
  };

  useSeoMeta({
    title: () => postTitle,
    description: () => postDescription,
    ogTitle: () => `${postTitle} (LeetCode Solution) · Dawit`,
    twitterTitle: () => `${postTitle} (LeetCode Solution) · Dawit`,
    ogDescription: () => postDescription,
    twitterDescription: () => postDescription,
    ogUrl: () => `https://minch.dev${route.path}`,
    ...serverMeta
  });
</script>

<template>
  <!-- Problem Title -->
  <h1 class="mb-4">
    {{ page.title }}
  </h1>

  <!-- Solution Tags -->
  <ul class="p-0! mb-1 flex items-center gap-x-1">
    <li
      class="px-2 py-[.125rem] inline-block rounded-full font-semibold font-mono text-xs border border-zinc-300 dark:border-zinc-500 bg-zinc-200 dark:bg-zinc-600 text-zinc-800 dark:text-zinc-100"
      v-for="tag in page.meta.tags"
      :key="tag">
      {{ tag }}
    </li>
  </ul>

  <!-- Problem URL -->
  <p>
    <b class="mr-2">Problem URL:</b>
    <nuxt-link
      v-if="page.problemUrl"
      target="_blank"
      :to="page.problemUrl"
      external>
      {{ page.title }}
    </nuxt-link>
  </p>

  <!-- Main Content -->
  <template v-if="page">
    <ContentRenderer :value="page" />
    <app-divider class="w-1/2 my-8 md:w-2/3" />

    <!-- Let's Connect -->
    <app-post-footer />
  </template>
  <template v-else>
    <app-not-found />
  </template>
</template>
