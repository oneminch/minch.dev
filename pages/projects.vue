<!-- Projects Page -->
<template>
  <main id="main-content" class="space-y-6">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="text-3xl text-left font-bold mb-6">Projects</h1>

    <!-- Featured Projects -->
    <section
      class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:grid-rows-[1fr_75px_1fr] lg:grid-flow-col"
    >
      <template v-if="pending">
        <AppBlogSkeleton
          v-for="skeleton in featuredProjectSkeletons"
          :key="skeleton"
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

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <template v-if="pending">
        <AppBlogSkeleton
          v-for="skeleton in featuredProjectSkeletons"
          :key="skeleton"
        />
      </template>
      <template v-else>
        <AppProjectCard
          v-for="project in projects.remaining"
          :key="project.name"
          :img-url="project.openGraphImageUrl"
          :project-title="project.name"
          :project-description="project.description"
          :project-url="project.homepageUrl"
          :tags="project.repositoryTopics"
        />
      </template>
    </section>
  </main>
</template>

<script setup>
  import { isProxy, toRaw } from "vue";

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
  const featuredProjectSkeletons = [...Array(4).fill(Math.random())];

  const { pending, data: projects } = await useLazyFetch("/api/projects");

  // watch(projects, (newProjects) => {
  //   const rawProjects = isProxy(newProjects) ? toRaw(newProjects) : newProjects;
  //   const featuredProjects = rawProjects.filter(
  //     (project) => project.repositoryTopics.indexOf("featured") > -1
  //   );
  //   console.log(toRaw(newProjects));
  //   console.log(toRaw(featuredProjects));
  // });

  /*
  project = {
    name
    description
    homepageUrl
    openGraphImageUrl
    repositoryTopics
    url
  }
  */

  console.log(await JSON.parse(JSON.stringify(projects)));
  // console.log(featuredProjects);
</script>
