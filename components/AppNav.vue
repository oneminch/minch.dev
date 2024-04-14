<script setup>
  import { OnClickOutside } from "@vueuse/components";

  const menuToggled = ref(false);
  const toggleMenu = useToggle(menuToggled);

  const navLinks = {
    Home: "",
    About: "about",
    Projects: "projects",
    Blog: "blog"
  };
</script>

<!-- Navigation: Links -->
<template>
  <nav
    class="fixed z-50 flex-col items-center justify-center w-32 p-1 origin-bottom-right rounded-xl md:px-4 text-zinc-900 dark:text-zinc-200 md:w-full md:max-h-64 max-h-16 md:right-0 md:bottom-0 md:relative bottom-4 right-4 bg-zinc-100/75 dark:bg-zinc-900/75 md:bg-transparent dark:md:bg-transparent backdrop-blur-xl md:backdrop-blur-none print:hidden"
    :class="{ toggled: menuToggled }"
  >
    <ul
      class="flex-col invisible hidden w-full p-1 opacity-0 md:visible md:opacity-100 md:flex"
    >
      <li
        v-for="(route, link) in navLinks"
        :key="link"
        class="relative flex items-center mb-2 overflow-hidden font-bold rounded-md"
      >
        <nuxt-link
          class="focus-visible:global-focus focus-visible:ring-inset focus-visible:ring-2 w-full h-10 py-1 px-4 flex items-center rounded-md font-semibold transition-all duration-150 hover:bg-transparent md:hover:bg-zinc-200/75 md:dark:hover:bg-zinc-700 [&>svg]:hover:translate-x-1"
          activeClass="bg-zinc-600/10 dark:bg-zinc-700/75 md:bg-zinc-200 md:dark:bg-zinc-700/75 focus-visible:ring-transparent"
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
        class="flex items-center justify-center w-full h-10 px-4 py-1 font-semibold bg-green-500 rounded-lg md:hidden hover:bg-green-400 text-zinc-800"
        aria-label="Menu"
        title="Menu"
      >
        Menu
        <Icon
          name="heroicons:bars-3-center-left-20-solid"
          size="1.15rem"
          class="ml-2"
        />
      </button>
    </OnClickOutside>
  </nav>
</template>

<style scoped>
  nav {
    transition-property: width, max-height, padding;
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
