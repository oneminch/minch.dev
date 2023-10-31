<!-- Profile card: Profile Picture, Name, Title + Social Profiles -->
<template>
  <div
    class="w-full flex flex-col items-center bg-transparent relative [&>*]:mb-1 md:[&>*]:mb-3 last:[&>*]:mb-0 p-1 pb-2 md:pb-1"
  >
    <nuxt-img
      format="webp"
      loading="lazy"
      src="/profile.jpg"
      alt="Profile Picture"
      class="w-28 rounded-full border border-zinc-200 dark:border-zinc-800"
    />
    <h2 class="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
      Dawit
    </h2>
    <h2 class="text-lg md:text-xl font-medium text-zinc-700 dark:text-zinc-400">
      Frontend Developer
    </h2>
    <div
      class="w-full h-8 flex items-center justify-center text-zinc-900 dark:text-zinc-200"
    >
      <nuxt-link
        v-for="(profileUrl, name) in profiles"
        :key="name"
        class="focused-link icon-link"
        :to="profileUrl"
        :title="name"
        target="_blank"
      >
        <Icon :name="`simple-icons:${name.toLowerCase()}`" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
  const profiles = {
    LinkedIn: "https://linkedin.com/in/oneminch",
    GitHub: "https://github.com/oneminch",
    Hashnode: "https://hashnode.com/@oneminch",
    DevDotTo: "https://dev.to/oneminch",
    LeetCode: "https://leetcode.com/oneminch"
  };
</script>
