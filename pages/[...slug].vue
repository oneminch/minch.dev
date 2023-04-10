<script setup>
  const route = useRoute();

  console.log(route.path.split("/")[0]);
</script>

<template>
  <section class="w-full">
    <article class="w-full prose lg:prose-lg prose-slate mx-auto text-gray-800">
      <ContentDoc v-slot="{ doc }">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </article>
  </section>
</template>

<style scoped>
  article > div a {
    @apply text-[#edae49] !important;
  }

  footer {
    @apply hidden !important;
  }
</style>
