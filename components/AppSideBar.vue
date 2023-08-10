<!-- Sidebar -->
<template>
  <aside
    id="sidebar"
    class="flex flex-col items-center justify-start w-full md:w-1/4 min-w-[16rem] md:min-w-[20rem] h-full max-h-[40rem] rounded-xl md:rounded-b-none p-5 pb-2 md:mr-4 md:mb-0 mb-6 box-border text-gray-900 bg-white dark:bg-gray-800 border-[0.75px] border-transparent print:hidden relative md:sticky md:top-4 -z-0"
    :class="{ hidden: routeRegEx.test($route.fullPath) }"
  >
    <!-- Profile card: Profile Picture, Name, Title + Social Profiles -->
    <AppProfileCard />

    <hr
      class="hidden md:inline-block w-3/4 md:my-3 border-none bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent h-[1px] rounded-full"
    />

    <!-- Desktop Navigation: Links -->
    <AppNav class="hidden md:flex" />

    <!-- Button for toggling theme -->
    <button
      class="focused-link w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-700 text-gray-100 dark:bg-gray-300 dark:text-gray-900 p-0 mx-0 absolute top-3 right-3"
      aria-label="Switch Theme"
      title="Switch Theme"
      @click="toggleDark()"
    >
      <Icon v-if="isDark" name="heroicons:sun-solid" />
      <Icon v-if="!isDark" name="heroicons:moon-solid" />
    </button>
  </aside>
</template>

<script setup>
  // Dark theme attributes
  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  // Regex pattern for any blog post route
  const routeRegEx = /(\/blog|\/leetcode)\/.*/i;
</script>

<style scoped>
  /* Gradient Border: Content Backdrop */
  #sidebar::before {
    @apply content-[""] -z-10 absolute inset-0 md:-mb-1 rounded-[.675rem] md:rounded-b-none bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900;
  }

  /* Gradient Border: Colorful Backdrop */
  #sidebar::after {
    @apply content-[""] -z-20 absolute inset-0 rounded-xl md:rounded-b-none bg-gradient-to-b from-green-500 via-lime-400 to-lime-400 md:to-transparent m-[-1px] md:mb-0;
  }
</style>
