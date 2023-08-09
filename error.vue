<template>
  <!-- Sidebar -->
  <AppSideBar />

  <!-- Main Content -->
  <main id="error" class="flex flex-col items-center justify-center">
    <AppNotFound />
  </main>

  <!-- Mobile Navigation -->
  <AppNav class="md:hidden flex after:shadow-2xl border-[0.5px] border-green-400" />
</template>

<style scoped>
  #error {
    @apply h-full;
  }
</style>
