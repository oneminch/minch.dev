<!-- Footer: Tech Stack -->
<template>
  <footer
    class="flex items-center justify-center w-72 h-8 rounded-full mx-auto border-[0.5px] border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-700"
  >
    <p
      class="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300"
    >
      Joyfully Built with
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
