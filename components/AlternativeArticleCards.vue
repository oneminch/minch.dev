<!-- <template>
  <div
    id="article-card"
    class="w-full mb-5 flex flex-col items-start overflow-hidden hover:-translate-y-1 transition-all duration-200 relative"
  >
    <NuxtLink :to="url" class="w-full focused-link">
      <div class="w-full">
        <img
          src="/cover-img.png"
          alt="Profile Picture"
          class="w-full h-24 md:h-32 rounded-lg object-cover"
        />
      </div>
      <div class="py-1 text-left">
        <p class="text-sm text-slate-600">Oct 21, 2023</p>
        <h3 class="font-bold">{{ articleTitle }}</h3>
        <div class="my-1">
          <span
            class="px-2 py-[.1rem] inline-block rounded-full bg-lime-300 font-semibold font-mono text-slate-800 text-xs mr-1"
            v-for="tag in tags"
            :key="tag"
            >{{ tag.toUpperCase() }}
          </span>
        </div>
      </div>
    </NuxtLink>    
  </div>
</template> -->

<template>
  <NuxtLink
    id="article-card"
    :style="{
      backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.5), rgba(17, 24, 39, 0.5)), linear-gradient(to bottom, transparent, rgb(17, 24, 39)), url(${imageUrl})`
    }"
    class="focused-link w-full h-48 relative border border-slate-300 dark:border-slate-700 bg-cover bg-center rounded-lg overflow-hidden p-4 flex flex-col justify-between last:[&>*]:mb-0 [&>*]:mb-2 mb-5 bg-no-repeat hover:scale-[1.025] duration-200 transition-all ease-linear"
    :to="url"
  >
    <!-- Article Tags -->
    <div>
      <span
        class="px-2 py-[.1rem] inline-block rounded-full bg-green-400 font-semibold font-mono text-slate-800 text-xs mr-1"
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
  const { share, isSupported } = useShare();

  function startShare(title, text, url) {
    share({
      title,
      text,
      url
    });
  }

  defineProps({
    articleTitle: {
      default: "",
      type: String
    },
    url: {
      default: "#",
      type: String
    },
    pubDate: {
      default: "#",
      type: String
    },
    readTime: {
      default: "#",
      type: String
    },
    tags: {
      default() {
        return [];
      },
      type: Array
    }
  });
</script>
