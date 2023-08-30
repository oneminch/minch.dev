<!-- Resume Page -->
<template>
  <main id="resume">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <!-- Name  -->
    <h1 class="font-bold text-3xl">Dawit Urgessa</h1>

    <!-- Professional Summary -->
    <p class="w-full my-6">{{ summary }}</p>

    <!-- Skillset -->
    <section class="my-4 w-full">
      <h2 class="font-bold text-2xl my-6 flex items-center">
        Skills
        <Icon name="heroicons:wrench-screwdriver-solid" class="ml-3" />
      </h2>

      <div class="mb-1" v-for="(skills, category) in skillset" :key="category">
        <h3
          class="inline-block font-semibold text-lg mr-2 text-zinc-700 dark:text-zinc-200"
        >
          {{ category }}:
        </h3>
        <ul class="inline-block p-0">
          <li
            v-for="skill in skills"
            :key="skill"
            class="px-3 py-[.125rem] inline-block dark:border dark:border-green-500 bg-green-300 dark:bg-transparent text-zinc-800 dark:text-green-500 font-medium rounded-full text-sm mr-1 mb-1"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Experience timeline -->
    <section class="ml-2 my-4 w-full">
      <h2 class="font-bold text-2xl my-6 flex items-center">
        Experience
        <Icon name="heroicons:briefcase-solid" class="ml-3" />
      </h2>
      <div
        v-for="(experience, expIndex) in experiences"
        :key="expIndex"
        class="timeline-item"
      >
        <h3 class="font-bold text-zinc-700 dark:text-zinc-200">
          {{ experience.role }}
          <br />
          <span class="text-green-600 dark:text-green-500">
            {{ experience.company }}
          </span>
          <br />
          <span class="text-zinc-500 dark:text-zinc-400">
            ({{ experience.from }} - {{ experience.to }})
          </span>
        </h3>
        <ul
          v-if="experience.responsibilities.length > 0"
          class="list-disc p-0 pl-4 pt-2"
        >
          <li
            class="text-zinc-400 dark:text-zinc-500"
            v-for="(responsibility, respIndex) in experience.responsibilities"
            :key="respIndex"
          >
            <span class="text-zinc-800 dark:text-zinc-100">{{
              responsibility
            }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Education Timeline -->
    <section class="ml-2 my-4 w-full">
      <h2 class="font-bold text-2xl my-6 flex items-center">
        Education
        <Icon name="heroicons:academic-cap-solid" class="ml-3" />
      </h2>
      <div class="timeline-item">
        <h3 class="font-bold text-zinc-700 dark:text-zinc-200">
          {{ education.institution }}
          <br />
          <span class="text-green-600 dark:text-green-500">
            {{ education.degree }} - {{ education.major }}
          </span>
          <br />
          <span class="text-zinc-500 dark:text-zinc-400">
            ({{ education.from }} - {{ education.to }})
          </span>
        </h3>
      </div>
    </section>
  </main>
</template>

<script setup>
  const seoMeta = {
    title: "Dawit's Resume",
    description: "This page contains my timeline of professional activity.",
    image: "/og-image.png",
    page: "resume"
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

  const summary =
    "Passionate Software Engineer with a B.Sc. in Computer Science and 4 years of experience designing and developing web applications. My problem-solving and communication skills allow me to work in a collaborative team environment, continuously learn, and apply my expertise to build high quality products.";

  const experiences = [
    {
      role: "Web Developer",
      company: "New Vision Safari",
      from: "Feb 2023",
      to: "Present",
      responsibilities: [
        "Redesigned and developed a mobile-first business website using frontend technologies.",
        "Debugged and optimized code to increase performance and reduce loading times by 12%.",
        "Refactored legacy code to cut project file size by 46%, lowering hosting costs and load times."
      ]
    },
    {
      role: "Frontend Developer",
      company: "EncryptedList",
      from: "Aug 2020",
      to: "Present",
      responsibilities: [
        "Developed and deployed a mobile-first, component-based and interactive SPA using Vue.js.",
        "Engineered a backend using a REST API and Node.js serverless functions to reduce latency by 19%.",
        "Integrated client-side routing and state management using Vue libraries to improve overall UX."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "OpenGenus Foundation",
      from: "Sep 2019",
      to: "Feb 2020",
      responsibilities: [
        "Contributed 11 new in-depth technical articles to OpenGenus IQ covering different web development concepts.",
        "Explored different JavaScript web APIs to generate workable solutions to improve web performance."
      ]
    },
    {
      role: "Web Developer",
      company: "Freelance",
      from: "Sep 2017",
      to: "Jun 2019",
      responsibilities: [
        "Developed landing pages for mobile applications to establish a web presence and provide more product information.",
        "Designed product logo and UI mockups for mobile apps for use on websites and app store pages, providing a visual representation of the products.",
        "Incorporated OpenSearch into open-source search engine websites to improve user experience and engagement."
      ]
    }
  ];

  const education = {
    institution: "Tennessee Technological University",
    degree: "Bachelor of Science",
    major: "Computer Science",
    from: "2017",
    to: "2021"
  };

  const skillset = {
    Programming: ["JavaScript", "HTML/HTML5", "CSS/CSS3"],
    "Libraries/Frameworks": ["Vue.js", "React.js", "Nuxt.js"],
    Familiarity: [
      "Git",
      "Python",
      "Node.js",
      "Flask",
      "TypeScript",
      "PostgreSQL"
    ]
  };
</script>

<style scoped>
  .timeline-item {
    @apply border-l-2 border-zinc-300 dark:border-zinc-600 px-8 py-4 relative text-zinc-700 dark:text-zinc-300 first-of-type:before:bg-green-500 dark:first-of-type:before:bg-green-500;
  }
  .timeline-item::before {
    @apply [content:''] absolute left-0 top-1/2 -translate-y-1/2 translate-x-[calc(-50%-1px)] w-3 h-3 rounded-full inline-block bg-zinc-300 dark:bg-zinc-600 print:hidden;
  }
</style>
