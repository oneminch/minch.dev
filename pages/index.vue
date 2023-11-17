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
      "React",
      "Vue",
      "Tailwind CSS",
      "Git"
    ],
    tinker: ["Node.js", "Vitest", "Python", "SQL"]
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
    <!-- <nuxt-link
      class="absolute top-4 right-4 rounded-lg py-2 px-4 bg-green-500 text-zinc-800"
      to="/contact"
      id="contact-btn"
      >Contact</nuxt-link
    > -->

    <!-- Introduction -->
    <section class="relative">
      <Icon
        name="mdi:format-quote-close"
        class="text-5xl md:text-7xl text-zinc-200 dark:text-zinc-800 absolute -top-3 md:-top-6 right-0 -z-10"
      />
      <h1 class="font-semibold text-2xl mb-4">
        Hi, I'm Dawit
        <span id="wave">👋</span>
      </h1>
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
      <!-- Primary Tools -->
      <p class="text-zinc-700 dark:text-zinc-300 mb-3">
        My specialty is <span class="subtle-highlight">solving problems</span>,
        and here is my toolbox:
      </p>
      <ul
        class="w-full lg:w-3/4 p-0 pl-2 mb-3 list-disc grid grid-rows-3 sm:grid-rows-2 grid-flow-col-dense"
      >
        <li
          v-for="skillName in skillset.essentials"
          :key="skillName"
          class="text-green-400 list-inside"
        >
          <span class="text-zinc-700 dark:text-zinc-300 font-medium">{{
            skillName
          }}</span>
        </li>
      </ul>
      <!-- Secondary Tools -->
      <p class="text-zinc-700 dark:text-zinc-300 mb-3">
        I'm infinitely curious.
        <span class="subtle-highlight">Always learning</span> and experimenting
        with other tools:
      </p>
      <ul
        class="w-full lg:w-3/4 p-0 pl-2 mb-3 list-disc grid grid-cols-2 sm:grid-cols-3 grid-rows-2 grid-flow-col-dense"
      >
        <li
          v-for="skillName in skillset.tinker"
          :key="skillName"
          class="text-green-400 list-inside"
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
      <p class="text-zinc-700 dark:text-zinc-300 mb-4">
        Passion turned into pixels.
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2">
        <template v-if="projectsPending">
          <app-project-skeleton
            v-for="skeletonId in projectSkeletonIds"
            :key="skeletonId"
          />
        </template>
        <template v-else>
          <app-project-card
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
      <p class="text-zinc-700 dark:text-zinc-300 mb-4">
        Writing is a tool for thinking.
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <template v-if="blogsPending">
          <app-blog-skeleton
            v-for="skeletonId in blogSkeletonIds"
            :key="skeletonId"
          />
        </template>
        <template v-else>
          <app-blog-card
            v-for="blogPost in blogPosts"
            :key="blogPost._id"
            :tags="blogPost.tags"
            :blog-title="blogPost.title"
            :title="blogPost.title"
            :url="blogPost._path"
            :pub-date="blogPost.updated"
            :cover-image="blogPost.image"
          />
        </template>
      </div>
    </section>

    <!-- Other Links -->
    <section class="space-y-2 mb-2">
      <h2 class="font-bold text-xl py-2">More Stuff</h2>

      <div
        class="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:grid-flow-col gap-2 lg:[&_:first-child]:row-span-2 lg:[&_:last-child]:row-span-2"
      >
        <app-link-card
          label="Contact"
          icon="fluent-emoji:e-mail"
          url="/contact"
        ></app-link-card>
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
          label="Resume"
          icon="fluent-emoji:briefcase"
          url="/resume.pdf"
          download-label="Dawit_Urgessa_Resume.pdf"
          :is-download-link="true"
        ></app-link-card>
      </div>
    </section>

    <app-footer />
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

  #wave {
    @apply inline-block ml-1 origin-[70%_70%] animate-[10s_ease_2s_infinite_wave] hover:animate-[1.5s_ease_hoverwave];
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    2.5%,
    7.5% {
      transform: rotate(14deg);
    }
    5% {
      transform: rotate(-8deg);
    }
    10% {
      transform: rotate(-4deg);
    }
    12.5% {
      transform: rotate(10deg);
    }
    15% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes hoverwave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
