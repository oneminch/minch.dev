<script setup>
  const route = useRoute();

  await navigateTo(`https://oneminch.github.io/${route.params.repo}`, {
    external: true,
    open: {
      target: "_blank"
    }
  });

  await navigateTo("/");
</script>

<template>
  <p>
    Redirecting to project URL -
    {{ `https://oneminch.github.io/${$route.params.repo}` }}
  </p>
</template>
