<script setup>
  const seoMeta = {
    title: "Dawit - Frontend Developer",
    description: "I craft delightful and accessible web interfaces.",
    image: "/og-image.png",
    page: ""
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

  const skillset = ref({
    essentials: [
      "HTML + CSS",
      "JavaScript",
      "React / Next.js",
      "Vue.js / Nuxt.js",
      "Tailwind CSS",
      "Git"
    ],
    tinker: ["Node.js", "Astro", "Jest", "Python / Flask", "SQL", "..."]
  });

  // Skeletons
  const blogSkeletonIds = [...Array(2).fill(Math.random())];
  const projectSkeletonIds = [...Array(2).fill(Math.random())];

  // Fetch latest 2 blog posts
  const { pending: blogsPending, data: blogPosts } = await useLazyAsyncData(
    "featured-posts",
    () => queryContent("/blog").sort({ publishedOn: -1 }).limit(2).find()
  );

  // Fetch featured projects
  const { pending: projectsPending, data: projects } = await useLazyFetch(
    "/api/projects",
    {
      key: "featuredprojects",
      query: {
        type: "featured",
        limit: 2
      }
    }
  );
</script>

<!-- Landing Page -->
<template>
  <main id="main-content" class="space-y-4 relative">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <!-- contact button -->
    <nuxt-link
      class="absolute top-4 right-4 rounded-lg py-2 px-4 bg-green-500 text-zinc-800"
      to="/contact"
      id="contact-btn"
      >Contact</nuxt-link
    >

    <!-- Opening quote mark (decorative) -->
    <Icon
      name="mdi:format-quote-open"
      size="3rem"
      class="text-zinc-200 dark:text-zinc-800 absolute -top-4 left-2 -z-10"
    />

    <!-- Introduction -->
    <section>
      <h1 class="font-semibold text-2xl mb-6">Hi, I'm Dawit 👋</h1>
      <p class="text-zinc-700 dark:text-zinc-300 mb-4 text-xl font-medium">
        I craft
        <span class="highlight">delightful</span>
        and <span class="highlight">accessible</span>
        web interfaces...
      </p>
      <p class="text-zinc-700 dark:text-zinc-300 my-2">
        My design-oriented approach ensures that every project I touch is as
        aesthetically pleasing as it is functional.
      </p>
      <p class="text-zinc-700 dark:text-zinc-300 my-2">
        I am <span class="highlight">currently seeking opportunities</span> to
        share my passion and expertise.
      </p>
    </section>

    <!-- Skills -->
    <section>
      <h2 class="font-semibold text-xl mb-1 py-2">Skills</h2>
      <p class="text-zinc-700 dark:text-zinc-300 mb-3">
        My specialty is <span class="subtle-highlight">solving problems</span>,
        and here is my toolbox:
      </p>
      <ul
        class="w-full lg:w-3/4 p-0 pl-4 mb-3 list-disc grid grid-rows-3 grid-flow-col-dense"
      >
        <li
          v-for="skillName in skillset.essentials"
          :key="skillName"
          class="text-green-400"
        >
          <span class="text-zinc-700 dark:text-zinc-300 font-medium">{{
            skillName
          }}</span>
        </li>
      </ul>
      <p class="text-zinc-700 dark:text-zinc-300 mb-3">
        I'm infinitely curious.
        <span class="subtle-highlight">Always learning</span> and experimenting
        with other tools:
      </p>
      <ul
        class="w-full lg:w-3/4 p-0 pl-4 mb-3 list-disc grid grid-rows-3 grid-flow-col-dense"
      >
        <li
          v-for="skillName in skillset.tinker"
          :key="skillName"
          class="text-green-400 [&_span]:last:text-green-400"
        >
          <span class="text-zinc-700 dark:text-zinc-300 font-medium">{{
            skillName
          }}</span>
        </li>
      </ul>
    </section>

    <!-- Projects -->
    <section>
      <h2 class="font-semibold text-xl mb-2 w-auto group">
        <nuxt-link
          to="/projects"
          class="focused-link rounded-lg w-full flex items-center py-2"
        >
          My Projects
          <Icon
            name="heroicons:chevron-right-solid"
            class="ml-2 text-green-500 group-hover:translate-x-1"
          />
        </nuxt-link>
      </h2>
      <p class="text-zinc-700 dark:text-zinc-300 mb-6">
        Passion turned into pixels.
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <template v-if="projectsPending">
          <AppProjectSkeleton
            v-for="skeletonId in projectSkeletonIds"
            :key="skeletonId"
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
          />
        </template>
      </div>
    </section>

    <!-- Latest Blog Posts -->
    <section>
      <h2 class="font-semibold text-xl mb-2 w-auto group">
        <nuxt-link
          to="/blog"
          class="focused-link rounded-lg w-full flex items-center py-2"
        >
          My Articles
          <Icon
            name="heroicons:chevron-right-solid"
            class="ml-2 text-green-500 group-hover:translate-x-1"
          />
        </nuxt-link>
      </h2>
      <p class="text-zinc-700 dark:text-zinc-300 mb-6">
        Writing is a tool for thinking.
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <template v-if="blogsPending">
          <AppBlogSkeleton
            v-for="skeletonId in blogSkeletonIds"
            :key="skeletonId"
          />
        </template>
        <template v-else>
          <AppBlogCard
            v-for="blogPost in blogPosts"
            :key="blogPost._id"
            :tags="blogPost.tags"
            :blogTitle="blogPost.title"
            :title="blogPost.title"
            :url="blogPost._path"
            :pubDate="blogPost.updated"
            :coverImage="blogPost.image"
          />
        </template>
      </div>
    </section>

    <!-- Other Links -->
    <section class="space-y-2 mb-2">
      <h2 class="font-bold text-xl py-2">More Stuff</h2>

      <div
        class="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:grid-flow-col gap-4 lg:gap-2 lg:[&_:first-child]:row-span-2 lg:[&_:last-child]:row-span-2"
      >
        <app-link-card
          label="Contact"
          url="/contact"
          icon="fluent-emoji:e-mail"
        ></app-link-card>
        <!-- <a
          download="Dawit_Urgessa_Resume.pdf"
          href="/resume.pdf"
          class="focused-link card-style flex flex-col justify-center items-center px-2 pt-2 pb-3 relative rounded-xl font-medium overflow-hidden transition-colors duration-150 hover:bg-green-50/25 dark:hover:bg-zinc-700/75"
        >
          <Icon name="fluent-emoji:briefcase" size="2.5rem" class="mb-2 p-1" />

          <span>Resume</span>

          <Icon
            name="heroicons:arrow-down-tray-20-solid"
            aria-label="Download resume file"
            size="1.25rem"
            class="absolute top-2 right-2 flex-shrink-0 text-green-500"
          />
        </a> -->
        <app-link-card
          label="LeetCode"
          icon="fluent-emoji:teacup-without-handle"
          url="/leetcode"
        ></app-link-card>
        <app-link-card
          label="Picks"
          icon="fluent-emoji:leafy-green"
          url="/picks"
        ></app-link-card>
        <app-link-card
          label="Notes"
          icon="fluent-emoji:spiral-notepad"
          :is-external="true"
          url="https://github.com/oneminch/garden"
        ></app-link-card>
        <app-link-card
          label="Photography"
          icon="fluent-emoji:camera"
          :is-external="true"
          url="https://unsplash.com/@oneminch"
        ></app-link-card>
        <app-link-card
          label="TBD"
          icon="fluent-emoji:red-question-mark"
          :is-external="true"
          url="https://github.com/oneminch/garden"
        ></app-link-card>
      </div>
    </section>

    <AppFooter />
  </main>
</template>

<style scoped>
  #contact-btn {
    animation: 1500ms linear 1500ms infinite pulse;
  }
  @keyframes pulse {
    0% {
      box-shadow: #4ade80 0 0 0 0;
    }
    50% {
      box-shadow: #4ade8000 0 0 0 0.5rem;
    }
  }
</style>
