<template>
  <main class="mx-1 w-full">
    <h1 class="font-bold text-2xl mb-6">Picks</h1>
    <template v-for="(pick, index) in picks" :key="index">
      <a
        class="w-full flex justify-start items-center px-4 py-2 mb-4 rounded-md before:custom-border-gradient before:opacity-50 dark:before:opacity-[.35]"
        :href="pick.link"
      >
        <img
          :src="pick.cover"
          class="w-12 h-10 object-cover rounded-md mr-3 overflow-hidden"
          alt="Link Cover Image"
        />
        <!-- <img v-else src="" alt="" /> -->
        <span>{{ pick.title }}</span>
        <Icon name="octicon:arrow-up-right-16" class="ml-auto" />
      </a>
    </template>
  </main>
</template>

<script setup>
  const { data: picks } = reactive(await useFetch("/api/picks"));

  // const picks = ref([]);
  // watch(data, (newData) => {
  //   data = newData;
  // });
  // console.log(picks);
  // console.log(JSON.parse(JSON.stringify(data.value)));
</script>

<style scoped>
  a {
    @apply bg-white dark:bg-gray-800 relative rounded-lg;
  }
</style>
