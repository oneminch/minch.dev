<!-- Sidebar -->
<template>
  <aside
    id="sidebar"
    class="flex flex-col items-center justify-start w-full md:w-1/4 min-w-[16rem] md:min-w-[20rem] h-full max-h-[40rem] rounded-xl md:rounded-b-none p-5 pb-2 md:mr-4 md:mb-0 mb-6 box-border text-zinc-900 bg-white dark:bg-zinc-900 border-[0.75px] border-transparent print:hidden relative md:sticky md:top-4 -z-0"
    :class="{ hidden: routeRegEx.test($route.fullPath) }"
  >
    <!-- Profile card: Profile Picture, Name, Title + Social Profiles -->
    <AppProfileCard />

    <hr
      class="hidden md:inline-block w-3/4 md:my-3 border-none bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent h-[1px] rounded-full"
    />

    <!-- Desktop Navigation: Links -->
    <AppNav class="hidden md:flex" />

    <AppThemeToggle class="absolute top-3 right-3" />
  </aside>
</template>

<script setup>
  // Regex pattern for any blog post route
  const routeRegEx = /(\/blog|\/leetcode)\/.*/i;
</script>

<style scoped>
  /* Gradient Border: Content Backdrop */
  #sidebar::before {
    @apply content-[""] -z-10 absolute inset-0 md:-mb-1 rounded-[.675rem] md:rounded-b-none bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950;
  }

  /* Gradient Border: Colorful Backdrop */
  #sidebar::after {
    @apply content-[""] -z-20 absolute inset-0 rounded-xl md:rounded-b-none bg-gradient-to-b from-green-500 via-lime-400 to-lime-400 md:to-transparent m-[-1px] md:mb-0;
  }
</style>
