<script setup>
  // Regex pattern for any blog post route
  const routeRegEx = /(\/blog|\/leetcode)\/.*/i;
</script>

<!-- Sidebar -->
<template>
  <aside
    id="sidebar"
    class="flex flex-col items-center justify-start rounded-xl md:rounded-b-none w-full md:max-w-[18rem] h-full p-5 pb-2 md:mr-4 md:mb-0 mb-6 text-zinc-900 bg-white dark:bg-zinc-950 border border-transparent print:hidden relative md:sticky md:top-4 -z-0"
    :class="{ hidden: routeRegEx.test($route.fullPath) }">
    <!-- Theme Toggle -->
    <app-theme-toggle class="absolute z-10 top-2 left-2" />

    <!-- Profile Card -->
    <app-profile-card />

    <app-divider class="hidden md:block" />

    <!-- Desktop Navigation: Links -->
    <app-nav class="hidden md:flex" />
  </aside>
</template>

<style scoped>
  @reference "../assets/css/main.css";

  #sidebar {
    /* Gradient Border: Content Backdrop */
    @apply before:content-[''] before:-z-10 before:absolute before:inset-0 md:before:-bottom-2 before:rounded-[calc(.75rem-2px)] dark:before:rounded-[calc(.75rem-1px)] md:before:rounded-b-none dark:md:before:rounded-b-none before:bg-gradient-to-b before:from-white before:to-zinc-50 dark:before:from-zinc-900 dark:before:to-zinc-950;

    /* Gradient Border: Colorful Backdrop */
    @apply after:content-[''] after:-z-20 after:absolute after:inset-[-2px] dark:after:inset-[-1px] after:rounded-[.75rem] md:after:rounded-b-none after:bg-gradient-to-b after:from-green-500 after:via-lime-400 after:to-lime-400 md:after:to-transparent after:opacity-75 dark:after:opacity-60;
  }
</style>
