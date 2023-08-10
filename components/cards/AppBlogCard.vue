<!-- Blog: Card -->
<template>
  <NuxtLink
    class="focused-link rounded-lg w-full p-0 overflow-hidden flex flex-col border-none bg-none bg-transparent dark:bg-transparent mb-5 [&_img]:hover:scale-105"
    :to="url"
  >
    <!-- Blog Image -->
    <div
      v-if="coverImage"
      class="card-style flex items-center justify-center w-full max-h-32 flex-shrink-0 overflow-hidden mr-1 rounded-lg"
    >
      <nuxt-img
        format="webp"
        loading="lazy"
        :src="coverImage"
        alt="Cover Image"
        class="h-auto object-cover bg-cover origin-center bg-center"
      />
    </div>
    <div class="flex flex-col justify-between p-2 flex-shrink-0 w-full">
      <!-- Blog Tags -->
      <ul class="mb-2 p-0">
        <li
          class="px-2 py-[.1rem] inline-block rounded-full font-medium font-mono text-xs mr-1 border-[.5px] border-gray-300 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100"
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>
      <!-- Blog Title -->
      <h3 class="font-bold">{{ blogTitle }}</h3>
      <!-- Publish Date + Read time -->
      <p class="text-xs text-gray-400 mt-[2px]">
        Updated {{ lastUpdateTime }}
        {{ readTime ? `&bull; ${readTime}` : "" }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    description: String,
    blogTitle: String,
    url: String,
    title: String,
    tags: Array,
    readTime: String,
    pubDate: Number,
    coverImage: String
  });

  const lastUpdateTime = computed(() => {
    const dateObj = new Date(props.pubDate);

    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  });
</script>
