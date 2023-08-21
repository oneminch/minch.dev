<!-- Project: Card -->
<template>
  <NuxtLink
    :to="projectUrl"
    target="_blank"
    class="focused-link border border-transparent dark:border-green-500 rounded-lg relative w-full h-56 flex flex-col bg-cover origin-center bg-center transition-all duration-200 hover:-translate-y-1 overflow-hidden"
    :class="bgUrl"
  >
    <div
      class="min-h-full flex flex-col items-start justify-end w-full flex-shrink-0 p-4 overflow-hidden mr-1 bg-gradient-to-b from-black/25 to-black/100 text-gray-100"
    >
      <h3 class="font-bold mb-2">{{ projectTitle }}</h3>
      <p class="mb-3">{{ projectDescription }}</p>
      <ul class="p-0">
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
  const bgUrl = computed(() => hideImage && `bg-[url('${props.imgUrl}')]`);
</script>
