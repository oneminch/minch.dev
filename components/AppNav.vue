<!-- Navigation: Links -->
<template>
  <nav
    class="w-full flex items-center rounded-lg py-2 sm:px-4 text-gray-900 dark:text-gray-200 bg-transparent"
  >
    <ul class="w-full h-full hidden sm:flex flex-col">
      <li
        v-for="(route, link) in navLinks"
        :key="link"
        class="font-bold h-full flex items-center relative mb-1 last:mb-0 rounded-md overflow-hidden"
      >
        <NuxtLink
          class="nav-links focused-link w-full h-full py-2 px-4 flex items-center rounded-md font-semibold hover:bg-gray-100 dark:hover:bg-gray-800"
          :to="`/${route}`"
        >
          {{ link }}
          <Icon name="octicon:chevron-right-12" class="ml-2 text-[#edae49]" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  const navLinks = {
    Home: "",
    About: "about",
    Articles: "articles",
    Projects: "projects",
    Resume: "resume"
  };
</script>

<style scoped>
  .nav-links:hover svg {
    @apply translate-x-1;
  }

  .nav-links.router-link-active {
    @apply focus:ring-0 bg-gradient-to-r from-[#e9fac8] to-[#d3f9d8] dark:from-transparent dark:to-transparent dark:bg-gray-700;
  }
</style>
