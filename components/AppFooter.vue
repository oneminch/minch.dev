<!-- Footer: Tech Stack -->
<template>
  <footer class="flex items-center justify-start h-8">
    <p
      class="flex items-center text-base font-medium text-zinc-400 dark:text-zinc-500">
      Built from scratch with:
      <nuxt-link
        class="icon-link focus-visible:global-focus text-[#00DC82]"
        to="https://nuxt.com/"
        aria-label="NuxtJS Website"
        target="_blank"
        title="NuxtJS"
        external>
        <Icon name="simple-icons:nuxtdotjs" />
      </nuxt-link>
      <span>&bull;</span>
      <nuxt-link
        class="icon-link focus-visible:global-focus text-[#38bdf8]"
        to="https://tailwindcss.com/"
        aria-label="Tailwind CSS Website"
        target="_blank"
        title="Tailwind CSS"
        external>
        <Icon name="simple-icons:tailwindcss" />
      </nuxt-link>
      <span>&bull;</span>
      <nuxt-link
        class="text-black icon-link focus-visible:global-focus dark:text-white"
        to="https://vercel.com"
        aria-label="Vercel Website"
        target="_blank"
        title="Vercel"
        external>
        <Icon name="simple-icons:vercel" />
      </nuxt-link>
    </p>
  </footer>
</template>

<style scoped>
  @reference "../assets/css/main.css";

  footer {
    @apply mt-10! mb-6!;
  }

  a:last-of-type {
    @apply mr-0!;
  }
</style>
