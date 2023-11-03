<script setup>
  const props = defineProps({
    pick: {
      type: Object,
      default(rawProps) {
        return {};
      }
    }
  });
</script>

<!-- Pick: Card -->
<template>
  <nuxt-link
    class="focused-link card-style w-full flex justify-start items-center px-2 py-2 relative mb-2 rounded first-of-type:rounded-t-lg last-of-type:rounded-b-lg transition-colors duration-150 hover:bg-green-50/25 dark:hover:bg-zinc-700/75"
    target="_blank"
    :to="pick.url"
  >
    <nuxt-img
      format="webp"
      loading="lazy"
      :src="pick.cover"
      class="w-8 h-8 md:w-12 md:10 flex-shrink-0 text-xs object-cover rounded mr-3 overflow-hidden text-center bg-zinc-200 dark:bg-zinc-700"
      alt="Cover Image"
    />
    <span>{{ pick.title }}</span>
    <Icon
      name="heroicons:arrow-up-right-20-solid"
      size="1.25rem"
      aria-label="Opens in a new tab"
      class="ml-auto flex-shrink-0 text-green-500 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-none rounded-full p-1 w-7 h-7"
    />
  </nuxt-link>
</template>
