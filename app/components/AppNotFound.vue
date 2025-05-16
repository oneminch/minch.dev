<!-- Not Found -->
<template>
  <div class="flex flex-col items-center justify-center h-96">
    <Icon
      aria-labelledby="not-found"
      name="fluent-emoji:construction"
      size="10rem"
      class="mb-8"
    />
    <h1
      id="not-found"
      class="mb-6 text-xl font-semibold text-center sm:text-2xl text-zinc-700 dark:text-zinc-300"
    >
      This page doesn't exist.
    </h1>
    <nuxt-link
      to="/"
      class="flex items-center justify-center w-24 py-2 font-semibold no-underline duration-150 bg-green-500 rounded-md focus-visible:global-focus text-zinc-800 group/hover-effect"
      >Go Home</nuxt-link
    >
  </div>
</template>
