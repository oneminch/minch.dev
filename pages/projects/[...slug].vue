<script setup>
  definePageMeta({
    layout: "project-page-layout"
  });
</script>

<template>
  <ContentDoc>
    <template #default="{ doc }">
      <!-- Project Name -->
      <h1
        class="flex items-center mb-4 text-xl font-bold text-left not-prose sm:text-3xl"
      >
        <nuxt-link
          to="/projects"
          class="no-underline border-b-[.1rem] border-b-green-500/75"
          >Projects</nuxt-link
        >
        <Icon
          name="heroicons:chevron-right-20-solid"
          class="mx-1 text-green-500"
        />
        <span>{{ doc.title }}</span>
      </h1>

      <!-- Project Screenshot -->
      <section class="my-4 overflow-hidden rounded-xl max-h-72 card-style">
        <nuxt-img
          preload
          placeholder
          height="250"
          format="webp"
          loading="lazy"
          :src="`https://raw.githubusercontent.com/oneminch/${doc.title
            .split(' ')
            .join('-')}/main/public/screenshot.png`"
          :alt="`Project Screenshot for My ${doc.title} Project`"
          class="object-cover object-top w-full h-full m-0 text-center"
        />
      </section>

      <section
        class="flex items-start justify-between gap-4 mt-2 mb-4 sm:items-center"
      >
        <!-- Project Tags -->
        <ul class="p-0 m-0 space-x-1">
          <li
            class="my-0 px-2 py-[.125rem] inline-block rounded-full font-medium font-mono text-xs bg-zinc-300/75 dark:bg-zinc-700/75 text-zinc-800 dark:text-zinc-100"
            v-for="tag in doc.tags"
            :key="tag"
          >
            {{ tag }}
          </li>
        </ul>

        <!-- Relevant Links -->
        <div class="flex items-center space-x-2 text-xl">
          <nuxt-link
            :to="doc.source_url"
            title="Source Code"
            aria-label="Source Code"
            class="flex items-center justify-center w-8 h-8 p-1 border-none rounded-full bg-zinc-800 text-zinc-50"
          >
            <Icon name="simple-icons:github" />
          </nuxt-link>
          <nuxt-link
            :to="doc.live_url"
            title="Live Preview"
            aria-label="Live Preview"
            class="flex items-center justify-center w-8 h-8 p-1 bg-green-500 border-none rounded-full text-zinc-800"
          >
            <Icon name="heroicons:arrow-up-right-20-solid" />
          </nuxt-link>
        </div>
      </section>

      <!-- Main Project content -->
      <ContentRenderer :value="doc" />
    </template>
    <template #not-found>
      <app-not-found />
    </template>
  </ContentDoc>
</template>
