<template>
  <ContentDoc tag="">
    <template #default="{ doc }">
      <!-- Post title -->
      <h1 class="mb-4">
        {{ doc.longTitle || doc.title }}
      </h1>

      <!-- Post Cover Image -->
      <nuxt-img
        v-if="doc.image"
        format="webp"
        loading="lazy"
        :src="doc.image"
        :alt="doc.title"
      />

      <!-- Additional info for leetcode solution posts -->
      <template v-if="doc._dir == 'leetcode'">
        <ul class="mb-1 p-0">
          <li
            class="px-2 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border-[0.75px] border-gray-300 dark:border-gray-500 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100"
            v-for="tag in doc.tags"
            :key="tag"
          >
            {{ tag }}
          </li>
        </ul>
        <p>
          <b class="mr-2">Problem URL:</b>
          <NuxtLink v-if="doc.problemUrl" target="_blank" :to="doc.problemUrl">
            {{ doc.title }}
          </NuxtLink>
        </p>
      </template>

      <!-- Table of Contents for Articles -->
      <template v-if="doc._dir == 'blog' && doc.body.toc.links.length > 0">
        <h2>Outline</h2>
        <ol>
          <li v-for="link of doc.body.toc.links" :key="link.id">
            <a :href="`#${link.id}`">{{ link.text }}</a>
          </li>
        </ol>
        <br />
      </template>

      <!-- Main post content -->
      <ContentRenderer :value="doc" />
    </template>
    <template #not-found>
      <AppNotFound />
    </template>
  </ContentDoc>
</template>

<script setup>
  definePageMeta({
    layout: "blog-post-layout"
  });
</script>

<style scoped>
  img {
    @apply w-full object-cover bg-cover origin-center border-[.75px] border-gray-300 dark:border-gray-600;
  }
</style>
