<!-- Navigation: Links -->
<template>
  <nav
    class="flex-col justify-center items-center rounded-[.6rem] p-1 sm:px-4 text-slate-900 dark:text-slate-200 sm:w-full w-32 sm:max-h-64 max-h-16 sm:right-0 sm:bottom-0 fixed sm:relative bottom-6 right-4 sm:border-none sm:bg-transparent dark:sm:bg-transparent dark:bg-slate-800 bg-slate-100 z-50 origin-bottom-right"
    :class="{ toggled: menuToggled }"
  >
    <ul
      class="w-full h-full invisible opacity-0 sm:visible sm:opacity-100 hidden sm:flex flex-col"
    >
      <li
        v-for="(route, link) in navLinks"
        :key="link"
        class="font-bold h-auto flex items-center relative mb-2 rounded-md overflow-hidden"
      >
        <NuxtLink
          class="nav-links focused-link w-full h-10 py-1 px-4 flex items-center rounded-md font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 [&>svg]:hover:translate-x-1"
          :to="`/${route}`"
        >
          {{ link }}
          <Icon name="octicon:chevron-right-12" class="ml-2 text-green-500" />
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
        class="sm:hidden w-full h-10 py-1 px-4 flex items-center justify-center rounded-md font-semibold hover:bg-green-400 bg-green-400 text-slate-800"
        aria-label="Menu"
        title="Menu"
      >
        Menu
        <Icon name="octicon:three-bars-16" class="ml-2" />
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
    @apply w-[calc(100%-2rem)] flex max-h-80 overflow-hidden;
  }

  nav.toggled > ul {
    @apply flex visible opacity-100;
  }

  nav.toggled > button {
    @apply mt-3;
  }

  .nav-links.router-link-active {
    @apply focus:ring-0 bg-lime-100 dark:bg-slate-700 border border-lime-300 dark:border-slate-600;
  }
</style>
