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

      <!-- Table of Contents for Articles -->
      <template v-if="doc.body.toc.links.length > 0">
        <details
          open
          class="flex items-center self-start px-4 py-3 mb-2 border rounded-lg border-zinc-200 dark:border-zinc-700"
        >
          <summary
            class="flex items-center list-none appearance-none cursor-pointer"
          >
            <span class="inline-block mr-2 text-lg font-bold">Outline</span>
            <Icon
              class="text-green-500 arrow-right"
              name="material-symbols:chevron-right-rounded"
              size="1.5rem"
            />
            <Icon
              class="text-green-500 arrow-down"
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
        class="flex items-center [&>span]:text-zinc-300 [&>span]:dark:text-zinc-700 space-x-3 text-zinc-300"
      >
        <p class="my-0 font-bold">Let's Connect:</p>
        <nuxt-link
          class="focused-link"
          to="https://twitter.com/oneminch"
          target="_blank"
          >Twitter
        </nuxt-link>

        <span>&bull;</span>

        <nuxt-link
          class="focused-link"
          to="https://github.com/oneminch"
          target="_blank"
          >GitHub
        </nuxt-link>

        <span>&bull;</span>

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
