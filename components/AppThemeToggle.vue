<script setup>
  // Dark theme attributes
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<!-- Theme Toggle -->
<template>
  <label class="toggle-container" title="Show only variable fonts">
    <input
      type="checkbox"
      class="sr-only"
      v-model="isDark"
      @change="toggleDark()"
    />
    <span>
      <Icon name="heroicons:sun-20-solid" class="text-lg" />
    </span>
    <span class="switch"></span>
    <span>
      <Icon name="heroicons:moon-20-solid" class="text-lg" />
    </span>
  </label>
</template>

<style>
  .toggle-container {
    @apply inline-flex items-center justify-between text-sm rounded-md flex-shrink-0 h-8 bg-zinc-700 px-2;
  }

  .toggle-container > * {
    @apply flex-shrink-0;
  }

  .toggle-container:focus-within {
    @apply outline-none ring-2 ring-green-500 ring-opacity-50 ring-offset-0;
  }

  .switch {
    @apply h-5 px-1 mx-2 rounded-full w-8 border-zinc-500 flex items-center transition-colors bg-zinc-500 cursor-pointer;
  }

  .switch::before {
    @apply content-[""] rounded-full w-3 h-3 bg-zinc-50 transition-transform duration-100 ease-in-out shadow-lg;
  }

  input:checked ~ .switch {
    @apply bg-green-500;
  }

  input:checked ~ .switch::before {
    @apply bg-zinc-50 transform translate-x-full;
  }
</style>
