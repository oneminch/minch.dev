<!-- Navigation: Links -->
<template>
  <nav
    class="flex-col justify-center items-center rounded-xl p-2 md:px-4 text-zinc-900 dark:text-zinc-200 md:w-full w-32 md:max-h-64 max-h-16 md:right-0 md:bottom-0 fixed md:relative bottom-6 right-4 bg-zinc-100/75 dark:bg-zinc-900/75 md:bg-transparent dark:md:bg-transparent origin-bottom-right backdrop-blur-xl md:backdrop-blur-none print:hidden"
    :class="{ toggled: menuToggled }"
  >
    <ul
      class="w-full h-full p-0 invisible opacity-0 md:visible md:opacity-100 hidden md:flex flex-col"
    >
      <li
        v-for="(route, link) in navLinks"
        :key="link"
        class="font-bold h-auto flex items-center relative mb-2 rounded-md overflow-hidden"
      >
        <nuxt-link
          class="focused-link focus:ring-inset focus:ring-2 w-full h-10 py-1 px-4 flex items-center rounded-md font-semibold hover:bg-transparent md:hover:bg-zinc-200/75 md:dark:hover:bg-zinc-700 [&>svg]:hover:translate-x-1"
          activeClass="bg-zinc-600/10 dark:bg-zinc-700/75 md:bg-zinc-200 md:dark:bg-zinc-700/75"
          :to="`/${route}`"
        >
          {{ link }}
          <Icon
            name="heroicons:chevron-right-20-solid"
            class="ml-2 text-green-500"
          />
        </nuxt-link>
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
        class="md:hidden w-full h-10 py-1 px-4 flex items-center justify-center rounded-md font-semibold hover:bg-green-400 bg-green-400 text-zinc-800"
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
    Miscellany: "miscellany"
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
</style>
