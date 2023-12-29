<script setup>
  definePageMeta({
    title: "Bookmarks",
    description: "Stuff from across the web that I found interesting."
  });

  const nuxtApp = useNuxtApp();

  const { pending, data: bookmarks } = await useLazyFetch("/api/bookmarks", {
    getCachedData(key) {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    }
  });
</script>

<template>
  <article>
    <h1 class="mb-4 text-2xl font-bold">Bookmarks</h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      Content from across the web I found interesting.
    </p>
    <template v-if="pending">
      <app-bookmark-skeleton
        v-for="skeleton in generateKeys(5)"
        :key="skeleton"
      />
    </template>
    <template v-else>
      <app-bookmark-card
        v-for="bookmark in bookmarks"
        :key="bookmark.link"
        :bookmark="bookmark"
      />
    </template>
  </article>
</template>
