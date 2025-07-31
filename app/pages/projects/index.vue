<script setup>
  definePageMeta({
    title: 'Projects',
    description: 'Projects that I am currently working on and have worked on.'
  });

  // Fetch all featured projects
  const { pending, data: allProjects } = await useLazyAsyncData(
    'projects',
    () =>
      queryCollection('projects')
        .select('description', 'icon', 'title', 'path')
        .all()
  );
</script>

<!-- Projects Page -->
<template>
  <article>
    <h1 class="mb-4 text-3xl font-bold text-left">Projects</h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      Each project is a story waiting to be told.
    </p>
    <!-- Featured Projects -->
    <section
      class="grid grid-cols-1 grid-rows-2 gap-4 mb-10 lg:grid-cols-2 lg:grid-flow-row">
      <template v-if="pending">
        <app-project-skeleton
          v-for="skeletonId in generateKeys(5)"
          :key="skeletonId" />
      </template>
      <template v-else>
        <app-project-card
          v-for="project in allProjects"
          :key="project.title"
          :icon="project.icon"
          :project-title="project.title"
          :project-description="project.description"
          :project-url="project.path" />
      </template>
    </section>
  </article>
</template>
