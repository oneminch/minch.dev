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
    class="flex items-center justify-center bg-green-600 h-8 absolute top-0 left-1/2 -translate-x-1/2 py-2 px-4 rounded-md mx-auto z-50 transform duration-300 -translate-y-[125%] opacity-0 focus-visible:translate-y-2 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-opacity-50 text-zinc-100"
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
    class="flex ring-1 ring-inset ring-green-500 md:hidden after:shadow-2xl"
  />
</template>

<style>
  @tailwind utilities;

  @layer utilities {
    /* Uniform Card Style */
    .card-style {
      @apply border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-700/50 bg-white;
    }

    .global-focus {
      @apply outline-none ring-2 ring-offset-0 ring-green-400 ring-opacity-75;
    }

    .icon-link {
      @apply w-8 h-8 flex items-center justify-center mx-1 rounded-full;
      @apply [&>svg]:w-5 [&>svg]:h-5;
    }
  }

  * {
    transition: all 250ms, color, background-color, border-color,
      text-decoration-color, fill, stroke 100ms;
  }

  html {
    @apply m-0 p-0;
    font-family: "Space Grotesk", sans-serif;
  }

  body {
    @apply w-full min-w-[20rem] md:min-h-screen px-5 md:px-4 pt-4 pb-6 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-900 md:dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 flex items-start flex-col md:flex-row md:overflow-y-auto;
  }

  main {
    @apply w-full rounded-xl pt-6 md:px-10 py-4 pb-12 bg-transparent md:bg-zinc-50 md:dark:bg-zinc-900/40 font-normal overflow-x-visible -z-0;
  }

  span.highlight,
  span.subtle-highlight {
    @apply relative text-zinc-700 dark:text-zinc-200 font-medium;
  }

  span.highlight::after {
    @apply w-full h-px content-[''] rounded absolute -bottom-[1.5px] -left-0 -right-0 bg-gradient-to-r from-green-400 to-lime-400 -z-10 transition-all duration-150 opacity-75 hover:opacity-100;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 150ms;
  }
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(1%);
  }
</style>
