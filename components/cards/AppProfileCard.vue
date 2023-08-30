<!-- Profile card: Profile Picture, Name, Title + Social Profiles -->
<template>
  <div
    class="w-full flex flex-col items-center bg-transparent relative [&>*]:mb-1 md:[&>*]:mb-2 last:[&>*]:mb-0 p-1 pb-2 md:pb-1"
  >
    <nuxt-img
      format="webp"
      loading="lazy"
      src="/profile.png"
      alt="Profile Picture"
      class="md:w-36 w-2/5 max-w-[8rem] min-w-[5rem] rounded-full border-[.05rem] border-zinc-300 dark:border-none"
    />
    <h2 class="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
      Dawit U
    </h2>
    <h2 class="text-lg md:text-xl font-medium text-zinc-700 dark:text-zinc-400">
      Frontend Developer
    </h2>
    <div
      class="w-full h-8 flex items-center justify-center text-zinc-900 dark:text-zinc-200"
    >
      <NuxtLink
        v-for="(profileUrl, name) in profiles"
        :key="name"
        class="focused-link icon-link"
        :to="profileUrl"
        :title="name"
        target="_blank"
      >
        <Icon :name="`simple-icons:${name.toLowerCase()}`" />
      </NuxtLink>
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
