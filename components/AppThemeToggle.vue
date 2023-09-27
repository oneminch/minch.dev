<script setup>
  // Dark theme attributes
  const isDark = useDark();
  const toggle = () => !isDark;
</script>

<!-- Theme Toggle -->
<template>
  <label
    class="flex h-6 w-10 p-[.125rem] items-center cursor-pointer rounded-full bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-opacity-50 focus-within:ring-offset-0"
    title="Toggle Theme"
  >
    <input
      type="checkbox"
      class="peer sr-only"
      aria-labelledby="theme-icon"
      v-model="isDark"
    />
    <span
      id="theme-icon"
      class="h-5 w-5 p-1 flex items-center justify-center rounded-full text-center bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 peer-checked:translate-x-3/4 text-xs shadow cursor-pointer"
      @click="toggle()"
    >
      <Icon v-if="isDark" name="heroicons:moon-20-solid" />
      <Icon v-else name="heroicons:sun-20-solid" />
    </span>
  </label>
</template>
