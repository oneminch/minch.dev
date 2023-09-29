<!-- Footer: Tech Stack -->
<template>
  <footer
    class="flex items-center justify-center w-72 h-8 rounded-full mx-auto border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800"
  >
    <p
      class="flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-200"
    >
      Joyfully Built with
      <nuxt-link
        class="icon-link focused-link"
        to="https://nuxt.com/"
        aria-label="NuxtJS Icon"
        target="_blank"
        title="NuxtJS"
      >
        <Icon name="logos:nuxt-icon" size="1.25rem" />
      </nuxt-link>
      +
      <nuxt-link
        class="icon-link focused-link mr-0"
        to="https://tailwindcss.com/"
        aria-label="Tailwind CSS Icon"
        target="_blank"
        title="Tailwind CSS"
      >
        <Icon name="logos:tailwindcss-icon" />
      </nuxt-link>
    </p>
  </footer>
</template>

<style scoped>
  a:last-of-type {
    @apply mr-0 !important;
  }
</style>
