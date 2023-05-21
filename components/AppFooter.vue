<!-- Footer: Tech Stack -->
<template>
  <footer
    class="flex items-center justify-center w-52 h-8 rounded-full mx-auto border border-slate-200 bg-slate-100 dark:border-slate-600 dark:bg-slate-700"
  >
    <p
      class="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300"
    >
      Built with
      <NuxtLink
        class="icon-link focused-link"
        to="https://nuxt.com/"
        aria-label="NuxtJS Icon"
        target="_blank"
        title="NuxtJS"
      >
        <Icon name="logos:nuxt-icon" size="1.25rem" />
      </NuxtLink>
      +
      <NuxtLink
        class="icon-link focused-link mr-0"
        to="https://tailwindcss.com/"
        aria-label="Tailwind CSS Icon"
        target="_blank"
        title="Tailwind CSS"
      >
        <Icon name="logos:tailwindcss-icon" />
      </NuxtLink>
    </p>
  </footer>
</template>

<style scoped>
  a:last-of-type {
    @apply mr-0 !important;
  }
</style>
