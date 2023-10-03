<!-- Projects Page -->
<template>
  <main id="main-content">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="text-3xl text-left font-bold mb-6">Projects</h1>

    <section
      class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:grid-rows-[1fr_75px_1fr] lg:grid-flow-col"
    >
      <AppProjectCard
        img-url="https://raw.githubusercontent.com/oneminch/deadlines/main/src/assets/screenshot.jpg"
        project-title="Deadlines"
        project-description="A simple, offline deadline tracker made with Vue.js and localForage."
        project-url="https://deadlines.oneminch.dev/"
        :tags="['Vue.js', 'localForage']"
        class="lg:row-span-2"
      />
      <AppProjectCard
        img-url="https://raw.githubusercontent.com/oneminch/netflix-ui-clone/main/public/screenshot.png"
        project-title="Netflix UI Clone"
        project-description="A UI Clone of the Netflix web app made with React.js and Tailwind CSS."
        project-url="https://oneminch.github.io/netflix-ui-clone/"
        :tags="['React.js', 'Tailwind CSS']"
      />
      <AppProjectCard
        img-url="https://raw.githubusercontent.com/oneminch/font-search/main/public/screenshot.png"
        project-title="Font Search"
        project-description="A search engine for fonts on Fontsource with shareable search results."
        project-url="https://oneminch.github.io/font-search/"
        :tags="['JavaScript', 'Windi CSS']"
      />
      <AppProjectCard
        img-url="https://raw.githubusercontent.com/oneminch/encrypted-list/main/public/screenshot.png"
        project-title="EncryptedList"
        project-description="A List of Products & Services that Offer Zero-Knowledge or End-to-End Encryption."
        project-url="https://encryptedlist.xyz/"
        :tags="['Vue.js', 'Airtable']"
        class="lg:row-span-2"
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

  // const { pending, data: projects } = await useLazyFetch("/api/projects");

  // console.log(JSON.parse(JSON.stringify(projects)));
</script>
