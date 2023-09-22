<template>
  <!-- Sidebar -->
  <AppSideBar />

  <!-- Main Content -->
  <main
    id="main-content"
    class="main-error flex flex-col items-center justify-center"
  >
    <AppNotFound />
  </main>

  <!-- Mobile Navigation -->
  <AppNav class="md:hidden flex after:shadow-2xl border border-green-400" />
</template>

<style scoped>
  #main-content.main-error {
    @apply h-full;
  }
</style>
