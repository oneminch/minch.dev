<!-- Coding Solution Card -->
<template>
  <nuxt-link
    class="focused-link card-style w-full flex justify-start items-center px-4 py-2 relative rounded-xl"
    :to="url"
    :title="problemTitle"
  >
    <div
      class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-900 rounded-full p-1 mr-2 overflow-hidden"
    >
      <nuxt-img
        format="webp"
        loading="lazy"
        :src="`/icons/${platform}.png`"
        :alt="`${platform}`"
        :title="`${platform}`"
        class="object-cover rounded-full"
      />
    </div>
    <div class="px-2 py-1">
      <!-- Problem Title -->
      <h3 class="font-semibold mb-1">{{ problemTitle }}</h3>
      <!-- Tags -->
      <ul class="mb-1 p-0">
        <li
          class="px-3 py-[.125rem] inline-block rounded-full font-mono text-xs mr-1 border border-zinc-300 dark:border-zinc-600 bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300"
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </nuxt-link>
</template>

<script setup>
  const props = defineProps({
    problemTitle: String,
    url: String,
    tags: Array,
    problemUrl: String
  });

  const platform = computed(() => {
    let urlHostname = new URL(props.problemUrl).hostname.split(".");
    return urlHostname[urlHostname.length - 2].toLowerCase();
  });
</script>
