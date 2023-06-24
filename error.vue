<template>
  <!-- Sidebar -->
  <AppSideBar />

  <!-- Main Content -->
  <main
    id="error"
    class="flex flex-col items-center justify-center bg-slate-50"
  >
    <Icon
      name="heroicons:exclamation-triangle-solid"
      size="8rem"
      class="mb-8"
    />
    <h1 class="font-semibold text-center text-xl sm:text-2xl mb-6">
      This page doesn't exist.
    </h1>
  </main>

  <!-- Mobile Navigation -->
  <AppNav class="md:hidden flex after:shadow-2xl border border-green-400" />
</template>

<style scoped>
  #error {
    @apply h-full;
  }
</style>
