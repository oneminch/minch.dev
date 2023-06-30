<template>
  <article
    class="w-full prose lg:prose-base dark:prose-invert prose-img:rounded-lg prose-slate prose-a:no-underline prose-a:border-b-[1.5px] prose-a:border-b-green-400 prose-pre:bg-slate-700 prose-code:leading-snug prose-code:font-normal prose-code:bg-slate-700 prose-code:text-slate-100 prose-code:px-2 prose-code:py-0 prose-code:inline-block prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none mx-auto text-slate-800 dark:text-slate-100"
  >
    <ContentDoc>
      <template #default="{ doc }">
        <!-- Post title -->
        <h1 class="mb-4">{{ doc.longTitle || doc.title }}</h1>
        <!-- Post Cover Image -->
        <ContentImage
          v-if="doc.coverImage"
          :image-src="doc.coverImage"
          :alt-text="doc.title"
          :is-cover-image="true"
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
            <NuxtLink
              v-if="doc.problemUrl"
              target="_blank"
              :to="doc.problemUrl"
            >
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
        <!-- GitHub File Edit Link -->
        <NuxtLink
          :to="`${fileRootDir}/${
            doc._dir == 'blog' ? '' : 'leetcode/'
          }${doc._path.split('/').at(-1)}.md`"
          target="_blank"
          class="not-prose inline-block mt-8 py-2 px-3 rounded-md border border-slate-300 dark:border-slate-500 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-normal text-sm"
        >
          Edit This Page on GitHub
          <Icon name="heroicons:pencil-solid" />
        </NuxtLink>
      </template>
      <template #not-found>
        <AppNotFound />
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
  definePageMeta({
    layout: "blog-post-layout"
  });

  const fileRootDir = "https://github.com/oneminch/garden/edit/main/Blog/notes";
</script>
