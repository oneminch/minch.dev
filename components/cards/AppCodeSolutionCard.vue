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

<!-- Coding Solution: Card -->
<template>
  <nuxt-link
    class="relative flex items-center justify-start w-full px-4 py-2 transition-colors duration-150 focus-visible:global-focus card-style rounded-xl hover:bg-green-50/25 dark:hover:bg-zinc-700/75"
    :to="url"
    :title="problemTitle"
  >
    <div
      class="flex items-center justify-center flex-shrink-0 w-10 h-10 p-1 mr-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-900"
    >
      <nuxt-img
        preload
        placeholder
        format="webp"
        loading="lazy"
        width="40"
        height="40"
        :src="`/icons/${platform}.png`"
        :alt="`${platform}`"
        :title="`${platform}`"
        class="object-cover text-center rounded-full"
      />
    </div>
    <div class="px-2 py-1">
      <!-- Problem Title -->
      <h3 class="mb-1 font-semibold">{{ problemTitle }}</h3>
      <!-- Tags -->
      <ul class="p-0 mb-1">
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
