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
  const projectSkeletonIds = (n) => [...Array(n).fill(Math.random())];

  const { pending, data: projects } = await useLazyFetch("/api/projects", {
    key: "allprojects",
    query: {
      type: "showcase",
      limit: 25
    }
  });
</script>

<!-- Projects Page -->
<template>
  <main id="main-content">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="mb-4 text-3xl font-bold text-left">
      Projects<span class="font-mono text-green-500">.more()</span>
    </h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      I build things in the open. Check out
      <nuxt-link
        to="https://github.com/oneminch"
        class="border-b border-b-green-400/75"
        external
        >my GitHub</nuxt-link
      >.
    </p>

    <!-- Remaining Projects: Visual -->
    <section class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
      <template v-if="pending">
        <app-project-skeleton
          v-for="skeletonId in projectSkeletonIds(4)"
          :key="skeletonId"
        />
      </template>
      <template v-else>
        <app-project-card
          v-for="project in projects.visual"
          :key="project.name"
          :img-url="project.openGraphImageUrl"
          :project-title="project.name"
          :project-description="project.description"
          :project-url="project.homepageUrl"
        />
      </template>
    </section>

    <hr
      class="w-3/4 h-[1px] my-6 md:my-8 mx-auto border-none bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent rounded-full"
    />

    <!-- Remaining Projects: Non-visual -->
    <section class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
      <template v-if="pending">
        <app-project-skeleton
          v-for="skeletonId in projectSkeletonIds(2)"
          :key="skeletonId"
        />
      </template>
      <template v-else>
        <app-project-card
          v-for="project in projects.nonVisual"
          :key="project.name"
          :img-url="''"
          :project-title="project.name"
          :project-description="project.description"
          :project-url="project.homepageUrl"
        />
      </template>
    </section>
  </main>
</template>
