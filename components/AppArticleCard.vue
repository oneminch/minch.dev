<!-- Article: Card -->
<template>
  <NuxtLink
    id="article-card"
    :style="{
      backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.5), rgba(17, 24, 39, 0.5)), linear-gradient(to bottom, transparent, rgb(17, 24, 39)), url(${imageUrl})`,
      transform: cardTransform,
      transition: 'transform 200ms linear'
    }"
    class="w-full h-48 relative border border-gray-300 dark:border-gray-700 bg-cover bg-center rounded-lg overflow-hidden p-4 flex flex-col justify-between last:[&>*]:mb-0 [&>*]:mb-2 mb-5 bg-no-repeat"
    :to="url"
    ref="articleCard"
  >
    <!-- hover:-translate-y-1 transition-all duration-200 -->
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
    <p class="text-xs text-gray-400">
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

  const articleCard = ref(null);
  const { elementWidth, elementHeight, isOutside, elementX, elementY } =
    useMouseInElement(articleCard);

  const cardTransform = computed(() => {
    const MAX_ROTATION = 4;
    const degX = (
      MAX_ROTATION / 2 -
      (elementY.value / elementHeight.value) * MAX_ROTATION
    ).toFixed(2);
    const degY = (
      (elementX.value / elementWidth.value) * MAX_ROTATION -
      MAX_ROTATION / 2
    ).toFixed(2);
    return isOutside.value
      ? ""
      : `perspective(${elementWidth.value}px) rotateX(${degX}deg) rotateY(${degY}deg)`;
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
