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
          <Icon :name="skillIcon" size="1.75rem" />
        </li>
      </ul>
    </section>

    <!-- Latest Blog Posts -->
    <section>
      <h2 class="font-semibold text-xl mb-2 w-auto">
        <NuxtLink
          to="/blog"
          class="focused-link rounded-lg w-full flex items-center py-2"
        >
          Latest Blog Posts
          <Icon
            name="heroicons:chevron-right-solid"
            class="ml-2 text-green-500"
          />
        </NuxtLink>
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <template v-if="pending">
          <AppBlogSkeleton v-for="skeleton in skeletons" :key="skeleton" />
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

    <!-- Projects -->
    <section>
      <h2 class="font-semibold text-xl mb-2 w-auto">
        <NuxtLink
          to="/projects"
          class="focused-link rounded-lg w-full flex items-center py-2"
        >
          Featured Projects
          <Icon
            name="heroicons:chevron-right-solid"
            class="ml-2 text-green-500"
          />
        </NuxtLink>
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AppProjectCard
          project-title="Deadlines"
          project-url="https://deadlines.oneminch.dev/"
          project-description="Deadlines is a simple, offline deadline tracker made with Vue.js and localForage."
          :tags="['Vue.js', 'localForage']"
        />
        <AppProjectCard
          project-title="EncryptedList"
          project-url="https://encryptedlist.xyz/"
          project-description="EncryptedList is a List of Products & Services that Offer Zero-Knowledge or End-to-End Encryption."
          :tags="['Vue.js', 'Tailwind CSS', 'Airtable']"
        />
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
  const skeletons = [...Array(2).fill(Math.random())];

  // Fetch all blog posts sans LeetCode solutions
  const { pending, data: blogPosts } = await useLazyAsyncData("blog", () =>
    queryContent("/blog").limit(2).find()
  );

  const skillset = ref([
    {
      JavaScript: "skill-icons:javascript",
      HTML: "skill-icons:html",
      CSS: "skill-icons:css",
      Git: "skill-icons:git"
    },
    {
      "Vue.js": "skill-icons:vuejs-dark",
      "Nuxt.js": "skill-icons:nuxtjs-dark",
      "React.js": "skill-icons:react-dark",
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
