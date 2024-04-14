<script setup>
  const props = defineProps({
    projectTitle: {
      type: String,
      default: ""
    },
    projectDescription: {
      type: String,
      default: ""
    },
    projectUrl: {
      type: String,
      default: "#"
    },
    icon: {
      type: String,
      default: ""
    }
  });

  const isExternalUrl = computed(() => {
    return props.projectUrl.startsWith("https://");
  });
</script>

<!-- Project: Card -->
<template>
  <nuxt-link
    :to="projectUrl"
    class="relative flex items-center w-full h-24 px-4 py-2 overflow-hidden duration-200 bg-white border focus-visible:global-focus rounded-xl transition- border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800/50 hover:ring-2 hover:ring-offset-0 hover:ring-green-400 hover:ring-opacity-75"
  >
    <div
      class="w-12 h-12 flex items-center justify-center rounded-2xl shrink-0 relative -z-0 before:content-[''] before:absolute before:-inset-[1px] before:-z-10 before:rounded-[calc(.75rem+1px)] before:bg-gradient-to-b before:from-green-500 before:to-lime-400"
    >
      <template v-if="icon.startsWith('https://')">
        <nuxt-img
          preload
          placeholder
          width="40"
          height="40"
          :src="icon"
          :alt="`Project Logo for ${projectTitle}`"
          class="w-full h-full p-2 bg-zinc-100 dark:bg-zinc-600 opacity-95 dark:opacity-90 rounded-xl"
        />
      </template>
      <template v-else>
        <Icon
          :name="`simple-icons:${icon}`"
          class="w-full h-full p-3 bg-zinc-100 dark:bg-zinc-600 opacity-95 dark:opacity-90 rounded-xl"
        />
      </template>
    </div>
    <div class="flex flex-col items-start justify-center pl-4">
      <h3 class="font-semibold">{{ projectTitle }}</h3>
      <p class="text-[.825rem] text-zinc-600 dark:text-zinc-400">
        {{ projectDescription }}
      </p>
    </div>
    <Icon
      v-show="isExternalUrl"
      name="heroicons:arrow-up-right-20-solid"
      size="1.25rem"
      aria-label="Opens in a new tab"
      class="absolute flex-shrink-0 text-green-500 top-1 right-1"
    />
  </nuxt-link>
</template>
