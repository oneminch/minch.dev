<!-- Project: Card -->
<template>
  <NuxtLink
    :to="projectUrl"
    target="_blank"
    :class="[
      'focused-link border-[.75px] rounded-lg relative w-full flex flex-col justify-center items-center bg-cover origin-center bg-center transition-all duration-200 hover:-translate-y-1 overflow-hidden',
      !hideImage
        ? `bg-[url(${imgUrl})] h-56 border-gray-50 dark:border-green-300`
        : 'h-44 border-gray-300 dark:border-gray-600'
    ]"
    :style="{ backgroundImage: `url(${imgUrl})` }"
  >
    <div
      :class="[
        'h-full flex flex-col items-start w-full flex-shrink-0 p-4 overflow-hidden',
        !hideImage
          ? 'justify-end bg-gradient-to-b from-black/25 via-black/75 to-black/100 text-gray-100'
          : 'justify-start bg-gray-200/75 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
      ]"
    >
      <h3 class="font-bold mb-2">{{ projectTitle }}</h3>
      <p class="mb-3">{{ projectDescription }}</p>
      <ul class="p-0" :class="[{ 'mt-auto': hideImage }]">
        <li
          class="px-3 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border-[.5px] border-gray-500 bg-gray-600 text-gray-100"
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>
      <Icon
        name="heroicons:arrow-up-right-20-solid"
        size="1.25rem"
        class="ml-auto absolute right-2 top-2 bg-green-500 text-gray-600 rounded-full p-1 w-8 h-8"
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
