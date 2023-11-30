<script setup>
  defineProps({
    url: String,
    label: String,
    icon: String,
    isExternal: {
      type: Boolean,
      default: false
    },
    downloadLabel: String,
    isDownloadLink: {
      type: Boolean,
      default: false
    }
  });
</script>

<!-- Link: Card -->
<template>
  <nuxt-link
    class="relative flex flex-col items-center justify-center px-2 pt-2 pb-3 overflow-hidden font-medium rounded-md focused-link card-style hover:ring-2 hover:ring-offset-0 hover:ring-green-400 hover:ring-opacity-75"
    :target="isExternal || isDownloadLink ? '_blank' : '_self'"
    :to="url"
    :download="downloadLabel"
  >
    <Icon :name="icon" size="2.5rem" class="p-1 mb-2" />

    <span>{{ label }}</span>
    <Icon
      v-show="isExternal"
      name="heroicons:arrow-up-right-20-solid"
      size="1.25rem"
      aria-label="Opens in a new tab"
      class="absolute flex-shrink-0 text-green-500 top-2 right-2"
    />
    <Icon
      v-show="isDownloadLink"
      name="heroicons:arrow-down-tray-20-solid"
      size="1.25rem"
      aria-label="Opens Download Modal For File"
      class="absolute flex-shrink-0 text-green-500 top-2 right-2"
    />
  </nuxt-link>
</template>
