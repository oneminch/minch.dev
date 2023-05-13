<!-- Article: Card -->
<template>
  <NuxtLink
    id="article-card"
    :style="{
      backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.5), rgba(17, 24, 39, 0.5)), linear-gradient(to bottom, transparent, rgb(17, 24, 39)), url(${imageUrl})`
    }"
    class="focused-link w-full h-48 relative border border-slate-300 dark:border-slate-700 bg-cover bg-center rounded-lg overflow-hidden p-4 flex flex-col justify-between last:[&>*]:mb-0 [&>*]:mb-2 mb-5 bg-no-repeat hover:scale-[1.025] duration-200 transition-all ease-linear"
    :to="url"
  >
    <!-- hover:-translate-y-1 transition-all duration-200 -->
    <!-- Article Tags -->
    <div>
      <span
        class="px-2 py-[.1rem] inline-block rounded-full bg-lime-300 font-semibold font-mono text-slate-800 text-xs mr-1"
        v-for="tag in tags"
        :key="tag"
        >{{ tag.toLowerCase() }}
      </span>
    </div>
    <!-- Article Title -->
    <h3 class="font-bold text-slate-50 mt-auto">{{ articleTitle }}</h3>
    <!-- Publish Date -->
    <p class="text-xs text-slate-400">
      <!-- {{ readTime }} &bull; -->
      {{ lastUpdateTime }}
    </p>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    desc: String,
    articleTitle: String,
    url: String,
    title: String,
    tags: Array,
    readTime: String,
    pubDate: Number
  });

  const imageUrl = `https://github.com/oneminch/garden/raw/main/Assets/Images/posts.${props.title.toLowerCase()}.header.png`;

  const lastUpdateTime = computed(() => {
    const dateObj = new Date(props.pubDate);
    // return `${} ${}, ${}`

    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  });
</script>
