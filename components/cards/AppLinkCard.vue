<script setup>
  defineProps({
    url: String,
    label: String,
    icon: String,
    isExternal: {
      type: Boolean,
      default: false
    }
  });
</script>

<template>
  <nuxt-link
    class="focused-link card-style flex flex-col justify-center items-center px-2 pt-2 pb-3 relative rounded-xl font-medium overflow-hidden transition-colors duration-150 hover:bg-green-50/25 dark:hover:bg-zinc-700/75"
    :target="isExternal ? '_blank' : '_self'"
    :to="url"
  >
    <Icon :name="icon" size="2.5rem" class="mb-2 p-1" />

    <span>{{ label }}</span>
    <Icon
      v-show="isExternal"
      name="heroicons:arrow-up-right-20-solid"
      size="1.5rem"
      aria-label="An icon showing the link is external"
      class="absolute top-1 right-1 flex-shrink-0 text-green-500 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-none rounded-full p-1"
    />
  </nuxt-link>
</template>
