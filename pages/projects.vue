<!-- Projects Page -->
<template>
  <main id="projects">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1 class="text-3xl text-left font-bold mb-6">Projects</h1>

    <AppProjectCard
      imgUrl="https://raw.githubusercontent.com/oneminch/deadlines/main/src/assets/screenshot.jpg"
      projectTitle="Deadlines"
      project-description="Deadlines is a simple, offline deadline tracker made with Vue.js and localForage."
      project-url="https://deadlines.oneminch.dev/"
      :tags="['Vue.js', 'localForage']"
    />
    <AppProjectCard
      imgUrl="https://repository-images.githubusercontent.com/321511833/01d2663a-69db-4aa1-9bbf-c566c94acdde"
      projectTitle="EncryptedList"
      project-description="EncryptedList is a List of Products & Services that Offer Zero-Knowledge or End-to-End Encryption."
      project-url="https://encryptedlist.xyz/"
      :tags="['Vue.js', 'Tailwind CSS', 'Airtable']"
    />
  </main>
</template>

<script setup>
  const seoMeta = {
    title: "Dawit's Projects",
    description:
      "This page contains projects that I am currently working on and have worked on.",
    image: "/og-image.png"
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
    ogUrl: `http://oneminch.dev${useRoute().fullPath}`,
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });
</script>
