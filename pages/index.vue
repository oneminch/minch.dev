<!-- Landing Page -->
<template>
  <main id="main-content" class="[&>*]:mb-6 last:[&>*]:mb-0">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <!-- Introduction -->
    <section>
      <h1 class="font-semibold text-2xl mb-6">Hi, my name is Dawit 👋</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iste
        praesentium sed eum minus repellendus porro. Explicabo earum ex, odio,
        voluptatem laborum sapiente, aut quo molestiae placeat nobis aliquam
        minus!
      </p>
    </section>

    <!-- Skills -->
    <section>
      <h2 class="font-semibold text-xl mb-1 py-2">Skills</h2>
      <p class="text-zinc-500 dark:text-zinc-400 mb-4">
        The different technologies that I've worked with & experimented with
        over the years.
      </p>
      <ul
        class="p-0 mb-2 space-x-2"
        v-for="(skills, index) in skillset"
        :key="index"
      >
        <li
          v-for="(skillIcon, skillName) in skills"
          :key="skillName"
          :title="skillName"
          class="inline-block"
        >
          <Icon
            :name="skillIcon"
            size="2rem"
            class="rounded-lg ring-1 ring-zinc-200 dark:ring-zinc-800"
          />
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
          Featured Projects
          <Icon
            name="heroicons:chevron-right-solid"
            class="ml-2 text-green-500 group-hover:translate-x-1"
          />
        </nuxt-link>
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <template v-if="projectsPending">
          <AppProjectSkeleton
            v-for="skeletonId in projectSkeletonIds"
            :key="skeletonId"
          />
        </template>
        <template v-else>
          <AppProjectCard
            v-for="featuredProject in projects.featured.slice(0, 2)"
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
          Latest Blog Posts
          <Icon
            name="heroicons:chevron-right-solid"
            class="ml-2 text-green-500 group-hover:translate-x-1"
          />
        </nuxt-link>
      </h2>
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
            :blogTitle="blogPost.longTitle || blogPost.title"
            :title="blogPost.title"
            :url="blogPost._path"
            :pubDate="blogPost.updated"
            :coverImage="blogPost.image"
          />
        </template>
      </div>
    </section>

    <AppFooter />
  </main>
</template>

<script setup>
  const seoMeta = {
    title: "Dawit U - Frontend Developer",
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

  // Skeletons
  const blogSkeletonIds = [...Array(2).fill(Math.random())];
  const projectSkeletonIds = [...Array(2).fill(Math.random())];

  // Fetch latest 2 blog posts
  const { pending: blogsPending, data: blogPosts } = await useLazyAsyncData(
    "blog",
    () => queryContent("/blog").limit(2).find()
  );

  // Fetch 2 featured projects
  const { pending: projectsPending, data: projects } = await useLazyFetch(
    "/api/projects"
  );

  const skillset = ref([
    {
      JavaScript: "skill-icons:javascript",
      HTML: "skill-icons:html",
      CSS: "skill-icons:css",
      Git: "skill-icons:git"
    },
    {
      "Vue.js": "skill-icons:vuejs-light",
      "Nuxt.js": "skill-icons:nuxtjs-light",
      "React.js": "skill-icons:react-light",
      "Next.js": "skill-icons:nextjs-light",
      "Tailwind CSS": "skill-icons:tailwindcss-light"
    },
    {
      "Node.js": "skill-icons:nodejs-light",
      Python: "skill-icons:python-light",
      PostgreSQL: "skill-icons:postgresql-light",
      Flask: "skill-icons:flask-light"
    }
  ]);
</script>
