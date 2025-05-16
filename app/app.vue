<script setup>
  import "@fontsource/roboto-mono/400.css";
  import "@fontsource/roboto-mono/500.css";
  import "@fontsource/roboto-mono/600.css";
  import "@fontsource/roboto-mono/700.css";
  import "@fontsource/space-grotesk/400.css";
  import "@fontsource/space-grotesk/500.css";
  import "@fontsource/space-grotesk/600.css";
  import "@fontsource/space-grotesk/700.css";
</script>

<template>
  <!-- Skip Navigation Link -->
  <a
    href="#main-content"
    class="flex items-center justify-center bg-green-600 h-8 absolute top-0 left-1/2 -translate-x-1/2 py-2 px-4 rounded-md mx-auto z-50 transform duration-300 -translate-y-[125%] opacity-0 focus-visible:translate-y-2 focus-visible:opacity-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green-500/50 text-zinc-100"
    >Skip to Main Content</a
  >

  <!-- Sidebar -->
  <app-side-bar />

  <!-- Main Content -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!-- Mobile Navigation -->
  <app-nav
    class="flex ring-1 ring-inset ring-green-500 md:hidden after:shadow-2xl" />
</template>
