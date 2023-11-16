<template>
  <!-- Sidebar -->
  <app-side-bar />

  <!-- Main Content -->
  <main
    id="main-content"
    class="main-error flex flex-col items-center justify-center"
  >
    <app-not-found />
  </main>

  <!-- Mobile Navigation -->
  <app-nav class="md:hidden flex after:shadow-2xl border border-green-400" />
</template>

<style scoped>
  #main-content.main-error {
    @apply h-full;
  }
</style>
