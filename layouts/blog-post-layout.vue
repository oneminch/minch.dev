<template>
  <main class="w-full">
    <section class="w-full max-w-4xl mx-auto">
      <header class="w-full max-w-4xl">
        <!-- Navigation -->
        <nav class="hidden md:flex items-center mb-6 py-2 text-lg [&>*]:mr-2">
          <NuxtLink
            class="focused-link py-1 px-3 bg-slate-200 dark:bg-slate-700 dark:text-slate-200 duration-150 rounded-md no-underline"
            to="/"
          >
            Home
          </NuxtLink>
          <NuxtLink
            class="focused-link py-1 px-3 bg-slate-200 dark:bg-slate-700 dark:text-slate-200 duration-150 rounded-md no-underline"
            to="/blog"
          >
            Blog
          </NuxtLink>
        </nav>
        <!-- Blog Content -->
        <slot />
      </header>
    </section>
  </main>
</template>
