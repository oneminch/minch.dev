<!-- Blog Posts -->
<template>
  <main id="blog">
    <h1 class="text-3xl text-left font-bold mb-6">Blog</h1>

    <!-- Blog Page Navigation -->
    <nav class="flex items-center mb-6 text-base [&>*]:mr-2 relative">
      <NuxtLink
        active-class="left-active"
        class="nav-item focused-link inline-block -z-0"
        to="/blog"
      >
        Articles
      </NuxtLink>
      <NuxtLink
        active-class="right-active"
        class="nav-item focused-link inline-block -z-0"
        to="/leetcode"
      >
        LeetCode
      </NuxtLink>
      <!-- Current Tab Indicator -->
      <!-- <span
        class="nav-item h-full absolute -z-10 border border-slate-300 dark:border-slate-600 bg-slate-200 dark:bg-slate-700"
      ></span> -->
    </nav>

    <slot />
  </main>
</template>

<style>
  #blog .left-active.focused-link,
  #blog .right-active.focused-link {
    @apply focus:ring-0;
  }

  /* #blog .left-active + span {
    @apply translate-x-0;
  }
  #blog .right-active + span {
    @apply translate-x-32;
  } */

  #blog .nav-item {
    @apply w-28 py-2 px-3 dark:text-slate-200 no-underline rounded-md text-center duration-150;
  }

  #blog .nav-item.router-link-exact-active {
    @apply border border-slate-300 dark:border-slate-600 bg-slate-200 dark:bg-slate-700;
  }
</style>
