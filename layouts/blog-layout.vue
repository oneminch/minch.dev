<!-- Blog Post Layout -->
<template>
  <main id="main-content">
    <header class="w-full max-w-3xl mx-auto">
      <!-- Navigation -->
      <nav
        class="not-prose hidden md:flex items-center mb-6 py-2 [&>*]:mr-2 last:[&>*]:mr-0"
      >
        <nuxt-link
          class="flex items-center justify-between px-3 py-1 no-underline duration-150 border rounded-md focus-visible:global-focus bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 border-zinc-300 dark:border-zinc-600"
          to="/"
        >
          <Icon name="heroicons:home-20-solid" class="mr-2" />
          Home
        </nuxt-link>
        <nuxt-link
          class="flex items-center justify-between px-3 py-1 no-underline duration-150 border rounded-md focus-visible:global-focus bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 border-zinc-300 dark:border-zinc-600"
          activeClass="bg-zinc-600/10 dark:bg-zinc-700/75 md:bg-zinc-200 md:dark:bg-zinc-700/75 focus-visible:ring-transparent"
          to="/blog"
        >
          <Icon name="heroicons:rss-solid" class="mr-2" />

          Blog
        </nuxt-link>
        <nuxt-link
          class="flex items-center justify-between px-3 py-1 no-underline duration-150 border rounded-md focus-visible:global-focus bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 border-zinc-300 dark:border-zinc-600"
          activeClass="bg-zinc-600/10 dark:bg-zinc-700/75 md:bg-zinc-200 md:dark:bg-zinc-700/75 focus-visible:ring-transparent"
          to="/leetcode"
        >
          <Icon name="heroicons:code-bracket-square-20-solid" class="mr-2" />

          LeetCode
        </nuxt-link>

        <app-theme-toggle class="ml-auto" />
      </nav>
    </header>

    <!-- Blog Content -->
    <article
      class="w-full max-w-3xl pb-8 mx-auto prose lg:prose-base dark:prose-invert prose-img:rounded-xl prose-zinc prose-a:no-underline prose-a:border-b prose-a:border-b-green-400/75 focus-visible:prose-a:global-focus prose-pre:bg-zinc-700 prose-code:leading-snug prose-code:font-normal prose-code:bg-zinc-700 prose-code:text-zinc-100 prose-code:px-2 prose-code:py-0 prose-code:inline-block prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none text-zinc-800 dark:text-zinc-100"
    >
      <slot />
    </article>
  </main>
</template>
