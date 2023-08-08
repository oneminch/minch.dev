<!-- Project: Card -->
<template>
  <NuxtLink
    :to="projectUrl"
    target="_blank"
    class="focused-link rounded-lg relative w-full p-0 overflow-hidden flex flex-col border-none mb-5 [&_img]:hover:scale-105"
  >
    <div
      v-if="!hideImage"
      class="card-style flex items-center justify-center w-full max-h-32 flex-shrink-0 overflow-hidden mr-1 rounded-lg"
    >
      <nuxt-img
        format="webp"
        loading="lazy"
        :src="imgUrl"
        alt="Project Image"
        class="h-auto object-cover bg-cover origin-center bg-center"
      />
    </div>
    <div
      class="flex flex-col justify-evenly p-2 pb-3 flex-shrink-0 w-full overflow-hidden"
      :class="{ 'card-style px-4': hideImage }"
    >
      <!-- Project Title -->
      <h3 class="font-bold mb-2">
        {{ projectTitle }}
      </h3>
      <!-- Project Description -->
      <p class="mb-3">{{ projectDescription }}</p>
      <!-- Project Tech Stack -->
      <ul>
        <li
          class="px-3 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border-[.5px] border-gray-300 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100"
          v-for="(tag, index) in tags"
          :key="index"
        >
          {{ tag }}
        </li>
      </ul>
      <Icon
        name="heroicons:arrow-up-right-20-solid"
        size="1.25rem"
        class="ml-auto absolute right-2 top-2 text-green-500 bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-700 rounded-full p-1 w-7 h-7"
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
