<script setup>
  definePageMeta({
    layout: "blog-post-layout"
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
        <nuxt-link v-if="doc.problemUrl" target="_blank" :to="doc.problemUrl">
          {{ doc.title }}
        </nuxt-link>
      </p>

      <!-- Main Content -->
      <ContentRenderer :value="doc" />

      <hr
        class="block w-1/2 md:w-1/4 mx-auto my-6 border-none bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent h-[1px] rounded-full"
      />

      <!-- Let's Connect -->
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
