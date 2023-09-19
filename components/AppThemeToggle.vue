<script setup>
  // Dark theme attributes
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<!-- Theme Toggle -->
<template>
  <label class="toggle-container" title="Toggle Theme">
    <input type="checkbox" class="sr-only" v-model="isDark" />
    <span>
      <Icon name="heroicons:sun-20-solid" />
    </span>
    <span class="switch"></span>
    <span>
      <Icon name="heroicons:moon-20-solid" />
    </span>
  </label>
</template>

<style>
  .toggle-container {
    @apply inline-flex items-center justify-between text-sm flex-shrink-0 h-8 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-100 px-2 cursor-pointer;
  }

  .toggle-container > * {
    @apply flex-shrink-0;
  }

  .toggle-container > input:focus {
    @apply outline-none ring-2 ring-green-500 ring-opacity-50 ring-offset-0;
  }

  .switch {
    @apply w-6 h-4 px-1 mx-1 rounded-full border-zinc-500 flex items-center bg-zinc-500;
  }

  .switch::before {
    @apply content-[""] rounded-full w-2 h-2 bg-zinc-50 shadow-lg transform scale-125;
  }

  input:checked ~ .switch {
    @apply bg-green-600;
  }

  input:checked ~ .switch::before {
    @apply bg-zinc-50 transform translate-x-full;
  }
</style>
