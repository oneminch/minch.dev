<!-- Navigation: Links -->
<template>
  <nav
    class="flex-col justify-center items-center rounded-xl p-[.375rem] md:px-4 text-slate-900 dark:text-slate-200 md:w-full w-32 md:max-h-64 max-h-16 md:right-0 md:bottom-0 fixed md:relative bottom-6 right-4 bg-transparent z-50 origin-bottom-right backdrop-blur-3xl md:backdrop-blur-none"
    :class="{ toggled: menuToggled }"
  >
    <ul
      class="w-full h-full invisible opacity-0 md:visible md:opacity-100 hidden md:flex flex-col"
    >
      <li
        v-for="(route, link) in navLinks"
        :key="link"
        class="font-bold h-auto flex items-center relative mb-2 rounded-md overflow-hidden"
      >
        <NuxtLink
          class="nav-links focused-link w-full h-10 py-1 px-4 flex items-center rounded-md font-semibold hover:bg-transparent md:hover:bg-slate-100 md:dark:hover:bg-slate-700 [&>svg]:hover:translate-x-1"
          :to="`/${route}`"
        >
          {{ link }}
          <Icon
            name="heroicons:chevron-right-20-solid"
            class="ml-2 text-green-500"
          />
        </NuxtLink>
      </li>
    </ul>
    <!-- Mobile Menu Button -->
    <OnClickOutside
      @trigger="
        if (menuToggled) {
          menuToggled = false;
        }
      "
      class="w-full"
    >
      <button
        @click="toggleMenu()"
        class="md:hidden w-full h-10 py-1 px-4 flex items-center justify-center rounded-md font-semibold hover:bg-green-400 bg-green-400 text-slate-800"
        aria-label="Menu"
        title="Menu"
      >
        Pages
        <Icon name="octicon:project-roadmap-16" size="1.15rem" class="ml-2" />
      </button>
    </OnClickOutside>
  </nav>
</template>

<script setup>
  import { OnClickOutside } from "@vueuse/components";
  const menuToggled = ref(false);
  const toggleMenu = useToggle(menuToggled);

  const navLinks = {
    Home: "",
    Blog: "blog",
    Projects: "projects",
    Resume: "resume",
    Picks: "picks"
  };
</script>

<style scoped>
  nav {
    transition-property: width, max-height;
    transition-duration: 150ms;
  }

  ul {
    transition-property: opacity, visibility;
    transition-duration: 500ms;
    transition-delay: 500ms;
  }

  nav.toggled {
    @apply w-[calc(100%-2rem)] flex max-h-80 overflow-hidden p-3;
  }

  nav.toggled > ul {
    @apply flex visible opacity-100;
  }

  nav.toggled > button {
    @apply mt-3;
  }

  .nav-links.router-link-active {
    @apply focus:ring-0 bg-slate-200 dark:bg-slate-700/75 md:dark:bg-slate-700/100 border border-slate-300 dark:border-slate-600;
  }
</style>
