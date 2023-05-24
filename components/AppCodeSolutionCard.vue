<!-- Coding Solution Card -->
<template>
  <NuxtLink
    class="focused-link card-style w-full flex justify-start items-center px-4 py-3 mb-4 relative"
    :to="url"
    :title="problemTitle"
  >
    <!-- Platform Icon e.g. Leetcode -->
    <!-- <Icon
      :name="`simple-icons:${
        platform == 'binarysearch' ? 'leetcode' : platform
      }`"
      size="2.5rem"
    /> -->
    <div
      class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800 rounded-full p-1 mr-2 overflow-hidden"
    >
      <img
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
          class="px-2 py-[.1rem] inline-block rounded-full bg-green-300 font-medium font-mono text-slate-800 text-xs mr-1"
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
