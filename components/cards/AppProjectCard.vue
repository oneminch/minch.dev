<!-- Project: Card -->
<template>
  <nuxt-link
    :to="projectUrl"
    target="_blank"
    :class="[
      'focused-link rounded-xl w-full relative flex flex-col justify-center items-center transition-all duration-200 overflow-hidden box-border border border-zinc-200 dark:border-zinc-800',
      !hideImage
        ? `h-auto min-h-[14rem] bg-no-repeat bg-clip-content bg-[length:auto_100%] hover:bg-[length:auto_105%] bg-center`
        : 'h-44'
    ]"
    :style="{ backgroundImage: `url(${imgUrl})` }"
  >
    <div
      :class="[
        'flex flex-col items-start box-border rounded-xl absolute inset-[-.25rem] flex-shrink-0 p-6 overflow-hidden transition-colors duration-150',
        !hideImage
          ? 'justify-end bg-gradient-to-b from-white/30 via-white/90 to-white/100 text-zinc-800 dark:from-black/40 dark:via-black/80 dark:to-black/100 dark:text-zinc-100'
          : 'justify-start bg-zinc-200/75 dark:bg-zinc-800 hover:bg-zinc-300/75 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-100'
      ]"
    >
      <h3 class="font-bold mb-2">{{ projectTitle }}</h3>
      <p class="mb-3">{{ projectDescription }}</p>
      <ul class="p-0" :class="[{ 'mt-auto': hideImage }]">
        <li
          class="px-3 py-[.125rem] inline-block rounded-full font-mono text-xs mr-1 bg-zinc-300/75 dark:bg-zinc-700/75 text-zinc-800 dark:text-zinc-100"
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>
      <Icon
        name="heroicons:arrow-up-right-20-solid"
        size="1rem"
        class="ml-auto absolute right-2 top-2 bg-green-500 text-zinc-600 rounded-full p-1 w-6 h-6"
      />
    </div>
  </nuxt-link>
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
