<!-- Projects Page -->
<template>
  <main id="main-content">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="text-3xl text-left font-bold mb-8">Projects</h1>

    <!-- Featured Projects -->
    <section
      class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:grid-rows-[1fr_75px_1fr] lg:grid-flow-col mb-6"
    >
      <template v-if="pending">
        <AppProjectSkeleton
          v-for="skeleton in projectSkeletonIds()"
          :key="skeleton"
          class="lg:first:row-span-2 lg:last:row-span-2"
        />
      </template>
      <template v-else>
        <AppProjectCard
          v-for="featuredProject in projects.featured"
          :key="featuredProject.name"
          :img-url="featuredProject.openGraphImageUrl"
          :project-title="featuredProject.name"
          :project-description="featuredProject.description"
          :project-url="featuredProject.homepageUrl"
          :tags="featuredProject.repositoryTopics"
          class="lg:first:row-span-2 lg:last:row-span-2"
        />
      </template>
    </section>

    <hr
      class="w-3/4 h-[1px] my-6 md:my-12 mx-auto border-none bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent rounded-full"
    />

    <!-- Remaining Projects: Visual -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <template v-if="pending">
        <AppProjectSkeleton
          v-for="skeleton in projectSkeletonIds()"
          :key="skeleton"
        />
      </template>
      <template v-else>
        <AppProjectCard
          v-for="project in projects.visual"
          :key="project.name"
          :img-url="project.openGraphImageUrl"
          :project-title="project.name"
          :project-description="project.description"
          :project-url="project.homepageUrl"
          :tags="project.repositoryTopics"
        />
      </template>
    </section>

    <hr
      class="w-3/4 h-[1px] my-6 md:my-12 mx-auto border-none bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent rounded-full"
    />

    <!-- Remaining Projects: Non-visual -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <AppProjectCard
        v-for="project in projects.nonVisual"
        :key="project.name"
        :img-url="''"
        :project-title="project.name"
        :project-description="project.description"
        :project-url="project.homepageUrl"
        :tags="project.repositoryTopics"
      />
    </section>
  </main>
</template>

<script setup>
  const seoMeta = {
    title: "Dawit's Projects",
    description:
      "This page contains projects that I am currently working on and have worked on.",
    image: "/og-image.png",
    page: "projects"
  };

  useServerSeoMeta({
    title: seoMeta.title,
    ogTitle: seoMeta.title,
    twitterTitle: seoMeta.title,
    description: seoMeta.description,
    ogDescription: seoMeta.description,
    twitterDescription: seoMeta.description,
    ogImage: seoMeta.image,
    twitterImage: seoMeta.image,
    ogUrl: `https://oneminch.dev/${seoMeta.page}`,
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });

  // Skeletons
  const projectSkeletonIds = () => [...Array(4).fill(Math.random())];

  const { pending, data: projects } = await useLazyFetch("/api/projects");
</script>
