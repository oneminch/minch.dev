<!-- Projects Page -->
<template>
  <main id="projects">
    <h1 class="text-3xl text-left font-bold mb-6">Projects</h1>

    <AppProjectCard
      imgUrl="https://raw.githubusercontent.com/oneminch/deadlines/main/src/assets/screenshot.jpg"
      projectTitle="Deadlines"
      project-description="Deadlines is a simple, offline deadline tracker made with Vue.js and localForage."
      :tags="['Vue.js', 'localForage']"
    />
    <AppProjectCard
      imgUrl="https://repository-images.githubusercontent.com/321511833/01d2663a-69db-4aa1-9bbf-c566c94acdde"
      projectTitle="EncryptedList"
      project-description="EncryptedList is a List of Products & Services that Offer Zero-Knowledge or End-to-End Encryption."
      :tags="['Vue.js', 'Tailwind CSS', 'Airtable']"
    />
  </main>
</template>
