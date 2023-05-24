<template>
  <ContentDoc v-slot="{ doc }">
    <!-- Post title -->
    <h1 class="mb-4">{{ doc.title }}</h1>

    <!-- Additional info for leetcode solution posts -->
    <template v-if="doc._dir == 'leetcode'">
      <div class="mb-1">
        <span
          class="px-2 py-[.1rem] inline-block rounded-full bg-green-400 font-mono text-slate-800 text-sm mr-1 font-semibold"
          v-for="tag in doc.tags"
          :key="tag"
          >{{ tag }}
        </span>
      </div>

      <p>
        <b class="mr-2">Problem URL:</b>
        <NuxtLink v-if="doc.problemUrl" target="_blank" :to="doc.problemUrl">
          {{ doc.title }}
        </NuxtLink>
      </p>
    </template>

    <!-- Main post content -->
    <ContentRenderer :value="doc" />
  </ContentDoc>
</template>

<script setup>
  definePageMeta({
    layout: "blog-post-layout"
  });
</script>

<style scoped>
  #post a {
    @apply no-underline border-b border-b-green-400;
  }
</style>
