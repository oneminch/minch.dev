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
    <h1 class="font-semibold text-2xl mb-4">About Me</h1>

    <!-- Short Bio Summary -->
    <p>
      Hello! My name is Dawit 👋. I craft web interfaces that are
      <span class="highlight">delightful</span> and
      <span class="highlight">accessible</span>.
    </p>
    <p>
      I am currently seeking opportunities to share my passion and expertise.
    </p>
    <hr
      class="block w-2/3 mx-auto md:my-4 border-none bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent h-[1px] rounded-full"
    />
    <p>
      My interest in web development started back in 2016 when I came across the
      web development community on Instagram. I developed a keen interest and
      started to learn more about it from sources like Codecademy and W3Schools.
    </p>
    <figure class="my-4">
      <picture>
        <source
          media="(max-width: 1023px)"
          srcset="/google-search-mobile.png"
        />
        <source media="(min-width: 1024px)" srcset="/google-search-wide.png" />
        <nuxt-img
          loading="lazy"
          format="webp"
          height="100"
          src="/google-search-wide.png"
          alt="A screenshot of searching on google 'where do you write code'"
          class="w-full text-center object-cover rounded-lg border border-zinc-200 dark:border-transparent mb-1"
        />
      </picture>

      <figcaption class="text-sm text-center text-zinc-500">
        One of my first ever dev-related lookups: Googling 'where do you write
        code'
      </figcaption>
    </figure>
    <p>
      This ultimately influenced my decision to pursue a Computer Science
      degree.
    </p>
    <p>
      While building a strong technical foundation in college, I dedicated a lot
      of my free time teaching myself web development and building things out.
    </p>
    <hr
      class="block w-2/3 mx-auto md:my-4 border-none bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent h-[1px] rounded-full"
    />
    <p>
      I enjoy playing story-driven games (Current Favorite - 'A Plague Tale'
      Series).
    </p>
    <p>
      I'm also a hobbyist photographer.
      <a
        href="https://unsplash.com/@oneminch"
        class="focused-link focus:rounded no-underline border-b-[.1rem] border-b-green-400"
        target="_blank"
        >My photos on Unsplash</a
      >
      have been viewed over 6.5 million times 🤯.
    </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 my-4 [&>img]:ring [&>img]:ring-zinc-300 [&>img]:dark:ring-zinc-800"
    >
      <nuxt-img
        format="webp"
        loading="lazy"
        height="200"
        src="https://images.unsplash.com/photo-1547847041-a626718b4017"
        alt="A long exposure shot of City Lake Falls in Cookeville, TN"
        class="w-full object-cover text-center rounded-lg"
      />
      <nuxt-img
        format="webp"
        loading="lazy"
        height="200"
        src="https://images.unsplash.com/photo-1635372708431-64774de60e20"
        alt="An Xbox controller"
        class="w-full object-cover text-center rounded-lg"
      />
      <nuxt-img
        format="webp"
        loading="lazy"
        height="200"
        src="https://images.unsplash.com/photo-1580408485028-225972105876"
        alt="My laptop in a dark environment with a colorful display"
        class="w-full object-cover text-center rounded-lg"
      />
    </div>
  </main>
</template>

<style scoped>
  p {
    @apply text-zinc-700 dark:text-zinc-300 my-4 text-base leading-relaxed;
  }
</style>
