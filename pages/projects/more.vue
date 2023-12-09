<script setup>
  definePageMeta({
    title: "More Projects",
    description:
      "More projects that I am currently working on and have worked on."
  });

  // Fetch all other projects
  const { pending, data: projects } = await useLazyAsyncData(
    "all-projects",
    () => queryContent("/projects/more").findOne(),
    {
      transform: (projects) => {
        return {
          visual: projects.body.filter((project) => project.visual),
          nonVisual: projects.body.filter((project) => !project.visual)
        };
      }
    }
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
        class="border-b-[.1rem] border-b-green-500/75"
        external
        >my GitHub profile</nuxt-link
      >.
    </p>
    <!-- Visual Projects -->
    <section class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
      <template v-if="pending">
        <app-project-skeleton
          v-for="skeletonId in generateKeys(4)"
          :key="skeletonId"
        />
      </template>
      <template v-else>
        <app-project-card
          v-for="project in projects.visual"
          :key="project.name"
          :project-title="project.name"
          :project-description="project.description"
          :project-url="project.liveUrl"
          :icon="project.icon"
        />
      </template>
    </section>
    <app-divider class="my-6 md:my-8" />
    <!-- Non-visual Projects -->
    <section class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
      <template v-if="pending">
        <app-project-skeleton
          v-for="skeletonId in generateKeys(2)"
          :key="skeletonId"
        />
      </template>
      <template v-else>
        <app-project-card
          v-for="project in projects.nonVisual"
          :key="project.name"
          :project-title="project.name"
          :project-description="project.description"
          :project-url="project.liveUrl"
          :icon="project.icon"
        />
      </template>
    </section>
  </article>
</template>
