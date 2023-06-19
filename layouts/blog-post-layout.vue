<template>
  <main id="post" class="w-full">
    <article
      class="w-full max-w-4xl prose lg:prose-base dark:prose-invert prose-img:rounded-lg prose-slate prose-a:no-underline prose-a:border-b-[1.5px] prose-a:border-b-green-400 prose-pre:bg-slate-700 prose-code:leading-snug prose-code:font-normal prose-code:bg-slate-700 prose-code:text-slate-100 prose-code:px-2 prose-code:py-0 prose-code:inline-block prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none mx-auto text-slate-800 dark:text-slate-100"
    >
      <!-- Breadcrumb nav menu -->
      <nav class="not-prose flex items-center mb-6 py-2 text-lg [&>*]:mr-2">
        <NuxtLink
          class="focused-link py-1 px-3 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-200 duration-150 rounded-md no-underline"
          to="/blog"
          >Articles</NuxtLink
        >
        <p class="text-lg">&bull;</p>
        <NuxtLink
          class="focused-link py-1 px-3 hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-slate-200 duration-150 rounded-md no-underline"
          to="/leetcode"
          >LeetCode</NuxtLink
        >
      </nav>

      <!-- Blog Post -->
      <slot />
    </article>
  </main>
</template>
