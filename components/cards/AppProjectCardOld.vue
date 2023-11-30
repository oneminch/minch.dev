<!-- Project: Card -->
<template>
  <nuxt-link
    :to="projectUrl"
    target="_blank"
    :class="[
      'focused-link rounded-xl w-full relative flex flex-col justify-center items-center transition-all duration-200 overflow-hidden border border-zinc-200 dark:border-zinc-800',
      !hideImage
        ? `min-h-[14rem] bg-zinc-200 dark:bg-zinc-600 bg-no-repeat bg-clip-content bg-cover bg-center group/hover-effect`
        : 'min-h-[12rem] md:min-h-[13rem]'
    ]"
    :style="{ backgroundImage: `url(${imgUrl})` }"
  >
    <div
      :class="[
        'flex flex-col items-start rounded-2xl absolute inset-[-.25rem] flex-shrink-0 p-6 overflow-hidden transition-colors duration-150 [&>*]:flex-shrink-0',
        !hideImage
          ? 'justify-end bg-gradient-to-b from-white/30 via-white/90 to-white/100 text-zinc-800 dark:from-black/40 dark:via-black/80 dark:to-black/100 dark:text-zinc-100 group-hover/hover-effect:ring-inset group-hover/hover-effect:ring-1 group-hover/hover-effect:ring-offset-4 group-hover/hover-effect:ring-green-400 group-hover/hover-effect:ring-opacity-75 group-hover/hover-effect:ring-offset-transparent'
          : 'justify-start bg-zinc-200/75 dark:bg-zinc-800 hover:bg-zinc-300/75 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-100 group'
      ]"
    >
      <h3 class="mb-2 font-bold">{{ projectTitle }}</h3>
      <p class="mb-3">{{ projectDescription }}</p>
      <ul class="p-0" :class="[{ 'mt-auto': hideImage }]">
        <li
          class="px-3 py-[.125rem] inline-block rounded-full font-mono text-xs mr-1 bg-zinc-300/75 dark:bg-zinc-700/75 text-zinc-800 dark:text-zinc-100 transition-colors duration-150 group-hover:bg-zinc-200/75 group-hover:dark:bg-zinc-600/75"
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>
      <Icon
        name="heroicons:arrow-up-right-20-solid"
        size="1rem"
        aria-label="Opens in a new tab"
        class="absolute w-6 h-6 p-1 ml-auto bg-green-500 rounded-full right-2 top-2 text-zinc-600"
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
