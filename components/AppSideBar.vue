<!-- Sidebar -->
<template>
  <section
    id="sidebar"
    class="flex flex-col items-center justify-between w-full sm:w-1/4 min-w-[16rem] md:min-w-[20rem] h-full max-h-[40rem] rounded-t-xl p-5 pb-2 mr-4 sm:mb-0 mb-6 box-border text-gray-900 bg-white dark:bg-gray-800 border border-transparent print:hidden relative sm:sticky sm:top-0 -z-0"
    :class="{ hidden: routeRegEx.test($route.fullPath) }"
  >
    <!-- Info card: Profile Picture, Name, Title + Social Profiles -->
    <AppInfoCard></AppInfoCard>

    <!-- Navigation: Links -->
    <AppNav></AppNav>

    <!-- Footer: Tech Stack -->
    <AppFooter class="hidden sm:flex"></AppFooter>
  </section>
</template>

<script setup>
  const routeRegEx = /\/articles\/.*/i;
</script>

<style scoped>
  /* Gradient Border: Content Backdrop */
  #sidebar::before {
    @apply content-[""] -z-10 absolute inset-0 -mb-1 rounded-t-xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900;
  }

  /* Gradient Border: Colorful Backdrop */
  #sidebar::after {
    @apply content-[""] -z-20 absolute inset-0  rounded-t-xl bg-gradient-to-b from-[#51cf66] via-[#c0eb75] m-[-1.5px] dark:m-[-1px] mb-0;
  }
</style>
