<!-- Article: Card -->
<template>
  <a
    id="article-card"
    :style="`background-image: linear-gradient(to bottom, rgba(17, 24, 39, 0.5), rgba(17, 24, 39, 0.5)), linear-gradient(to bottom, transparent, rgb(17, 24, 39)), url(${imageUrl});`"
    class="w-full h-48 relative border border-gray-300 dark:border-gray-700 bg-cover bg-center rounded-lg overflow-hidden p-4 flex flex-col justify-between last:[&>*]:mb-0 [&>*]:mb-2 mb-5 bg-no-repeat hover:-translate-y-1 transition-all duration-200"
    :href="url"
  >
    <!-- Article Tags -->
    <div>
      <span
        class="px-2 py-[.1rem] inline-block rounded-full bg-[#c0eb75] font-semibold font-mono text-gray-800 text-xs mr-1"
        v-for="tag in tags"
        :key="tag"
        >{{ tag.toLowerCase() }}
      </span>
    </div>
    <!-- Article Title -->
    <h3 class="font-bold text-gray-50 mt-auto">{{ articleTitle }}</h3>
    <!-- Publish Date -->
    <p class="text-sm text-gray-400">{{ readTime }} &bull; {{ pubDate }}</p>
  </a>
</template>

<script setup>
  defineProps({
    desc: {
      default: "",
      type: String
    },
    articleTitle: {
      default: "",
      type: String
    },
    url: {
      default: "#",
      type: String
    },
    imageUrl: {
      default: "",
      type: String
    },
    tags: {
      default() {
        return [];
      },
      type: Array
    },
    readTime: {
      default: "",
      type: String
    },
    pubDate: {
      default: "",
      type: String
    }
  });
</script>
