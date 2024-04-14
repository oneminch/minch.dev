<script setup>
  defineProps({
    url: String,
    label: String,
    icon: String,
    isExternalUrl: {
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
    class="relative flex flex-col items-center justify-center px-2 pt-2 pb-3 overflow-hidden font-medium rounded-md focus-visible:global-focus card-style hover:ring-2 hover:ring-offset-0 hover:ring-green-400 hover:ring-opacity-75"
    :target="isExternalUrl || isDownloadLink ? '_blank' : '_self'"
    :to="url"
    :download="downloadLabel"
    external
  >
    <Icon :name="icon" size="2.5rem" class="p-1 mb-2" />

    <span>{{ label }}</span>
    <Icon
      v-show="isExternalUrl"
      name="heroicons:arrow-up-right-20-solid"
      size="1.25rem"
      aria-label="Opens in a new tab"
      class="absolute flex-shrink-0 text-green-500 top-1 right-1"
    />
    <Icon
      v-show="isDownloadLink"
      name="heroicons:arrow-down-tray-20-solid"
      size="1.25rem"
      aria-label="Opens Download Modal For File"
      class="absolute flex-shrink-0 text-green-500 top-1 right-1"
    />
  </nuxt-link>
</template>
