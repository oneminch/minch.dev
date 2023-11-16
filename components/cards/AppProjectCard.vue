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
    class="focused-link rounded-xl h-24 px-4 py-4 w-full relative flex items-center transition- duration-200 overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 hover:ring-inset hover:ring-2 hover:ring-green-500"
  >
    <div
      class="w-12 h-12 rounded-2xl shrink-0 relative -z-0 before:content-[''] before:absolute before:-inset-[1px] before:-z-10 before:rounded-[calc(.75rem+1px)] before:bg-gradient-to-b before:from-green-500 before:to-lime-400"
    >
      <nuxt-img
        format="webp"
        loading="lazy"
        :src="
          projectTitle.toLowerCase() === 'deadlines'
            ? 'https://raw.githubusercontent.com/oneminch/Deadlines/main/src/assets/logo.png'
            : 'https://enclist.sirv.com/logo.png'
        "
        :alt="`Project Logo for ${projectTitle}`"
        class="w-full h-full bg-zinc-200 dark:bg-zinc-700 opacity-90 rounded-xl object-cover"
        width="48"
        height="48"
      />
    </div>
    <div class="flex flex-col items-start justify-center pl-4">
      <h3 class="font-bold">{{ projectTitle }}</h3>
      <p class="text-sm text-zinc-600 dark:text-zinc-400">
        {{ `${projectDescription.substring(0, 55)}...` }}
      </p>
    </div>
  </nuxt-link>
</template>
