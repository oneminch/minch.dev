<script setup>
  const { socials } = useAppConfig();
</script>

<!-- Profile card: Profile Picture, Name, Title + Social Profiles -->
<template>
  <div
    class="w-full flex flex-col items-center bg-transparent relative [&>*]:mb-1 md:[&>*]:mb-3 last:[&>*]:mb-0 p-1 pb-2 md:pb-1">
    <nuxt-img
      preload
      placeholder
      format="webp"
      loading="lazy"
      width="112"
      height="112"
      src="/profile.jpg"
      alt="Profile Picture"
      class="text-center border rounded-full w-28 border-zinc-200 dark:border-zinc-800" />
    <h2 class="text-xl font-bold md:text-2xl text-zinc-900 dark:text-zinc-100">
      Dawit
    </h2>
    <h2 class="text-lg font-medium md:text-xl text-zinc-700 dark:text-zinc-400">
      Full-Stack Engineer
    </h2>
    <div
      class="flex items-center justify-center w-full h-8 text-zinc-900 dark:text-zinc-200">
      <nuxt-link
        v-for="(profileUrl, name) in socials"
        :key="name"
        class="focus-visible:global-focus icon-link"
        :to="profileUrl"
        :title="name"
        :aria-label="`Link to My ${name} Profile`"
        target="_blank"
        external>
        <Icon :name="`simple-icons:${name.toLowerCase()}`" />
      </nuxt-link>
    </div>
  </div>
</template>
