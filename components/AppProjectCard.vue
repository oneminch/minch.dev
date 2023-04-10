<!-- Project: Card -->
<template>
  <div>
    <a
      href="https://deadlines.oneminch.dev/"
      id="test"
      class="flex items-center w-full"
    >
      <img
        src="https://raw.githubusercontent.com/oneminch/deadlines/main/src/assets/screenshot.jpg"
        class="rounded-lg w-96 h-auto bg-white border border-gray-300 dark:border-gray-600"
      />
      <div
        class="py-4 px-6 min-h-[12rem] bg-white dark:bg-gray-800 rounded-lg sm:-ml-48 -ml-72 flex flex-col justify-evenly"
      >
        <h3 class="font-semibold">Deadlines</h3>
        <p class="mb-4 text-gray-700 dark:text-gray-300">
          Deadlines is a simple, offline deadline tracker made with Vue.js and
          localForage.
        </p>
        <div>
          <span
            :key="index"
            v-for="(tag, index) in tags"
            class="px-3 mr-2 bg-gray-300 dark:bg-gray-700 text-sm rounded-full inline-block"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </a>

    <a
      href="https://deadlines.oneminch.dev/"
      class="flex flex-col py-4 px-6 bg-white dark:bg-gray-800 items-start w-1/2 min-h-44 mt-6"
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
    </a>

    <section
      class="flex flex-col items-center w-72 rounded-lg overflow-hidden mt-6"
    >
      <img
        src="https://raw.githubusercontent.com/oneminch/deadlines/main/src/assets/screenshot.jpg"
        class="w-full h-44 bg-gray-100 object-cover"
      />
      <div class="py-4 px-6 min-36 bg-white dark:bg-gray-900">
        <h3 class="font-bold">Deadlines</h3>
        <p class="mb-4">
          Deadlines is a simple, offline deadline tracker made with Vue.js and
          localForage.
        </p>
        <div>
          <span
            :key="i"
            v-for="i in 4"
            class="px-3 mr-2 bg-gray-700 rounded-full inline-block mb-1"
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
    @apply z-[-2];
  }

  a:nth-of-type(2),
  #test > div {
    @apply relative rounded-lg;
  }

  a:nth-of-type(2):before,
  #test > div:before {
    @apply content-[""] absolute inset-0 z-[-1] m-[-1px] dark:m-[-1px] rounded-lg bg-gradient-to-b from-[#51cf66] to-[#c0eb75];
  }
</style>
