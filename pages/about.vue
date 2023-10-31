<script setup>
  const seoMeta = {
    title: "Dawit's Bio",
    description: "This page contains my short bio.",
    image: "/og-image.png",
    page: "about"
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
</script>

<!-- About Page -->
<template>
  <main id="main-content">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <!-- Name  -->
    <h1 class="font-semibold text-2xl mb-6">About Me</h1>

    <!-- Short Bio Summary -->
    <p>
      Hello! My name is Dawit 👋. I craft web interfaces that are
      <em>delightful</em> and <em>accessible</em>.
    </p>
    <p>
      My interest in web development started back in 2016 when I came across the
      web development community on Instagram. I developed a keen interest and
      started to learn more about it from sources like Codecademy and W3Schools.
    </p>
    <nuxt-img
      format="webp"
      loading="lazy"
      src="/google-search.png"
      alt="A screenshot of searching on google 'where to write code'"
      class="w-full object-cover rounded-lg my-4"
    />
    <p>
      This ultimately influenced my decision to pursue a Computer Science
      degree.
    </p>
    <p>
      While building a strong technical foundation in college, I dedicated a lot
      of my free time teaching myself web development and building things out.
    </p>
    <p>
      My <em>design-oriented</em> approach ensures that every project I touch is
      as aesthetically pleasing as it is accessible and functional. Some of my
      projects receive hundreds of monthly visits.
    </p>
    <p>
      I am currently seeking opportunities to share my passion and expertise.
    </p>
  </main>
</template>

<style scoped>
  p {
    @apply text-zinc-600 dark:text-zinc-400 my-4 text-lg leading-relaxed;
  }
</style>
