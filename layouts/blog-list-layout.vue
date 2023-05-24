<!-- Blog Posts -->
<template>
  <main id="blog">
    <h1 class="text-3xl text-left font-bold mb-6">Blog</h1>

    <!-- Blog Page Navigation -->
    <nav class="flex items-center mb-6 py-2 text-base">
      <ul class="flex items-center [&>*]:mr-2">
        <li class="">
          <NuxtLink class="nav-item focused-link" to="/blog">
            Articles
          </NuxtLink>
        </li>
        <li class="">
          <NuxtLink class="nav-item focused-link" to="/leetcode">
            Code Solutions
          </NuxtLink>
        </li>
        <!-- <li class="">
          <NuxtLink class="nav-item focused-link" to="/blog/snippets">
            Snippets
          </NuxtLink>
        </li> -->
      </ul>
    </nav>

    <slot />
  </main>
</template>

<style>
  #blog .nav-item {
    @apply py-2 px-3 dark:text-slate-200 relative -z-0 no-underline rounded-md text-center w-auto duration-200 hover:bg-slate-200 dark:hover:bg-slate-700;
  }

  #blog .router-link-active {
    @apply focus:ring-0 bg-slate-200 border border-slate-300 dark:bg-slate-700 dark:border-slate-600;
  }
</style>
