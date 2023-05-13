<template>
  <main class="picks">
    <h1 class="font-bold text-2xl mb-6">Picks</h1>
    <p>
      <blockquote>
        Content from across the web I found interesting.
      </blockquote>
    </p>
    <br>
    <template v-for="(pick, index) in picks" :key="index">
      <NuxtLink
        class="focused-link card-style w-full flex justify-start items-center px-4 py-2 mb-4 relative"
        :to="pick.link"
      >
        <img
          :src="pick.cover"
          class="w-12 h-10 flex-shrink-0 object-cover rounded-md mr-3 overflow-hidden"
          alt="Link Cover Image"
        />
        <span>{{ pick.title }}</span>
        <Icon name="octicon:arrow-up-right-16" size="1.25rem" class="ml-auto flex-shrink-0 text-green-500 bg-slate-100 dark:bg-slate-600 rounded-full p-1 w-7 h-7" />
      </NuxtLink>
    </template>
  </main>
</template>

<script setup>
  const { data: picks } = reactive(await useFetch("/api/picks"));
</script>

<style scoped></style>
