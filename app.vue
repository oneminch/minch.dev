<template>
  <!-- Skip Navigation Link -->
  <a
    href="#main-content"
    class="flex items-center justify-center bg-green-600 h-8 absolute top-0 left-1/2 -translate-x-1/2 py-2 px-4 rounded-md mx-auto z-50 transform duration-300 -translate-y-[125%] opacity-0 focus:translate-y-2 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-zinc-100"
    >Skip to Main Content</a
  >

  <!-- Sidebar -->
  <AppSideBar />

  <!-- Main Content -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!-- Mobile Navigation -->
  <AppNav class="md:hidden flex after:shadow-2xl border-2 border-green-400" />
</template>

<style>
  @tailwind utilities;

  @layer utilities {
    /* Uniform Card Style */
    .card-style {
      @apply border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-700/50 bg-white;
    }

    .focused-link {
      @apply focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-green-400 focus:ring-opacity-75;
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
    @apply w-full min-w-[20rem] md:min-h-screen px-5 md:px-4 pt-4 pb-6 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-900 md:dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 flex items-start flex-col md:flex-row md:overflow-y-auto;
  }

  main {
    @apply w-full rounded-xl pt-6 md:px-10 py-4 pb-8 bg-transparent md:bg-zinc-50 md:dark:bg-zinc-900/40 font-normal overflow-x-hidden -z-0;
  }

  em {
    position: relative;
    font-style: normal;
  }

  em::after {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    left: 0rem;
    right: 0rem;
    height: 0.75rem;
    z-index: -1;
    background-image: url("/squiggly.svg");
    opacity: 0.85;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 1rem;
  }

  p > em::after {
    bottom: -0.3rem;
    height: 0.5rem;
    left: 0rem;
    right: 0rem;
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
