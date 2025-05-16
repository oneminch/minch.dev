<script setup>
  definePageMeta({
    title: 'About',
    description: 'Things About Me.'
  });

  const { skillset } = useAppConfig();
</script>

<!-- About Page -->
<template>
  <article>
    <!-- Name  -->
    <h1 class="mb-4 text-2xl font-semibold">About Me</h1>
    <!-- Short Bio Summary -->
    <p>
      Hello! My name is Dawit 👋. I craft systems that are
      <span class="highlight">delightful</span> and
      <span class="highlight">accessible</span>.
    </p>
    <!-- <p class="my-2 text-zinc-700 dark:text-zinc-300">
      I am
      <span class="subtle-highlight">currently seeking opportunities</span>
      to share my passion and expertise.
    </p> -->
    <app-divider class="md:my-6" />
    <p>
      My interest in software development started back in 2016 when I came
      across the developer community on Instagram. I became deeply fascinated by
      it and started to learn more from sources like Codecademy and W3Schools.
    </p>
    <figure class="my-4">
      <picture>
        <source
          media="(max-width: 1023px)"
          srcset="/google-search-mobile.png" />
        <source media="(min-width: 1024px)" srcset="/google-search-wide.png" />
        <nuxt-img
          loading="lazy"
          preload
          placeholder
          format="webp"
          height="100"
          src="/google-search-wide.png"
          alt="A screenshot of searching on google 'where do you write code'"
          class="object-cover w-full mb-1 text-center border rounded-lg border-zinc-200 dark:border-transparent" />
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
    <!-- Skills -->
    <h2 class="py-2 mb-1 text-xl font-semibold">Skills</h2>
    <!-- Primary Tools -->
    <p class="mb-3 text-zinc-700 dark:text-zinc-300">
      My specialty is <span class="subtle-highlight">solving problems</span>,
      and my toolbox includes:
    </p>
    <ul
      class="grid w-full grid-flow-col-dense grid-rows-3 p-0 pl-2 mb-3 list-disc gap-y-2 lg:w-3/4">
      <li
        v-for="skillName in skillset.essentials"
        :key="skillName"
        class="text-green-500 list-inside">
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
      class="grid w-full grid-flow-col-dense grid-rows-2 p-0 pl-2 mb-3 list-disc gap-y-2 lg:w-3/4">
      <li
        v-for="skillName in skillset.tinker"
        :key="skillName"
        class="text-green-500 list-inside">
        <span class="font-medium text-zinc-700 dark:text-zinc-300">{{
          skillName
        }}</span>
      </li>
    </ul>
    <app-divider class="md:my-6" />
    <p>
      I'm a hobbyist photographer.
      <a
        href="https://unsplash.com/@oneminch"
        class="focus-visible:global-focus focus-visible:rounded-sm no-underline border-b-[.1rem] border-b-green-500/75"
        target="_blank"
        external
        >My photos on Unsplash</a
      >
      have over 7 million views 🤯.
    </p>
    <br />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 my-4 [&>img]:ring [&>img]:ring-zinc-300 [&>img]:dark:ring-zinc-800">
      <nuxt-img
        preload
        placeholder
        format="webp"
        loading="lazy"
        height="200"
        src="https://images.unsplash.com/photo-1547847041-a626718b4017"
        alt="A long exposure shot of City Lake Falls in Cookeville, TN"
        class="object-cover w-full text-center rounded-lg" />
      <nuxt-img
        preload
        placeholder
        format="webp"
        loading="lazy"
        height="200"
        src="https://images.unsplash.com/photo-1635372708431-64774de60e20"
        alt="An Xbox controller"
        class="object-cover w-full text-center rounded-lg" />
      <nuxt-img
        preload
        placeholder
        format="webp"
        loading="lazy"
        height="200"
        src="https://images.unsplash.com/photo-1580408485028-225972105876"
        alt="My laptop in a dark environment with a colorful display"
        class="object-cover w-full text-center rounded-lg" />
    </div>
    <br />
    <p>
      I also enjoy playing story-driven games. So much so that I built
      <a
        href="https://playtales.minch.dev"
        class="focus-visible:global-focus focus-visible:rounded-sm no-underline border-b-[.1rem] border-b-green-500/75"
        target="_blank">
        a full-stack project
      </a>
      around the idea. My current favorite - 'Banishers: Ghosts of New Eden'.
    </p>
  </article>
</template>

<style scoped>
  @reference "../assets/css/main.css";

  p {
    @apply text-zinc-700 dark:text-zinc-300 my-4 text-base leading-relaxed;
  }
</style>
