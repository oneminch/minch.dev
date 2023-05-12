<!-- Project: Card -->
<template>
  <div>
    <NuxtLink
      to="https://deadlines.oneminch.dev/"
      id="test"
      class="flex items-center w-full"
    >
      <img
        src="https://raw.githubusercontent.com/oneminch/deadlines/main/src/assets/screenshot.jpg"
        class="rounded-lg w-96 h-auto bg-white border border-slate-300 dark:border-slate-600"
      />
      <div
        class="py-4 px-6 min-h-[12rem] sm:-ml-48 -ml-72 flex flex-col justify-evenly relative rounded-lg bg-white dark:bg-slate-800 before:custom-border-gradient before:opacity-75 dark:before:opacity-[.35]"
      >
        <h3 class="font-semibold">Deadlines</h3>
        <p class="mb-4 text-slate-700 dark:text-slate-300">
          Deadlines is a simple, offline deadline tracker made with Vue.js and
          localForage.
        </p>
        <div>
          <span
            :key="index"
            v-for="(tag, index) in tags"
            class="px-3 mr-2 bg-slate-300 dark:bg-slate-700 text-sm rounded-full inline-block"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </NuxtLink>

    <NuxtLink
      to="https://deadlines.oneminch.dev/"
      class="flex flex-col py-4 px-6 items-start w-1/2 min-h-44 mt-6 relative rounded-lg bg-white dark:bg-slate-800 before:custom-border-gradient before:opacity-75 dark:before:opacity-[.35]"
    >
      <div class="relative">
        <h3 class="font-bold">Deadlines</h3>
        <p class="mb-4">
          Deadlines is a simple, offline deadline tracker made with Vue.js and
          localForage.
        </p>
        <Icon
          name="skill-icons:vuejs-light"
          size="1.5rem"
          class="mr-2 rounded-full"
        />
        <Icon
          name="skill-icons:tailwindcss-light"
          size="1.5rem"
          class="mr-2 rounded-full"
        />
      </div>
    </NuxtLink>

    <section
      class="flex flex-col items-center w-72 mt-6 relative rounded-lg bg-white dark:bg-slate-800 before:custom-border-gradient before:opacity-75 dark:before:opacity-[.35]"
    >
      <img
        src="https://raw.githubusercontent.com/oneminch/deadlines/main/src/assets/screenshot.jpg"
        class="w-full h-44 rounded-t-lg bg-slate-100 object-cover"
      />
      <div class="py-4 px-6 min-36">
        <h3 class="font-bold">Deadlines</h3>
        <p class="mb-4">
          Deadlines is a simple, offline deadline tracker made with Vue.js and
          localForage.
        </p>
        <div>
          <span
            :key="i"
            v-for="i in 4"
            class="px-3 mr-2 bg-slate-700 rounded-full inline-block mb-1"
          >
            {{ `tag-${i}` }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  const tags = ref(["TailwindCSS", "VueJS", "localForage"]);
</script>

<style scoped>
  #test > img {
    /* @apply -z-10; */
  }

  a:nth-of-type(2),
  #test > div {
    /* @apply relative rounded-lg bg-white dark:bg-slate-800; */
  }

  a:nth-of-type(2):before,
  #test > div:before {
    /* @apply before:custom-border-gradient before:opacity-75 dark:before:opacity-[.35]; */
  }
</style>
