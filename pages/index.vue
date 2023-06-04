<!-- Landing Page -->
<template>
  <main id="home" class="[&>*]:mb-6 last:[&>*]:mb-0">
    <!-- Introduction -->
    <section>
      <h1 class="font-semibold text-2xl mb-6">Hi, my name is Dawit.</h1>
      <p>
        I am a results-oriented developer experienced in software development
        through professional freelance work, internships, and open-source
        contributions. I possess broad technical knowledge of software
        engineering, a quick learning ability, and creative programming skills.
        Furthermore, I'm fluent in several languages and frameworks including
        Python, SQL, JavaScript, Vue.js, and, Node.js. I'm currently focused on
        expanding my experience using C# (.NET), Angular, React.js, MongoDB &
        TypeScript.
      </p>
    </section>

    <!-- Projects -->
    <h2 class="font-semibold text-2xl mb-6">
      <NuxtLink to="/projects" class="focused-link flex items-center">
        Projects
        <Icon name="heroicons:chevron-right-solid" class="ml-2" />
      </NuxtLink>
    </h2>
    <section class="columns-1 lg:columns-2 gap-6">
      <AppProjectCard
        :hideImage="true"
        projectTitle="Deadlines"
      ></AppProjectCard>
      <AppProjectCard
        :hideImage="true"
        projectTitle="EncryptedList"
      ></AppProjectCard>
    </section>

    <!-- Skills -->
    <h2 class="font-semibold text-2xl mb-6">Skills</h2>
    <section>
      <span
        v-for="skill in skills"
        :key="skill"
        class="px-3 py-1 inline-block bg-green-500 font-semibold rounded-full text-slate-800 text-sm mr-1 mb-1"
        >{{ skill }}</span
      >
    </section>
    <!-- Status -->
    <h2 class="font-semibold text-2xl mb-6">Currently</h2>
    <section class="columns-1 lg:columns-2 gap-6">
      <AppStatusCard
        v-for="(content, type) in currently"
        :key="type"
        :status-type="type"
        :status-content="content"
      ></AppStatusCard>
    </section>

    <AppFooter></AppFooter>
  </main>
</template>

<script setup>
  // const { data } = reactive(await useFetch("/api/leetcode"));

  // console.log(JSON.parse(JSON.stringify(data)));

  useHead({
    script: [
      {
        type: "text/partytown",
        src: "https://measure.oneminch.dev/minch-measure",
        async: true,
        "data-website-id": "1e0e9daa-a25b-4943-af4e-68c91b2d3c72"
      }
    ]
  });

  const skills = ref([
    "Python",
    "JavaScript",
    "Vue.js",
    "Git",
    "HTML",
    "CSS",
    "SQL",
    "Node.js",
    "Express.js"
  ]);

  const currently = {
    Learning: "Node.js",
    Reading: "Pragmatic Thinking",
    Listening: "The Witch Trials of J.K. Rowling",
    Playing: "Little Nightmares II"
  };
</script>
