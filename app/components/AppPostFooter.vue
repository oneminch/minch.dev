<script setup>
  const { socials } = useAppConfig();
</script>

<template>
  <section
    class="flex items-center gap-x-3 [&>span]:text-zinc-300 [&>span]:dark:text-zinc-700 text-zinc-400">
    <p class="my-0 font-bold">Let's Connect</p>

    <Icon name="heroicons:chevron-right-20-solid" class="text-green-500" />

    <template v-for="(profileUrl, name, index) in socials" :key="name">
      <nuxt-link
        class="focus-visible:global-focus icon-link border-none"
        :to="profileUrl"
        :title="name"
        :aria-label="`Link to My ${name} Profile`"
        target="_blank"
        external>
        <Icon :name="`simple-icons:${name.toLowerCase()}`" />
      </nuxt-link>

      <span v-if="index !== Object.keys(socials).length - 1">&bull;</span>
    </template>
  </section>
</template>
