<!-- Coding Solution Card -->
<template>
  <NuxtLink
    class="focused-link card-style w-full flex justify-start items-center px-4 py-3 mb-4 relative"
    :to="url"
    :title="problemTitle"
  >
    <div
      class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800 rounded-full p-1 mr-2 overflow-hidden"
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
      <div class="mb-1">
        <span
          class="px-3 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border border-slate-300 dark:border-slate-500 bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-100"
          v-for="tag in tags"
          :key="tag"
          >{{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
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
