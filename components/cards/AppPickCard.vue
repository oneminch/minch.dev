<!-- Blog: Card -->
<template>
  <NuxtLink
    class="focused-link card-style w-full flex justify-start items-center px-2 py-2 mb-4 relative"
    target="_blank"
    :to="pick.url"
  >
    <nuxt-img
      format="webp"
      loading="lazy"
      :src="pick.cover"
      class="w-8 h-8 md:w-12 md:10 flex-shrink-0 text-xs object-cover rounded-[0.275rem] mr-3 overflow-hidden text-center bg-gray-200 dark:bg-gray-500 border-[.03rem] dark:border-none border-gray-300"
      alt="Cover Image"
    />
    <span>{{ pick.title }}</span>
    <Icon
      name="heroicons:arrow-up-right-20-solid"
      size="1.25rem"
      class="ml-auto flex-shrink-0 text-green-500 bg-gray-100 dark:bg-gray-600 border-[0.5px] border-gray-300 dark:border-none rounded-full p-1 w-7 h-7"
    />
  </NuxtLink>
</template>

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
