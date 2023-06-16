<script setup>
  const props = defineProps({
    imageSrc: {
      type: String,
      default: ""
    },
    altText: {
      type: String,
      default: ""
    },
    isCoverImage: {
      type: Boolean,
      default: false
    }
  });

  // Remote image location directory URL
  const urlPrefix =
    "https://cdn.statically.io/gh/oneminch/garden/main/Blog/notes/assets";

  // For cover images, navigate further to cover/
  const extraPath = computed(() => {
    return props.isCoverImage ? "/cover/" : "/";
  });
</script>

<template>
  <img
    :src="`${urlPrefix}${extraPath}${imageSrc}`"
    :alt="altText"
    class="border border-slate-300 dark:border-slate-600"
  />
</template>
