<template>
  <main class="picks">
    <h1 class="font-bold text-2xl mb-6">Picks</h1>
    <p>
      <blockquote>
        Content from across the web I found interesting.
      </blockquote>
    </p>
    <br>
    <template v-if="pending">
      <AppPickSkeleton v-for="i in 5" :key="i" />
    </template>
    <template v-else>
      <AppPickCard
        v-for="pick in picks"
        :key="pick.link"
        :pick="pick"
      />
    </template>
    
  </main>
</template>

<script setup>
import AppPickCard from '../components/cards/AppPickCard.vue';

  const { pending, data: picks } = await useLazyFetch("/api/picks");
</script>
