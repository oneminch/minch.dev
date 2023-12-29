<script setup>
  const props = defineProps({
    bookmark: {
      type: Object,
      default(rawProps) {
        return {};
      }
    }
  });
</script>

<!-- Bookmark: Card -->
<template>
  <nuxt-link
    class="relative flex items-center justify-start w-full px-2 py-2 mb-2 transition-colors duration-150 rounded global-focus card-style first-of-type:rounded-t-lg last-of-type:rounded-b-lg hover:bg-green-50/25 dark:hover:bg-zinc-700/75"
    target="_blank"
    external
    :to="bookmark.url"
    noPrefetch
  >
    <nuxt-img
      preload
      placeholder
      format="webp"
      loading="lazy"
      width="48"
      height="48"
      :src="bookmark.cover"
      class="flex-shrink-0 object-cover w-8 h-8 mr-3 overflow-hidden text-xs text-center rounded md:w-12 md:10 bg-zinc-200 dark:bg-zinc-700"
      :alt="`Cover Image for External Article Titled ${bookmark.title}`"
    />
    <span>{{ bookmark.title }}</span>
    <Icon
      name="heroicons:arrow-up-right-20-solid"
      size="1.25rem"
      aria-label="Opens in a new tab"
      class="flex-shrink-0 p-1 ml-auto text-green-500 border rounded-full bg-zinc-100 dark:bg-zinc-700 border-zinc-300 dark:border-none w-7 h-7"
    />
  </nuxt-link>
</template>
