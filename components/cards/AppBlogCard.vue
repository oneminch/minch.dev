<script setup>
  const props = defineProps({
    description: String,
    blogTitle: String,
    url: String,
    title: String,
    tags: Array,
    readTime: String,
    pubDate: String,
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

<!-- Blog: Card -->
<template>
  <nuxt-link
    class="focus-visible:global-focus rounded-xl w-full p-0 overflow-hidden flex flex-col border-none bg-none bg-transparent dark:bg-transparent [&_img]:hover:scale-105"
    :to="url"
  >
    <!-- Blog Cover Image -->
    <div
      v-if="coverImage"
      class="flex items-center justify-center flex-shrink-0 w-full h-32 mr-1 overflow-hidden card-style rounded-xl"
    >
      <nuxt-img
        preload
        placeholder
        format="webp"
        height="325"
        :src="coverImage"
        :alt="`Cover Image for an Article Titled ${blogTitle}`"
        class="object-cover w-full h-auto text-center"
      />
    </div>
    <div class="flex flex-col justify-between flex-shrink-0 w-full p-2">
      <!-- Blog Tags -->
      <ul class="p-0 mb-2">
        <li
          class="px-2 py-[.125rem] inline-block rounded-full font-medium font-mono text-xs mr-1 bg-zinc-300/75 dark:bg-zinc-700/75 text-zinc-800 dark:text-zinc-100"
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>
      <!-- Blog Title -->
      <h3 class="font-bold">{{ blogTitle }}</h3>
      <!-- Publish Date -->
      <p class="text-xs text-zinc-400 mt-[.125rem]">
        Published {{ lastUpdateTime }}
      </p>
    </div>
  </nuxt-link>
</template>
