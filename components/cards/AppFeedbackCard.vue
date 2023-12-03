<script setup>
  const emit = defineEmits(["closeFeedback"]);

  const props = defineProps({
    label: String,
    isSuccess: Boolean,
    visible: Boolean
  });

  const statusIcon = computed(() => {
    return props.isSuccess
      ? "heroicons:check-20-solid"
      : "heroicons:information-circle-20-solid";
  });

  const close = () => {
    emit("closeFeedback");
  };
</script>

<!-- Link: Feedback Toast -->
<template>
  <section
    :class="`flex items-center px-4 py-2 my-4 rounded-lg text-zinc-800 ring-1 ${
      isSuccess ? 'bg-green-200 ring-green-400' : 'bg-red-200 ring-red-400'
    } ${
      visible
        ? 'visible translate-y-0 opacity-100'
        : 'invisible translate-y-1 opacity-0'
    }`"
  >
    <Icon :name="statusIcon" class="mr-2 text-lg" />
    <span>{{ label }}</span>
    <button
      type="button"
      @click="close"
      class="flex items-center justify-center w-6 h-6 ml-auto text-lg rounded-full global-focus focus:ring-zinc-100"
      aria-label="Close Status Feedback"
    >
      <Icon name="heroicons:x-mark-20-solid" />
    </button>
  </section>
</template>
