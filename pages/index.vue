<!-- Landing Page -->
<template>
  <main id="home" class="[&>*]:mb-6 last:[&>*]:mb-0">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <!-- Introduction -->
    <section>
      <h1 class="font-semibold text-2xl mb-6">Hi, my name is Dawit 👋</h1>
      <p>
        I'm a passionate Software Engineer with a B.Sc. in Computer Science and
        2 years of experience designing and developing web applications. My
        problem-solving and communication skills allow me to work in a
        collaborative team environment, continuously learn, and apply my
        expertise to build high quality products.
      </p>
    </section>

    <!-- Projects -->
    <section>
      <h2 class="font-semibold text-xl mb-2 w-auto">
        <NuxtLink
          to="/projects"
          class="focused-link rounded-lg w-full flex items-center py-2"
        >
          Projects
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

    <!-- Skills -->
    <section>
      <h2 class="font-semibold text-xl mb-2 py-2">Skills</h2>
      <ul class="p-0">
        <li
          v-for="skill in skills"
          :key="skill"
          class="font-bold px-3 py-1 inline-block dark:border-2 dark:border-green-500 bg-green-300 dark:bg-transparent text-zinc-800 dark:text-green-500 rounded-full text-sm mr-1 mb-1"
        >
          {{ skill }}
        </li>
      </ul>
    </section>

    <!-- Status -->
    <section>
      <h2 class="font-semibold text-xl mb-2 py-2">Currently</h2>
      <div class="columns-1 lg:columns-2 gap-6">
        <AppStatusCard
          v-for="(content, type) in currently"
          :key="type"
          :status-type="type"
          :status-content="content"
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
