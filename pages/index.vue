<script setup>
  const seoMeta = {
    title: "Dawit - Frontend Developer",
    description:
      "I'm a frontend engineer who's passionate about the open web (JavaScript, React.js, Vue.js)",
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
      "Vue.js / Nuxt.js",
      "React",
      "Tailwind CSS",
      "Git"
    ],
    tinker: ["Next.js", "Node.js", "Python / Flask", "SQL", "..."]
  });

  // Skeletons
  const blogSkeletonIds = [...Array(2).fill(Math.random())];
  const projectSkeletonIds = [...Array(2).fill(Math.random())];

  // Fetch latest 2 blog posts
  const { pending: blogsPending, data: blogPosts } = await useLazyAsyncData(
    "featured-posts",
    () => queryContent("/blog").sort({ publishedOn: -1 }).limit(2).find()
  );

  // Fetch 2 featured projects
  const featuredProjects = ref([]);

  const { pending: projectsPending, data: projects } = await useLazyFetch(
    "/api/projects",
    {
      key: "featured-projects",
      query: {
        type: "featured"
      }
    }
  );
  watch(projects, (allProjects) => {
    const { featured } = JSON.parse(JSON.stringify(allProjects));

    featuredProjects.value = featured.slice(0, 2);
  });
</script>

<!-- Landing Page -->
<template>
  <main id="main-content" class="space-y-6">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <!-- Introduction -->
    <section>
      <h1 class="font-semibold text-2xl mb-6">Hi, I'm Dawit 👋</h1>
      <p class="text-zinc-600 dark:text-zinc-300 mb-6 text-xl font-medium">
        I craft <em>captivating</em> and <em>accessible</em> web interfaces.
      </p>
      <p class="text-zinc-600 dark:text-zinc-300 mb-6">
        <!-- <br /> -->
        My design-oriented approach ensures that every project I touch is as
        aesthetically pleasing as it is accessible and functional.
      </p>
    </section>

    <!-- Skills -->
    <section>
      <h2 class="font-semibold text-xl mb-1 py-2">Skills</h2>
      <p class="text-zinc-600 dark:text-zinc-300 mb-6">
        My specialty is solving problems, and here is my toolbox:
      </p>
      <ul
        class="w-full lg:w-3/4 p-0 pl-4 mb-4 list-disc grid grid-rows-3 grid-flow-col-dense"
      >
        <li
          v-for="skillName in skillset.essentials"
          :key="skillName"
          class="text-green-400"
        >
          <span class="text-zinc-600 dark:text-zinc-300 font-medium">{{
            skillName
          }}</span>
        </li>
      </ul>
      <p class="text-zinc-600 dark:text-zinc-300 mb-6">
        I'm infinitely curious. Always learning and experimenting with other
        tools:
      </p>
      <ul
        class="w-full lg:w-3/4 p-0 pl-4 mb-4 list-disc grid grid-rows-3 grid-flow-col-dense"
      >
        <li
          v-for="skillName in skillset.tinker"
          :key="skillName"
          class="text-green-400 [&_span]:last:text-green-400"
        >
          <span class="text-zinc-600 dark:text-zinc-300 font-medium">{{
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
      <p class="text-zinc-600 dark:text-zinc-300 mb-6">
        I'm always building things from scratch either to sharpen my skills or
        to solve a very specific real-world problem.
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
            v-for="featuredProject in featuredProjects"
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
      <p class="text-zinc-600 dark:text-zinc-300 mb-6">
        I use writing as a tool for thought. In the form of articles, I
        sometimes share some of the things I've learned or the process behind
        some of my projects.
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
          label="Resume"
          icon="fluent-emoji:briefcase"
          url="/resume"
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
          is-external="true"
          url="https://github.com/oneminch/garden"
        ></app-link-card>
        <app-link-card
          label="Photography"
          icon="fluent-emoji:camera"
          is-external="true"
          url="https://unsplash.com/@oneminch"
        ></app-link-card>
        <app-link-card
          label="TBD"
          icon="fluent-emoji:red-question-mark"
          is-external="true"
          url="https://github.com/oneminch/garden"
        ></app-link-card>
      </div>
    </section>

    <AppFooter />
  </main>
</template>

<style scoped>
  em {
    position: relative;
    font-style: normal;
  }
  em::after {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    left: 0rem;
    right: 0rem;
    height: 0.75rem;
    z-index: -1;
    background-image: url("/squiggly.svg");
    opacity: 0.85;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 1rem;
  }

  p > em::after {
    bottom: -0.3rem;
    height: 0.5rem;
    left: 0rem;
    right: 0rem;
  }
</style>
