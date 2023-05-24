<!-- Sidebar -->
<template>
  <section
    id="sidebar"
    class="flex flex-col items-center justify-start w-full md:w-1/4 min-w-[16rem] md:min-w-[20rem] h-full max-h-[40rem] rounded-xl md:rounded-b-none p-5 pb-2 md:mr-4 md:mb-0 mb-6 box-border text-slate-900 bg-white dark:bg-slate-800 border border-transparent print:hidden relative md:sticky md:top-4 -z-0"
    :class="{ hidden: routeRegEx.test($route.fullPath) }"
  >
    <!-- Info card: Profile Picture, Name, Title + Social Profiles -->
    <AppSideBarInfo class="md:mb-4"></AppSideBarInfo>

    <!-- Desktop Navigation: Links -->
    <AppNav class="hidden md:flex"></AppNav>

    <!-- Button for toggling theme -->
    <button
      class="focused-link w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-slate-700 text-slate-100 dark:bg-slate-300 dark:text-slate-900 p-0 mx-0 absolute top-3 right-3"
      aria-label="Switch Theme"
      title="Switch Theme"
      @click="toggleDark()"
    >
      <Icon v-if="isDark" name="octicon:sun-16" />
      <Icon v-if="!isDark" name="octicon:moon-16" />
    </button>
  </section>
</template>

<script setup>
  // Dark theme attributes
  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  // Regex pattern for any blog post route
  const routeRegEx = /\/blog\/.*/i;
</script>

<style scoped>
  /* Gradient Border: Content Backdrop */
  #sidebar::before {
    @apply content-[""] -z-10 absolute inset-0 md:-mb-1 rounded-[.675rem] md:rounded-b-none bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900;
  }

  /* Gradient Border: Colorful Backdrop */
  #sidebar::after {
    @apply content-[""] -z-20 absolute inset-0 rounded-xl md:rounded-b-none bg-gradient-to-b from-green-500 via-lime-400 to-lime-400 md:to-transparent m-[-1.5px] dark:m-[-1px] md:mb-0;
  }
</style>
