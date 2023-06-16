<template>
  <main id="post" class="w-full">
    <article
      class="w-full max-w-4xl prose lg:prose-base dark:prose-invert prose-img:rounded-lg prose-slate prose-a:no-underline prose-a:border-b-[1.5px] prose-a:border-b-green-400 prose-pre:bg-slate-700 prose-code:leading-snug prose-code:font-normal prose-code:bg-slate-700 prose-code:text-slate-100 prose-code:px-2 prose-code:py-0 prose-code:inline-block prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none mx-auto text-slate-800 dark:text-slate-100"
    >
      <!-- Breadcrumb nav menu -->
      <nav
        class="not-prose flex items-center mb-6 py-2 px-4 text-lg [&>*]:mr-4"
      >
        <NuxtLink
          class="breadcrumb-nav-item focused-link dark:text-slate-200 hover:before:visible before:invisible relative -z-0 no-underline"
          to="/"
          >Home</NuxtLink
        >
        <Icon name="heroicons:chevron-right-solid" />
        <NuxtLink
          class="breadcrumb-nav-item focused-link dark:text-slate-200 hover:before:visible before:invisible relative -z-0 no-underline"
          to="/blog"
          >Blog</NuxtLink
        >
      </nav>

      <!-- Blog Post -->
      <slot />
    </article>
  </main>
</template>

<style scoped>
  .breadcrumb-nav-item::before {
    @apply content-[''] absolute origin-center w-full h-full scale-x-150 scale-y-125 rounded-md -z-10 bg-gradient-to-r from-green-200 to-yellow-200 dark:from-transparent dark:to-transparent dark:bg-slate-700;
  }
</style>
