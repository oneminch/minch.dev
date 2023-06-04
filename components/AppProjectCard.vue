<!-- Project: Card -->
<template>
  <NuxtLink
    to="https://deadlines.oneminch.dev/"
    target="_blank"
    class="card-style focused-link w-full min-h-[8rem] h-auto p-0 overflow-hidden flex justify-start first:[&>*]:mb-0 [&>*]:mb-2 mb-5 [&_img]:hover:scale-105"
  >
    <div
      v-if="!hideImage"
      class="w-0 lg:w-1/3 hidden lg:inline-block flex-shrink-0 min-h-full overflow-hidden mr-2 border-r border-slate-100"
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
      <p class="mb-4">
        Deadlines is a simple, offline deadline tracker made with Vue.js and
        localForage.
      </p>
      <!-- Project Tech Stack -->
      <div>
        <Icon
          name="logos:vue"
          size="1.5rem"
          class="mr-2 rounded-full inline-block"
        />
        <Icon
          name="logos:tailwindcs-icon"
          size="1.5rem"
          class="mr-2 rounded-full inline-block"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
  const imgUrl =
    "https://raw.githubusercontent.com/oneminch/deadlines/main/src/assets/screenshot.jpg";

  defineProps({
    projectTitle: {
      type: String,
      default: ""
    },
    hideImage: {
      type: Boolean,
      default: false
    }
  });
</script>
