<script setup>
  // Dark theme attributes
  const isDark = useDark();
  const toggle = () => !isDark;
</script>

<!-- Theme Toggle -->
<template>
  <label
    class="flex h-6 w-10 p-[.125rem] items-center cursor-pointer rounded-full bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 text-zinc-700 [&:has(:focus-visible)]:outline-none [&:has(:focus-visible)]:ring-2 [&:has(:focus-visible)]:ring-green-500 [&:has(:focus-visible)]:ring-opacity-50 [&:has(:focus-visible)]:ring-offset-0"
    title="Toggle Theme"
    aria-label="Toggle Website Theme"
  >
    <input type="checkbox" class="peer sr-only" v-model="isDark" />
    <span
      class="h-5 w-5 p-1 flex items-center justify-center rounded-full text-center bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 peer-checked:translate-x-3/4 text-xs shadow cursor-pointer"
      @click="toggle()"
    >
      <Icon
        name="heroicons:moon-20-solid"
        class="text-zinc-500 dark:text-zinc-100"
      />
    </span>
  </label>
</template>
