<template>
  <main class="w-full">
    <header class="w-full max-w-3xl mx-auto">
      <!-- Navigation -->
      <nav class="not-prose hidden md:flex items-center mb-6 py-2 [&>*]:mr-2">
        <NuxtLink
          class="focused-link flex justify-between items-center py-1 px-3 bg-slate-200 dark:bg-slate-700 dark:text-slate-200 duration-150 rounded-md no-underline border-[.5px] border-slate-300 dark:border-slate-600"
          to="/"
          noPrefetch
        >
          <Icon name="heroicons:home-20-solid" class="mr-2" />
          Home
        </NuxtLink>
        <NuxtLink
          class="focused-link flex justify-between items-center py-1 px-3 bg-slate-200 dark:bg-slate-700 dark:text-slate-200 duration-150 rounded-md no-underline border-[.5px] border-slate-300 dark:border-slate-600"
          to="/blog"
          noPrefetch
        >
          <Icon name="heroicons:rss-solid" class="mr-2" />

          Blog
        </NuxtLink>
        <NuxtLink
          class="focused-link flex justify-between items-center py-1 px-3 bg-slate-200 dark:bg-slate-700 dark:text-slate-200 duration-150 rounded-md no-underline border-[.5px] border-slate-300 dark:border-slate-600"
          to="/leetcode"
          noPrefetch
        >
          <Icon name="simple-icons:leetcode" class="mr-2" />

          LeetCode
        </NuxtLink>
      </nav>
    </header>

    <!-- Blog Content -->
    <article
      class="w-full max-w-3xl prose lg:prose-base dark:prose-invert prose-img:rounded-lg prose-slate prose-a:no-underline prose-a:border-b-[1.5px] prose-a:border-b-green-400 prose-pre:bg-slate-700 prose-code:leading-snug prose-code:font-normal prose-code:bg-slate-700 prose-code:text-slate-100 prose-code:px-2 prose-code:py-0 prose-code:inline-block prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none mx-auto text-slate-800 dark:text-slate-100"
    >
      <slot />
    </article>
  </main>
</template>
