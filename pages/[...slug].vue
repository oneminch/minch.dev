<template>
  <ContentDoc tag="">
    <template #default="{ doc }">
      <!-- SEO metadata from blog data -->
      <!-- {{
        (() => {
          useServerSeoMeta({
            title: () => `${doc.title} - Blog`,
            description: () => doc.desc,
            altTitle: "hi",
            author: "Dawit (@oneminch)",
            ogUrl: `http://oneminch.dev${doc._path}`,
            ogType: "article",
            ogLocale: "en_US",
            ogTitle: () => doc.longTitle || doc.title,
            ogDescription: () => doc.desc,
            ogImage: () => `${imgCdnPrefix}/cover/${doc.image}`,
            twitterCard: "summary_large_image",
            twitterTitle: () => doc.longTitle || doc.title,
            twitterDescription: () => doc.desc,
            twitterImage: () => `${imgCdnPrefix}/cover/${doc.image}`
          });
        })()
      }} -->

      <!-- Post title -->
      <h1 class="mb-4">
        {{ doc.longTitle || doc.title }}
      </h1>

      <!-- Post Cover Image -->
      <nuxt-img
        v-if="doc.image"
        format="webp"
        loading="lazy"
        :src="doc.image"
        :alt="doc.title"
      />

      <!-- Additional info for leetcode solution posts -->
      <template v-if="doc._dir == 'leetcode'">
        <div class="mb-1">
          <span
            class="px-2 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border border-slate-300 dark:border-slate-500 bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-100"
            v-for="tag in doc.tags"
            :key="tag"
            >{{ tag }}
          </span>
        </div>
        <p>
          <b class="mr-2">Problem URL:</b>
          <NuxtLink v-if="doc.problemUrl" target="_blank" :to="doc.problemUrl">
            {{ doc.title }}
          </NuxtLink>
        </p>
      </template>

      <!-- Table of Contents for Articles -->
      <template v-if="doc._dir == 'blog' && doc.body.toc.links.length > 0">
        <h2>Outline</h2>
        <ol>
          <li v-for="link of doc.body.toc.links" :key="link.id">
            <a :href="`#${link.id}`">{{ link.text }}</a>
          </li>
        </ol>
        <br />
      </template>

      <!-- Main post content -->
      <ContentRenderer :value="doc" />
    </template>
    <template #not-found>
      <AppNotFound />
    </template>
  </ContentDoc>
</template>

<script setup>
  definePageMeta({
    layout: "blog-post-layout"
  });
</script>

<style scoped>
  img {
    @apply h-full object-cover bg-cover origin-center border-[.75px] border-slate-300 dark:border-slate-600;
  }
</style>
