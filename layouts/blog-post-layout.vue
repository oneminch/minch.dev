<template>
  <main class="w-full">
    <header class="w-full max-w-3xl mx-auto">
      <!-- Navigation -->
      <nav
        class="not-prose hidden md:flex items-center mb-6 py-2 [&>*]:mr-2 last:[&>*]:mr-0"
      >
        <NuxtLink
          class="focused-link flex justify-between items-center py-1 px-3 bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 duration-150 rounded-md no-underline border border-zinc-300 dark:border-zinc-600"
          to="/"
        >
          <Icon name="heroicons:home-20-solid" class="mr-2" />
          Home
        </NuxtLink>
        <NuxtLink
          class="focused-link flex justify-between items-center py-1 px-3 bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 duration-150 rounded-md no-underline border border-zinc-300 dark:border-zinc-600"
          to="/blog"
        >
          <Icon name="heroicons:rss-solid" class="mr-2" />

          Blog
        </NuxtLink>
        <NuxtLink
          class="focused-link flex justify-between items-center py-1 px-3 bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 duration-150 rounded-md no-underline border border-zinc-300 dark:border-zinc-600"
          to="/leetcode"
        >
          <Icon name="simple-icons:leetcode" class="mr-2" />

          LeetCode
        </NuxtLink>
        <AppThemeToggle
          class="py-1 px-3 rounded-md border border-zinc-300 dark:border-zinc-600 ml-auto text-lg"
        />
      </nav>
    </header>

    <!-- Blog Content -->
    <article
      class="w-full max-w-3xl prose lg:prose-base dark:prose-invert prose-img:rounded-xl prose-slate prose-a:no-underline prose-a:border-b-[.125rem] prose-a:border-b-green-400 prose-pre:bg-zinc-700 prose-code:leading-snug prose-code:font-normal prose-code:bg-zinc-700 prose-code:text-zinc-100 prose-code:px-2 prose-code:py-0 prose-code:inline-block prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none mx-auto text-zinc-800 dark:text-zinc-100"
    >
      <slot />
    </article>
  </main>
</template>
