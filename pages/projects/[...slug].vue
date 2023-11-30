<script setup>
  definePageMeta({
    layout: "project-page-layout"
  });
</script>

<template>
  <ContentDoc>
    <template #default="{ doc }">
      <!-- Project title -->
      <h1 class="flex items-center mb-4 text-xl font-bold sm:text-2xl">
        <nuxt-link to="/projects">Projects</nuxt-link>
        <Icon
          name="heroicons:chevron-right-20-solid"
          class="mx-1 text-green-500"
        />
        <span>{{ doc.title }}</span>
      </h1>

      <!-- Project Cover Image -->
      <section class="relative overflow-hidden rounded-xl max-h-64 card-style">
        <nuxt-img
          preload
          placeholder
          height="250"
          format="webp"
          loading="lazy"
          :src="doc.image"
          :alt="doc.title"
          class="object-cover object-top w-full h-full m-0 text-center"
        />
        <div
          class="absolute inset-0 h-full bg-clip-content bg-gradient-to-b from-white/0 to-white/50 dark:from-black/0 dark:to-black/50 text-zinc-800 dark:text-zinc-200"
        ></div>
      </section>

      <!-- Project Tags -->
      <section class="flex items-center justify-between mt-2 mb-4">
        <div class="flex items-center text-xl">
          <nuxt-link
            :to="doc.source_url"
            class="flex items-center justify-center border-none"
          >
            <Icon name="simple-icons:github" />
          </nuxt-link>
          <nuxt-link
            :to="doc.source_url"
            class="flex items-center justify-center border-none"
          >
            <Icon name="heroicons:arrow-up-right-20-solid" />
          </nuxt-link>
        </div>
        <ul class="p-0 m-0 space-x-1">
          <li
            class="px-2 py-[.125rem] inline-block rounded-full font-medium font-mono text-xs bg-zinc-300/75 dark:bg-zinc-700/75 text-zinc-800 dark:text-zinc-100"
            v-for="tag in doc.tags"
            :key="tag"
          >
            {{ tag }}
          </li>
        </ul>
      </section>

      <!-- Main Project content -->
      <ContentRenderer :value="doc" />
    </template>
    <template #not-found>
      <app-not-found />
    </template>
  </ContentDoc>
</template>

<style scoped>
  img {
    /* @apply w-full h-auto object-cover border border-zinc-300 dark:border-zinc-600; */
  }
</style>
