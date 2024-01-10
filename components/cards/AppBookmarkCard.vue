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
    class="relative flex items-center justify-start w-full px-2 py-2 mb-2 transition-colors duration-150 rounded-lg global-focus hover:bg-zinc-200 dark:hover:bg-zinc-800"
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
      class="flex-shrink-0 object-cover w-10 h-8 mr-3 overflow-hidden text-xs text-center rounded bg-zinc-200 dark:bg-zinc-700"
      :alt="`Cover Image for External Article Titled ${bookmark.title}`"
    />
    <span>{{ bookmark.title }}</span>
    <Icon
      name="heroicons:arrow-up-right-20-solid"
      size="1.25rem"
      aria-label="Opens in a new tab"
      class="flex-shrink-0 p-1 ml-auto text-green-500 rounded-full bg-zinc-200 dark:bg-zinc-800 w-7 h-7"
    />
  </nuxt-link>
</template>
