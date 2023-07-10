<template>
  <main>
    <h1 class="font-bold text-2xl mb-6">Meta</h1>

    <!-- Tech Stack -->
    <h2 class="font-bold text-xl mb-2">Tech Stack</h2>
    <section class="w-full h-auto flex justify-between mb-4">
      <div class="card-style w-[30%] h-28"></div>
      <div class="card-style w-[30%] h-28"></div>
      <div class="card-style w-[30%] h-28"></div>
    </section>

    <!-- Lighthouse -->
    <h2 class="font-bold text-xl mb-2">Lighthouse</h2>
    <section
      class="card-style w-full h-auto flex justify-evenly px-2 py-4 mb-4"
    >
      <div class="bg-slate-900 rounded-full w-14 h-14"></div>
      <div class="bg-slate-900 rounded-full w-14 h-14"></div>
      <div class="bg-slate-900 rounded-full w-14 h-14"></div>
      <div class="bg-slate-900 rounded-full w-14 h-14"></div>
    </section>

    <!-- Carbon  -->
    <h2 class="font-bold text-xl mb-2">Carbon Footprint</h2>
    <section></section>
  </main>
</template>

<script setup>
  definePageMeta({
    altTitle: "Meta"
  });
</script>
