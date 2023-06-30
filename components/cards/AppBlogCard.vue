<!-- Blog: Card -->
<template>
  <NuxtLink
    class="card-style focused-link w-full min-h-[7rem] md:min-h-[8rem] h-auto p-0 overflow-hidden flex justify-start mb-5 [&_img]:hover:scale-105"
    :to="url"
  >
    <!-- Blog Image -->
    <div
      v-if="coverImage"
      class="w-0 md:w-1/3 hidden md:inline-block flex-shrink-0 min-h-full overflow-hidden mr-2"
    >
      <img
        :src="coverImageUrl(coverImage)"
        alt="Cover Image"
        class="h-full object-cover bg-cover origin-center"
      />
    </div>
    <div
      class="flex flex-col justify-between py-2 px-4 flex-shrink-0 w-full md:w-2/3 min-h-full"
    >
      <!-- Blog Title -->
      <h3 class="font-bold">{{ blogTitle }}</h3>
      <!-- Publish Date + Read time -->
      <p class="text-xs text-slate-400 mt-[2px]">
        Updated {{ lastUpdateTime }}
        {{ readTime ? `&bull; ${readTime}` : "" }}
      </p>
      <!-- Blog Tags -->
      <div class="my-1 mt-auto">
        <span
          class="px-2 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border border-slate-300 dark:border-slate-500 bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-100"
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
    desc: String,
    blogTitle: String,
    url: String,
    title: String,
    tags: Array,
    readTime: String,
    pubDate: Number,
    coverImage: String
  });

  // console.log();
  // const readTime = "3 min";

  const coverImagePrefix =
    "https://cdn.statically.io/gh/oneminch/garden/main/Blog/notes/assets/cover";

  const coverImageUrl = (fileSlug) => `${coverImagePrefix}/${fileSlug}`;

  const lastUpdateTime = computed(() => {
    const dateObj = new Date(props.pubDate);

    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  });
</script>
