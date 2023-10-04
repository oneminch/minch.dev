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
    class="focused-link card-style flex flex-col items-center px-2 pt-2 pb-3 relative rounded-lg font-medium overflow-hidden"
    :target="isExternal ? '_blank' : '_self'"
    :to="url"
  >
    <Icon :name="icon" size="2.5rem" class="mb-2 p-1" />

    <span>{{ label }}</span>
    <Icon
      v-show="isExternal"
      name="heroicons:arrow-up-right-20-solid"
      size="1.25rem"
      class="absolute top-0 right-0 flex-shrink-0 text-green-500 bg-zinc-100 dark:bg-zinc-700 border-l border-b border-zinc-300 dark:border-none rounded-bl-lg p-1 w-7 h-7"
    />
  </nuxt-link>
</template>
