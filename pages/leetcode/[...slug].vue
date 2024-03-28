<script setup>
  definePageMeta({
    layout: "blog-layout"
  });

  useHead({
    titleTemplate: "%s (LeetCode Solution) · Dawit"
  });

  const route = useRoute();

  const { data } = await useAsyncData("get-leetcode-post", () =>
    queryContent(route.path).only(["title", "description"]).findOne()
  );

  const { title: postTitle, description: postDescription } = data.value;

  const serverMeta = {
    ogImage: "/og-image.png",
    twitterImage: "/og-image.png",
    ogType: "article",
    ogLocale: "en_US",
    twitterCard: "summary",
    twitterCreator: "@oneminch"
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
  <ContentDoc>
    <template #default="{ doc }">
      <!-- Problem Title -->
      <h1 class="mb-4">
        {{ doc.title }}
      </h1>

      <!-- Solution Tags -->
      <ul class="p-0 mb-1">
        <li
          class="px-2 py-[.125rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border border-zinc-300 dark:border-zinc-500 bg-zinc-200 dark:bg-zinc-600 text-zinc-800 dark:text-zinc-100"
          v-for="tag in doc.tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>

      <!-- Problem URL -->
      <p>
        <b class="mr-2">Problem URL:</b>
        <nuxt-link
          v-if="doc.problemUrl"
          target="_blank"
          :to="doc.problemUrl"
          external
        >
          {{ doc.title }}
        </nuxt-link>
      </p>

      <!-- Main Content -->
      <ContentRenderer :value="doc" />

      <app-divider class="w-1/2 my-8 md:w-2/3" />

      <!-- Let's Connect -->
      <app-post-footer />
    </template>
    <template #not-found>
      <app-not-found />
    </template>
  </ContentDoc>
</template>
