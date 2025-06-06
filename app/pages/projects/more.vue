<script setup>
  definePageMeta({
    title: 'More Projects',
    description:
      'More projects that I am currently working on and have worked on.'
  });

  // Fetch all other projects
  const { pending, data: projects } = await useLazyAsyncData(
    'all-projects',
    () => queryCollection('projects').where('title', 'IS', 'More').first()
  );
</script>

<!-- Projects.more() Page -->
<template>
  <article>
    <h1 class="mb-4 text-3xl font-bold text-left">
      Projects<span class="font-mono text-green-500">.more()</span>
    </h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      I build things in the open. Check out
      <nuxt-link
        to="https://github.com/oneminch"
        class="border-b-[.1rem] border-b-green-500/75 focus-visible:global-focus"
        external
        >my GitHub profile</nuxt-link
      >.
    </p>

    <section class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
      <template v-if="pending">
        <app-project-skeleton
          v-for="skeletonId in generateKeys(4)"
          :key="skeletonId" />
      </template>
      <template v-else>
        <app-project-card
          v-for="project in projects.body"
          :key="project.name"
          :project-title="project.name"
          :project-description="project.description"
          :project-url="project.liveUrl"
          :icon="project.icon" />
      </template>
    </section>

    <!-- Link Back to Featured Projects -->
    <nuxt-link
      to="/projects"
      class="flex items-center justify-center w-24 py-2 mt-6 font-semibold no-underline duration-150 bg-green-500 rounded-md focus-visible:global-focus text-zinc-800 group/hover-effect">
      <Icon
        name="heroicons:chevron-left-20-solid"
        class="mr-1 group-hover/hover-effect:-translate-x-1" />
      Back
    </nuxt-link>
  </article>
</template>
