<script setup>
  definePageMeta({
    title: "Dawit · Full-Stack Engineer",
    description: "I craft delightful and accessible web apps."
  });

  useHead({
    titleTemplate: ""
  });

  const route = useRoute();

  useSeoMeta({
    ogTitle: () => route.meta.title,
    twitterTitle: () => route.meta.title
  });

  const skillset = ref({
    essentials: [
      "TypeScript",
      "React",
      "Vue",
      "Tailwind CSS",
      "Node.js",
      "Postgres"
    ],
    tinker: ["Prisma", "Vitest", "Python", "Flask"]
  });

  // Fetch latest 2 blog posts
  const { pending: blogsPending, data: blogPosts } = await useLazyAsyncData(
    "featured-posts",
    () => queryContent("/blog").sort({ published_on: -1 }).limit(2).find()
  );

  // Fetch 2 featured projects
  const { pending: projectsPending, data: projects } = await useLazyAsyncData(
    "featured-projects",
    () => queryContent("/projects").limit(2).find()
  );
</script>

<!-- Landing Page -->
<template>
  <article class="[&>*]:my-4 first:[&>*]:mt-0 [&>hr]:my-6 md:[&>hr]:my-10">
    <!-- Introduction -->
    <section>
      <h1 class="mb-4 text-2xl font-semibold">
        Hi, I'm Dawit
        <span id="wave">👋</span>
      </h1>
      <p class="mb-4 text-xl font-medium text-zinc-700 dark:text-zinc-300">
        I craft
        <span class="highlight">delightful</span>
        and <span class="highlight">accessible</span>
        web apps...
      </p>
      <!-- <p class="my-2 text-zinc-700 dark:text-zinc-300">
        I am
        <span class="subtle-highlight">currently seeking opportunities</span>
        to share my passion and expertise.
      </p> -->
    </section>
    <!-- Skills -->
    <section>
      <h2 class="py-2 mb-1 text-xl font-semibold">Skills</h2>
      <!-- Primary Tools -->
      <p class="mb-3 text-zinc-700 dark:text-zinc-300">
        My specialty is <span class="subtle-highlight">solving problems</span>,
        and my toolbox includes:
      </p>
      <ul
        class="grid w-full grid-flow-col-dense grid-rows-3 p-0 pl-2 mb-3 list-disc gap-y-2 lg:w-3/4"
      >
        <li
          v-for="skillName in skillset.essentials"
          :key="skillName"
          class="text-green-500 list-inside"
        >
          <span class="font-medium text-zinc-700 dark:text-zinc-300">{{
            skillName
          }}</span>
        </li>
      </ul>
      <!-- Secondary Tools -->
      <p class="mb-3 text-zinc-700 dark:text-zinc-300">
        I'm
        <span class="subtle-highlight">always learning</span> and exploring:
      </p>
      <ul
        class="grid w-full grid-flow-col-dense grid-rows-2 p-0 pl-2 mb-3 list-disc gap-y-2 lg:w-3/4"
      >
        <li
          v-for="skillName in skillset.tinker"
          :key="skillName"
          class="text-green-500 list-inside"
        >
          <span class="font-medium text-zinc-700 dark:text-zinc-300">{{
            skillName
          }}</span>
        </li>
      </ul>
    </section>
    <!-- Projects -->
    <section>
      <h2 class="w-auto mb-2 text-xl font-semibold group">
        <nuxt-link
          to="/projects"
          class="flex items-center w-full py-2 rounded-lg focus-visible:global-focus"
        >
          My Projects
          <Icon
            name="heroicons:chevron-right-solid"
            class="ml-2 text-green-500 group-hover:translate-x-1"
          />
        </nuxt-link>
      </h2>
      <p class="mb-4 text-zinc-700 dark:text-zinc-300">
        Passion turned into pixels.
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2">
        <template v-if="projectsPending">
          <app-project-skeleton
            v-for="skeletonId in generateKeys(2)"
            :key="skeletonId"
          />
        </template>
        <template v-else>
          <app-project-card
            v-for="project in projects"
            :key="project.title"
            :icon="project.icon"
            :project-title="project.title"
            :project-description="project.description"
            :project-url="project._path"
          />
        </template>
      </div>
    </section>
    <!-- Latest Blog Posts -->
    <section>
      <h2 class="w-auto mb-2 text-xl font-semibold group">
        <nuxt-link
          to="/blog"
          class="flex items-center w-full py-2 rounded-lg focus-visible:global-focus"
        >
          My Articles
          <Icon
            name="heroicons:chevron-right-solid"
            class="ml-2 text-green-500 group-hover:translate-x-1"
          />
        </nuxt-link>
      </h2>
      <p class="mb-4 text-zinc-700 dark:text-zinc-300">
        Writing as a tool for thinking.
      </p>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <template v-if="blogsPending">
          <app-blog-skeleton
            v-for="skeletonId in generateKeys(2)"
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
            :pub-date="blogPost.published_on"
            :cover-image="blogPost.image"
          />
        </template>
      </div>
    </section>
    <app-divider />
    <!-- Other Links -->
    <section class="mb-2 space-y-2">
      <div
        class="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:grid-flow-col gap-2 lg:[&_:first-child]:row-span-2 lg:[&_:last-child]:row-span-2 [&_:first-child]:col-span-2 [&_:last-child]:col-span-2 md:[&_:first-child]:col-span-1 md:[&_:last-child]:col-span-1"
      >
        <div
          class="flex items-center justify-center p-[1px] overflow-hidden font-medium shrink-0 relative -z-0 before:content-[''] before:absolute before:-inset-[1px] before:-z-10 before:bg-gradient-to-b before:from-green-500 before:to-lime-400 rounded-[calc(.375rem+1px)] dark:before:opacity-60 focus-within:ring-2 ring-offset-0 focus-within:ring-green-400 focus-within:ring-opacity-75"
        >
          <div
            class="flex flex-col items-center justify-center w-full h-full gap-6 p-4 bg-white rounded-md dark:bg-zinc-800"
          >
            <p class="text-lg font-bold">Let's Chat.</p>
            <nuxt-link
              class="px-4 py-2 bg-green-500 rounded-lg focus-visible:outline-none text-zinc-800"
              to="/contact"
              id="contact-btn"
              >Message</nuxt-link
            >
          </div>
        </div>
        <app-link-card
          label="LeetCode"
          icon="fluent-emoji:teacup-without-handle"
          url="/leetcode"
        ></app-link-card>
        <app-link-card
          label="Bookmarks"
          icon="fluent-emoji:bookmark"
          url="/bookmarks"
        ></app-link-card>
        <app-link-card
          label="Second Brain"
          icon="fluent-emoji:brain"
          :is-external-url="true"
          url="https://github.com/oneminch/notes"
        ></app-link-card>
        <app-link-card
          label="Photography"
          icon="fluent-emoji:camera"
          :is-external-url="true"
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
  </article>
</template>

<style scoped>
  #contact-btn {
    animation: 1500ms linear 2000ms infinite pulse;
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
