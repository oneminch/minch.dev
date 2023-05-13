<template>
  <main class="">
    <h1 class="font-bold text-2xl mb-6">Picks</h1>
    <template v-for="(pick, index) in picks" :key="index">
      <NuxtLink
        class="custom-border-gradient w-full flex justify-start items-center px-4 py-2 mb-4 rounded-md"
        :to="pick.link"
      >
        <img
          :src="pick.cover"
          class="w-12 h-10 flex-shrink-0 object-cover rounded-md mr-3 overflow-hidden"
          alt="Link Cover Image"
        />
        <!-- <img v-else src="" alt="" /> -->
        <span>{{ pick.title }}</span>
        <Icon name="octicon:arrow-up-right-16" class="ml-auto flex-shrink-0" />
      </NuxtLink>
    </template>
  </main>
</template>

<script setup>
  const { data: picks } = reactive(await useFetch("/api/picks"));
</script>

<style scoped>
  a {
    @apply bg-white dark:bg-slate-800 relative rounded-lg;
  }
</style>
