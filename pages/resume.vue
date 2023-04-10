<!-- Resume Page -->
<template>
  <main id="resume">
    <!-- Name  -->
    <h2 class="font-bold text-3xl">Dawit Urgessa</h2>

    <!-- Professional Summary -->
    <p class="w-full my-6">
      A results-oriented developer experienced in software development through
      professional freelance work, internships, and open-source contributions.
      Possess broad technical knowledge of software engineering, a quick
      learning ability, and creative programming skills. Fluent in several
      languages and frameworks including Python, SQL, JavaScript, Vue.js, and,
      Node.js. Focused on expanding my experience using C# (.NET), Angular,
      React.js, MongoDB & TypeScript.
    </p>

    <!-- Experience timeline -->
    <h3 class="font-bold text-2xl my-6">Experience</h3>
    <section class="border-l-2 border-gray-300 dark:border-gray-600 my-4 w-5/6">
      <div
        v-for="(experience, expIndex) in experiences"
        :key="expIndex"
        class="timeline-item"
      >
        <h3 class="font-bold text-gray-700 dark:text-gray-200">
          {{ experience.role }}
          <br />
          <span class="text-[#51cf66]">
            {{ experience.company }}
          </span>
          <br />
          <span class="text-gray-500 dark:text-gray-400">
            ({{ experience.from }} - {{ experience.to }})
          </span>
        </h3>
        <ul
          v-if="experience.responsibilities.length > 0"
          class="list-disc pl-4 pt-2"
        >
          <li
            v-for="(responsibility, respIndex) in experience.responsibilities"
            :key="respIndex"
          >
            {{ responsibility }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Education Timeline -->
    <h3 class="font-bold text-2xl my-6">Education</h3>
    <section class="border-l-2 border-gray-300 dark:border-gray-600 my-4 w-5/6">
      <div class="timeline-item">
        <h3 class="font-bold text-gray-700 dark:text-gray-200">
          {{ education.institution }}
          <br />
          <span class="text-[#51cf66]">
            {{ education.degree }} - {{ education.major }}
          </span>
          <br />
          <span class="text-gray-500 dark:text-gray-400">
            ({{ education.from }} - {{ education.to }})
          </span>
        </h3>
      </div>
    </section>
  </main>
</template>

<script setup>
  const experiences = [
    {
      role: "Web Developer",
      company: "New Vision Safari",
      from: "Feb 2023",
      to: "Present",
      responsibilities: []
    },
    {
      role: "Software Developer Intern",
      company: "OpenGenus Foundation",
      from: "Sep 2019",
      to: "Feb 2020",
      responsibilities: [
        "Aided the foundation's mission to advance computing research by contributing to its large publishing platform.",
        "Wrote in-depth technical articles on web and computer science concepts such as networking, working with APIs, and fingerprinting."
      ]
    },
    {
      role: "Web Developer",
      company: "Freelance",
      from: "Sep 2017",
      to: "Jun 2019",
      responsibilities: [
        "Helped fellow computer science students grow their online presence by developing portfolio websites.",
        "Created a landing page for a mobile application by a client. Designed an icon and mockups for the application."
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
</script>

<style scoped>
  .timeline-item {
    @apply px-8 py-4 relative text-gray-700 dark:text-gray-300 first:first:before:bg-[#51cf66] dark:first:first:before:bg-[#51cf66];
  }
  .timeline-item::before {
    @apply [content:''] absolute left-0 top-1/2 -translate-y-1/2 translate-x-[calc(-50%-1px)] w-3 h-3 rounded-full inline-block bg-gray-300 dark:bg-gray-600 print:hidden;
  }
  .timeline-item:first-of-type::before {
    /* @apply bg-[#edae49]; */
  }
</style>
