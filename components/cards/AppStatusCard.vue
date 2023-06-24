<template>
  <section
    class="card-style flex flex-col py-4 px-6 items-start w-full min-h-[6rem] relative mb-4"
  >
    <h2 class="font-bold text-lg mb-2">
      {{ statusType }}
      <Icon :name="`mdi:${icons[statusType.toLowerCase()]}`" />
    </h2>
    <p class="font-normal flex items-center">
      <Icon name="heroicons:arrow-right-solid" class="mr-1 text-green-400" />
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
    reading: "book-open-page-variant",
    playing: "gamepad-variant",
    listening: "microphone",
    learning: "brain"
  });
</script>
