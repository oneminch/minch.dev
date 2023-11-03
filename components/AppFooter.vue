<!-- Footer: Tech Stack -->
<template>
  <footer class="flex items-center justify-start h-8">
    <p
      class="flex items-center text-sm font-medium text-zinc-400 dark:text-zinc-600"
    >
      Built from scratch with
      <nuxt-link
        class="icon-link focused-link"
        to="https://nuxt.com/"
        aria-label="NuxtJS Website"
        target="_blank"
        title="NuxtJS"
      >
        <Icon name="logos:nuxt-icon" size="1.25rem" />
      </nuxt-link>
      +
      <nuxt-link
        class="icon-link focused-link mr-0"
        to="https://tailwindcss.com/"
        aria-label="Tailwind CSS Website"
        target="_blank"
        title="Tailwind CSS"
      >
        <Icon name="logos:tailwindcss-icon" />
      </nuxt-link>
    </p>
  </footer>
</template>

<style scoped>
  footer {
    @apply mt-10 mb-8 !important;
  }

  a:last-of-type {
    @apply mr-0 !important;
  }
</style>
