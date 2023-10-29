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
    class="focused-link card-style flex flex-col justify-center items-center px-2 pt-2 pb-3 relative rounded-lg font-medium overflow-hidden"
    :target="isExternal ? '_blank' : '_self'"
    :to="url"
    prefetch
  >
    <Icon :name="icon" size="2.5rem" class="mb-2 p-1" />

    <span>{{ label }}</span>
    <Icon
      v-show="isExternal"
      name="heroicons:arrow-up-right-20-solid"
      class="absolute top-1 right-1 flex-shrink-0 text-green-500 bg-zinc-100 dark:bg-zinc-700 border-l border-b border-zinc-300 dark:border-none rounded-full"
    />
  </nuxt-link>
</template>
