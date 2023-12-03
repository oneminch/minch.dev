<template>
  <section
    class="flex items-center [&>span]:text-zinc-300 [&>span]:dark:text-zinc-700 space-x-3 text-zinc-400 [&>a]:border-b-[.1rem]"
  >
    <p class="my-0 font-bold">Let's Connect</p>

    <Icon name="heroicons:chevron-right-20-solid" class="text-green-500" />

    <nuxt-link
      class="global-focus"
      to="https://twitter.com/oneminch"
      target="_blank"
      >Twitter
    </nuxt-link>

    <span>&bull;</span>

    <nuxt-link
      class="global-focus"
      to="https://github.com/oneminch"
      target="_blank"
      >GitHub
    </nuxt-link>

    <span>&bull;</span>

    <nuxt-link
      class="global-focus"
      to="https://linkedin.com/in/oneminch"
      target="_blank"
      >LinkedIn
    </nuxt-link>
  </section>
</template>
