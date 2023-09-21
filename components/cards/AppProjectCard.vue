<!-- Project: Card -->
<template>
  <NuxtLink
    :to="projectUrl"
    target="_blank"
    :class="[
      'focused-link rounded-xl relative w-full flex flex-col justify-center items-center transition-all duration-200 hover:-translate-y-1 overflow-hidden ring-1 ring-zinc-300 dark:ring-zinc-700',
      !hideImage
        ? `bg-[url(${imgUrl})] h-auto min-h-[14rem] bg-cover bg-top bg-clip-content bg-origin-content bg-no-repeat`
        : 'h-44'
    ]"
    :style="{ backgroundImage: `url(${imgUrl})` }"
  >
    <div
      :class="[
        'h-full flex flex-col items-start w-full flex-shrink-0 p-4 overflow-hidden',
        !hideImage
          ? 'justify-end bg-gradient-to-b from-white/30 via-white/90 to-white/100 text-zinc-800 dark:from-black/25 dark:via-black/80 dark:to-black/100 dark:text-zinc-100'
          : 'justify-start bg-zinc-200/75 dark:bg-zinc-700/50 text-zinc-800 dark:text-zinc-100'
      ]"
    >
      <h3 class="font-bold mb-2">{{ projectTitle }}</h3>
      <p class="mb-3">{{ projectDescription }}</p>
      <ul class="p-0" :class="[{ 'mt-auto': hideImage }]">
        <li
          class="px-3 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border-[.5px] border-zinc-500 bg-zinc-600 text-zinc-100"
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>
      <Icon
        name="heroicons:arrow-up-right-20-solid"
        size="1.25rem"
        class="ml-auto absolute right-2 top-2 bg-green-500 text-zinc-600 rounded-full p-1 w-8 h-8"
        :class="[{ 'w-6 h-6': hideImage }]"
      />
    </div>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    projectTitle: {
      type: String,
      default: ""
    },
    projectDescription: {
      type: String,
      default: ""
    },
    projectUrl: {
      type: String,
      default: "#"
    },
    imgUrl: {
      type: String,
      default: ""
    },
    tags: {
      type: Array,
      default: () => []
    }
  });

  const hideImage = computed(() => props.imgUrl.length === 0);
</script>
