<!-- Project: Card -->
<template>
  <NuxtLink
    :to="projectUrl"
    target="_blank"
    class="card-style focused-link w-full min-h-[7rem] md:min-h-[8rem] h-auto p-0 overflow-hidden flex justify-between border-none mb-5 [&_img]:hover:scale-105"
  >
    <div
      v-if="!hideImage"
      class="card-style w-0 lg:w-1/3 hidden lg:inline-block flex-shrink-0 min-h-full overflow-hidden mr-1 rounded-lg"
    >
      <nuxt-img
        format="webp"
        loading="lazy"
        :src="imgUrl"
        alt="Cover Image"
        class="h-full object-cover bg-cover origin-center"
      />
    </div>
    <div
      class="card-style relative flex flex-col justify-evenly py-2 pb-3 px-4 flex-shrink-0 w-full overflow-hidden"
      :class="{
        'lg:w-full': hideImage,
        'lg:w-[calc(66%-.25rem)]': !hideImage
      }"
    >
      <!-- Project Title -->
      <h3 class="font-bold mb-2">{{ projectTitle }}</h3>
      <!-- Project Description -->
      <p class="mb-4">{{ projectDescription }}</p>
      <!-- Project Tech Stack -->
      <div>
        <span
          class="px-3 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border border-slate-300 dark:border-slate-500 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-100"
          v-for="(tag, index) in tags"
          :key="index"
          >{{ tag }}</span
        >
      </div>
      <Icon
        name="heroicons:arrow-up-right-20-solid"
        size="1.25rem"
        class="ml-auto absolute right-0 top-0 text-green-500 bg-slate-100 dark:bg-slate-600 border-l border-b border-slate-300 dark:border-slate-700 rounded-bl-lg p-1 w-7 h-7"
      />
    </div>
  </NuxtLink>
</template>

<script setup>
  defineProps({
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
      default: "https://fakeimg.pl/500x300"
    },
    hideImage: {
      type: Boolean,
      default: false
    },
    tags: {
      type: Array,
      default: () => []
    }
  });
</script>

<style scoped>
  a {
    background: transparent !important;
  }
</style>
