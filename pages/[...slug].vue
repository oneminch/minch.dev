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
        {{ doc.title }}
      </h1>

      <!-- Post Cover Image -->
      <nuxt-img
        v-if="doc.image"
        preload
        placeholder
        format="webp"
        loading="lazy"
        height="300"
        :src="doc.image"
        :alt="doc.title"
        class="text-center"
      />

      <!-- Additional info for leetcode solution posts -->
      <template v-if="doc._dir == 'leetcode'">
        <ul class="mb-1 p-0">
          <li
            class="px-2 py-[.125rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border border-zinc-300 dark:border-zinc-500 bg-zinc-200 dark:bg-zinc-600 text-zinc-800 dark:text-zinc-100"
            v-for="tag in doc.tags"
            :key="tag"
          >
            {{ tag }}
          </li>
        </ul>
        <p>
          <b class="mr-2">Problem URL:</b>
          <nuxt-link v-if="doc.problemUrl" target="_blank" :to="doc.problemUrl">
            {{ doc.title }}
          </nuxt-link>
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

      <!-- Let's connect -->
      <hr
        class="block w-1/2 md:w-1/4 mx-auto my-6 border-none bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent h-[1px] rounded-full"
      />
      <section
        class="flex items-center justify-center [&>p]:my-0 [&>p]:text-zinc-300 [&>p]:dark:text-zinc-700 space-x-3 text-zinc-300"
      >
        <nuxt-link
          class="focused-link"
          to="https://github.com/oneminch"
          target="_blank"
          >GitHub
        </nuxt-link>

        <p>&bull;</p>

        <nuxt-link
          class="focused-link"
          to="https://twitter.com/oneminch"
          target="_blank"
          >Twitter
        </nuxt-link>

        <p>&bull;</p>

        <nuxt-link
          class="focused-link"
          to="https://linkedin.com/in/oneminch"
          target="_blank"
          >LinkedIn
        </nuxt-link>
      </section>
    </template>
    <template #not-found>
      <app-not-found />
    </template>
  </ContentDoc>
</template>

<style scoped>
  img {
    @apply w-full h-auto object-cover bg-cover origin-center border border-zinc-300 dark:border-zinc-600;
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
