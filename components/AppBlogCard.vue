<!-- Blog: Card -->
<template>
  <NuxtLink
    id="blog-card"
    class="card-style focused-link w-full min-h-[8rem] h-auto p-0 overflow-hidden flex justify-start first:[&>*]:mb-0 [&>*]:mb-2 mb-5 [&_img]:hover:scale-105"
    :to="url"
  >
    <!-- Blog Image -->
    <div
      class="w-0 md:w-1/3 hidden md:inline-block flex-shrink-0 min-h-full overflow-hidden mr-2"
    >
      <img
        :src="imageUrl"
        alt="Cover Image"
        class="h-full object-cover bg-cover origin-center"
      />
    </div>
    <div
      class="flex flex-col justify-between py-4 px-6 flex-shrink-0 w-full md:w-2/3 min-h-full"
    >
      <!-- Publish Date + Read time -->
      <p class="text-sm text-slate-400">
        {{ lastUpdateTime }} {{ readTime ? `&bull; ${readTime}` : "" }}
      </p>
      <!-- Blog Title -->
      <h3 class="font-bold">{{ blogTitle }}</h3>
      <!-- Blog Tags -->
      <div class="my-1 mt-auto">
        <span
          class="px-2 py-[.1rem] inline-block rounded-full bg-green-300 font-semibold font-mono text-slate-800 text-xs mr-1"
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
    pubDate: Number
  });

  // console.log();
  // const readTime = "3 min";

  const imageUrl = computed(
    () =>
      `https://github.com/oneminch/garden/raw/main/Blog/Assets/${props.title.toLowerCase()}.cover.png`
  );

  const lastUpdateTime = computed(() => {
    const dateObj = new Date(props.pubDate);

    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  });
</script>
