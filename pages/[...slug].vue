<template>
  <section class="w-full">
    <article
      class="w-full prose dark:prose-invert prose-img:rounded-xl lg:prose-base prose-slate mx-auto text-slate-800 dark:text-slate-100 font-serif"
    >
      <!-- Breadcrumb nav menu -->
      <nav
        class="flex items-center mb-6 py-2 px-4 rounded-lg text-lg [&>*]:mr-4 border border-1 border-slate-300"
      >
        <NuxtLink
          class="breadcrumb-nav dark:text-slate-200 hover:before:visible before:invisible relative -z-0 no-underline"
          to="/"
          >Home</NuxtLink
        >
        <Icon name="octicon:chevron-right-16" />
        <NuxtLink
          class="breadcrumb-nav dark:text-slate-200 hover:before:visible before:invisible relative -z-0 no-underline"
          to="/articles"
          >Articles</NuxtLink
        >
      </nav>
      <!-- Article -->
      <ContentDoc v-slot="{ doc }">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </article>
  </section>
</template>

<script setup></script>

<style scoped>
  article > div a {
    @apply text-[#edae49] !important;
  }

  footer {
    @apply hidden !important;
  }

  .breadcrumb-nav::before {
    @apply content-[''] absolute origin-center w-full h-full scale-x-150 scale-y-125 rounded-md -z-10 bg-gradient-to-r from-[#e9fac8] to-[#d3f9d8] dark:from-transparent dark:to-transparent dark:bg-slate-700;
  }
</style>
