<!-- Sidebar -->
<template>
  <aside
    id="sidebar"
    class="flex flex-col items-center justify-start rounded-xl md:rounded-b-none w-full md:w-1/4 min-w-[16rem] md:min-w-[20rem] h-full max-h-[40rem] p-5 pb-2 md:mr-4 md:mb-0 mb-6 box-border text-zinc-900 bg-white dark:bg-zinc-950 border border-transparent print:hidden relative md:sticky md:top-4 -z-0"
    :class="{ hidden: routeRegEx.test($route.fullPath) }"
  >
    <!-- Theme Toggle -->
    <AppThemeToggle
      class="absolute top-1 left-1 rounded-md rounded-tl-lg rounded-br-lg"
    />

    <!-- Profile card: Profile Picture, Name, Title + Social Profiles -->
    <AppProfileCard />

    <hr
      class="hidden md:inline-block w-3/4 md:my-3 border-none bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent h-[1px] rounded-full"
    />

    <!-- Desktop Navigation: Links -->
    <AppNav class="hidden md:flex" />
  </aside>
</template>

<script setup>
  // Regex pattern for any blog post route
  const routeRegEx = /(\/blog|\/leetcode)\/.*/i;
</script>

<style scoped>
  /* Gradient Border: Content Backdrop */
  #sidebar::before {
    @apply content-[""] -z-10 absolute inset-0 md:-bottom-2 rounded-[calc(.75rem-2px)] dark:rounded-[calc(.75rem-1px)] md:rounded-b-none dark:md:rounded-b-none bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950;
  }

  /* Gradient Border: Colorful Backdrop */
  #sidebar::after {
    @apply content-[""] -z-20 absolute inset-[-2px] dark:inset-[-1px] rounded-[.75rem] md:rounded-b-none bg-gradient-to-b from-green-500 via-lime-400 to-lime-400 md:to-transparent;
  }
</style>
