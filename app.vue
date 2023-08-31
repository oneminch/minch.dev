<template>
  <!-- Sidebar -->
  <AppSideBar />

  <!-- Main Content -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!-- Mobile Navigation -->
  <AppNav
    class="md:hidden flex after:shadow-2xl border-[1.5px] border-green-400"
  />
</template>

<style>
  @tailwind utilities;

  @layer utilities {
    /* Uniform Card Style */
    .card-style {
      @apply border-[0.75px] border-zinc-300 dark:border-zinc-700 dark:bg-zinc-700/50 bg-white;
    }

    .focused-link {
      @apply focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-300 focus:ring-opacity-75;
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
    font-family: "Inter", sans-serif;
  }

  body {
    @apply w-full md:min-h-screen px-5 md:px-4 pt-4 pb-6 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 flex items-start flex-col md:flex-row md:overflow-y-auto;
  }

  main {
    @apply w-full rounded-lg pt-6 md:px-10 py-4 pb-8 bg-transparent md:bg-zinc-50 md:dark:bg-zinc-900 font-normal overflow-x-hidden -z-0;
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
