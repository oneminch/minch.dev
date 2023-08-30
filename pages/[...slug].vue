<script setup>
  definePageMeta({
    layout: "blog-post-layout"
  });
</script>

<template>
  <ContentDoc>
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
            class="px-2 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border-[0.75px] border-zinc-300 dark:border-zinc-500 bg-zinc-200 dark:bg-zinc-600 text-zinc-800 dark:text-zinc-100"
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
        <details
          open
          class="border border-zinc-200 dark:border-zinc-700 rounded-lg flex items-center py-3 px-4 mb-2 self-start"
        >
          <summary
            class="cursor-pointer list-none appearance-none flex items-center"
          >
            <span class="inline-block text-lg font-bold mr-2">Outline</span>
            <Icon
              class="arrow-right text-green-500"
              name="material-symbols:chevron-right-rounded"
              size="1.5rem"
            />
            <Icon
              class="arrow-down text-green-500"
              name="material-symbols:expand-more-rounded"
              size="1.5rem"
            />
          </summary>

          <ol class="my-1">
            <li v-for="link of doc.body.toc.links" :key="link.id">
              <a :href="`#${link.id}`">{{ link.text }}</a>
            </li>
          </ol>
        </details>
      </template>

      <!-- Main post content -->
      <ContentRenderer :value="doc" />
    </template>
    <template #not-found>
      <AppNotFound />
    </template>
  </ContentDoc>
</template>

<style scoped>
  img {
    @apply w-full object-cover bg-cover origin-center border-[.75px] border-zinc-300 dark:border-zinc-600;
  }

  details > summary::marker,
  details > summary::-webkit-details-marker {
    @apply hidden;
  }

  /* Collapsed */
  details > summary .arrow-right {
    @apply inline-block;
  }
  details > summary .arrow-down {
    @apply hidden;
  }

  /* Expanded */
  details[open] > summary .arrow-down {
    @apply inline-block;
  }
  details[open] > summary .arrow-right {
    @apply hidden;
  }
</style>
