<!-- Info card: Profile Picture, Name, Title + Social Profiles -->
<template>
  <div id="info-card" class="w-full flex flex-col items-center bg-transparent">
    <img
      src="/profile.png"
      alt="Profile Picture"
      class="sm:w-40 w-1/4 max-w-[14rem] min-w-[8rem] rounded-full"
    />
    <h2 class="sm:text-2xl text-3xl font-bold text-gray-900 dark:text-gray-100">
      Dawit U
    </h2>
    <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-400">
      Software Engineer
    </h2>
    <div
      class="w-full h-8 flex items-center justify-center text-gray-900 dark:text-gray-200"
    >
      <NuxtLink
        v-for="(profile, key) in profiles"
        :key="profile"
        class="focused-link icon-link"
        :to="profile"
        :title="key"
        target="_blank"
      >
        <Icon :name="`simple-icons:${key.toLowerCase()}`" />
      </NuxtLink>
    </div>
    <button
      class="focused-link w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-700 text-gray-100 dark:bg-gray-300 dark:text-gray-900 p-0 mx-0 absolute top-3 right-3"
      @click="toggleDark()"
    >
      <Icon v-if="isDark" name="octicon:sun-16" />
      <Icon v-if="!isDark" name="octicon:moon-16" />
    </button>
  </div>
</template>

<script setup>
  const profiles = {
    LinkedIn: "https://linkedin.com/in/oneminch",
    GitHub: "https://github.com/oneminch",
    Hashnode: "https://hashnode.com/@oneminch",
    DevDotTo: "https://dev.to/oneminch",
    LeetCode: "https://leetcode.com/oneminch",
    Unsplash: "https://unsplash.com/@oneminch"
  };

  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<style scoped>
  #info-card > * {
    @apply mb-2 last:mb-0;
  }
</style>
