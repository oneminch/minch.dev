<template>
  <main class="picks">
    <h1 class="font-bold text-2xl mb-6">Picks</h1>
    <p>
      <blockquote>
        Content from across the web I found interesting.
      </blockquote>
    </p>
    <p v-if="pending">Loading...</p>
    <br>
    <template v-for="(pick, index) in picks" :key="index">
      <NuxtLink
        class="focused-link card-style w-full flex justify-start items-center md:px-4 px-2 py-2 mb-4 relative"
        target="_blank"
        :to="pick.link"
      >
        <img
          :src="pick.cover"
          class="w-8 h-8 md:w-12 md:10 flex-shrink-0 object-cover rounded-md mr-3 overflow-hidden"
          alt="Link Cover Image"
        />
        <span>{{ pick.title }}</span>
        <Icon name="heroicons:arrow-up-right-20-solid" size="1.25rem" class="ml-auto flex-shrink-0 text-green-500 bg-slate-100 dark:bg-slate-600 rounded-full p-1 w-7 h-7" />
      </NuxtLink>
    </template>
  </main>
</template>

<script setup>
  const { pending, data: picks } = reactive(await useFetch("/api/picks"));

  if (pending) console.log("pending");
</script>
