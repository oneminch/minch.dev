<!-- Coding Solution Card -->
<template>
  <NuxtLink
    class="focused-link card-style w-full flex justify-start items-center px-4 py-3 mb-4 relative"
    :to="url"
    :title="problemTitle"
  >
    <!-- Platform Icon e.g. Leetcode -->
    <Icon
      :name="`simple-icons:${platform.toLowerCase()}`"
      size="2.5rem"
      class="flex-shrink-0 bg-gray-200 dark:bg-gray-800 rounded-full p-2 mr-2"
    />
    <div class="px-2 py-1">
      <!-- Problem Title -->
      <h3 class="font-semibold mb-1">{{ title }}</h3>
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
  const title = "Two Sum";
  const url = "http://leetcode.com/";
  const tags = ["Python", "Array", "String"];
  const platform = "Leetcode";

  const props = defineProps({
    problemTitle: String,
    url: String,
    platform: String,
    tags: Array
  });
</script>
