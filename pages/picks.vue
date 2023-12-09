<script setup>
  definePageMeta({
    title: "Picks",
    description: "Content from across the web that I found interesting."
  });

  const nuxtApp = useNuxtApp();

  const { pending, data: picks } = await useLazyFetch("/api/picks", {
    getCachedData(key) {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    }
  });
</script>

<template>
  <article>
    <h1 class="mb-4 text-2xl font-bold">Picks</h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      Content from across the web I found interesting.
    </p>
    <template v-if="pending">
      <app-pick-skeleton v-for="skeleton in generateKeys(5)" :key="skeleton" />
    </template>
    <template v-else>
      <app-pick-card v-for="pick in picks" :key="pick.link" :pick="pick" />
    </template>
  </article>
</template>
