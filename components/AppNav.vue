<!-- Navigation: Links -->
<template>
  <nav
    class="flex-col justify-center items-center rounded-[.6rem] p-1 sm:px-4 text-slate-900 dark:text-slate-200 sm:w-full h-auto w-32 sm:right-0 sm:bottom-0 fixed sm:relative bottom-6 right-4 sm:border-none sm:bg-transparent dark:sm:bg-transparent dark:bg-slate-800 bg-slate-100 z-[9999]"
    :class="{ visible: menuToggled }"
  >
    <!-- :class="" -->
    <ul class="w-full h-full hidden sm:flex flex-col p-2">
      <li
        v-for="(route, link) in navLinks"
        :key="link"
        class="font-bold h-full flex items-center relative mb-1 last:mb-0 rounded-md overflow-hidden"
      >
        <NuxtLink
          class="nav-links focused-link w-full h-11 py-2 px-4 flex items-center rounded-md font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 [&>svg]:hover:translate-x-1"
          :to="`/${route}`"
          :external="false"
        >
          <!-- @click="menuToggled = false" -->
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
        class="sm:hidden w-full h-11 py-2 px-4 flex items-center justify-center rounded-md font-semibold hover:bg-green-400 bg-green-400 text-slate-800"
      >
        <!-- :class="{ 'dark:bg-slate-700 bg-slate-200': menuToggled }" -->
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
    Articles: "articles",
    Projects: "projects",
    Resume: "resume",
    Picks: "picks"
  };

  // const menuButton = ref(null);

  // onClickOutside(menuButton, () => {
  //   if (menuToggled) {
  //     menuToggled = false;
  //   }
  // });
</script>

<style scoped>
  nav.visible {
    @apply w-[calc(100%-2rem)] flex h-auto;
  }

  nav.visible > ul {
    @apply flex sm:flex mb-2;
  }

  nav.visible > button {
    @apply mt-3;
  }

  .nav-links:hover svg {
    /* @apply ; */
  }

  .nav-links.router-link-active {
    @apply focus:ring-0 bg-lime-200 dark:bg-slate-700 border border-lime-300 dark:border-slate-600;
    /* @apply bg-gradient-to-r from-green-200 to-lime-200 dark:from-transparent dark:to-transparent ; */
  }
</style>
