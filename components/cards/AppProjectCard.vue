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
    imgUrl: {
      type: String,
      default: ""
    }
  });
</script>

<!-- Project: Card -->
<template>
  <nuxt-link
    :to="projectUrl"
    class="relative flex items-center w-full h-24 px-4 py-2 overflow-hidden duration-200 bg-white border focused-link rounded-xl transition- border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800/50 hover:ring-2 hover:ring-offset-0 hover:ring-green-400 hover:ring-opacity-75"
  >
    <div
      class="w-12 h-12 rounded-2xl shrink-0 relative -z-0 before:content-[''] before:absolute before:-inset-[1px] before:-z-10 before:rounded-[calc(.75rem+1px)] before:bg-gradient-to-b before:from-green-500 before:to-lime-400"
    >
      <Icon
        name="heroicons:command-line-20-solid"
        class="w-full h-full p-2 bg-zinc-200 dark:bg-zinc-700 opacity-90 rounded-xl"
      />
    </div>
    <div class="flex flex-col items-start justify-center pl-4">
      <h3 class="font-semibold">{{ projectTitle }}</h3>
      <p class="text-[.825rem] text-zinc-600 dark:text-zinc-400">
        {{ projectDescription }}
      </p>
    </div>
  </nuxt-link>
</template>
