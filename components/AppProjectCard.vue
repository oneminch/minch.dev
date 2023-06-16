<!-- Project: Card -->
<template>
  <NuxtLink
    to="https://deadlines.oneminch.dev/"
    target="_blank"
    class="card-style focused-link w-full min-h-[8rem] h-auto p-0 overflow-hidden flex justify-start first:[&>*]:mb-0 [&>*]:mb-2 mb-5 [&_img]:hover:scale-105"
  >
    <div
      v-if="!hideImage"
      class="w-0 lg:w-1/3 hidden lg:inline-block flex-shrink-0 min-h-full overflow-hidden mr-2 border-r border-slate-200"
    >
      <img
        :src="imgUrl"
        alt="Cover Image"
        class="h-full object-cover bg-cover origin-center"
      />
    </div>
    <div
      class="flex flex-col justify-between py-4 px-6 flex-shrink-0 w-full"
      :class="{
        'lg:w-full': hideImage,
        'lg:w-2/3': !hideImage
      }"
    >
      <!-- Project Title -->
      <h3 class="font-bold mb-2">{{ projectTitle }}</h3>
      <!-- Project Description -->
      <p class="mb-4">{{ projectDescription }}</p>
      <!-- Project Tech Stack -->
      <div>
        <!-- <Icon
          name="logos:vue"
          size="1.5rem"
          class="mr-2 rounded-sm inline-block"
        />
        <Icon
          name="logos:tailwindcss-icon"
          size="1.5rem"
          class="mr-2 rounded-sm inline-block"
        /> -->
        <span
          class="text-xs py-1 px-3 border border-slate-300 bg-slate-200 dark:border-slate-500 dark:bg-slate-600 rounded-full mr-2"
          v-for="(tag, index) in tags"
          :key="index"
          >{{ tag }}</span
        >
      </div>
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
