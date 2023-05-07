<template>
  <section
    class="flex flex-col py-4 px-6 items-start w-full min-h-[6rem] relative rounded-lg bg-white dark:bg-gray-800 before:custom-border-gradient before:opacity-75 dark:before:opacity-[.35] mb-4"
  >
    <h2 class="font-bold text-lg mb-2">
      {{ statusType }}
      <Icon :name="`twemoji:${icons[statusType.toLowerCase()]}`" />
    </h2>
    <p class="font-normal flex items-center">
      <Icon name="octicon:arrow-right-16" class="mr-1 text-[#edae49]" />
      {{ statusContent }}
    </p>
  </section>
</template>

<script setup>
  defineProps({
    statusType: String,
    statusContent: String
  });

  const icons = ref({
    reading: "open-book",
    playing: "video-game",
    listening: "studio-microphone",
    learning: "brain"
  });
</script>
