<!-- Articles -->
<template>
  <main id="articles">
    <h1 class="text-3xl text-left font-bold mt-2 sm:mt-4 mb-6">Articles</h1>

    <section class="columns-2xs gap-6">
      <!-- <section> -->
      <!-- <AppArticleCard
        v-for="(metadata, post) in posts"
        :key="post"
        :tags="metadata.tags"
        :articleTitle="metadata.alt_title"
        :desc="`...`"
        :url="metadata.canonicalUrl"
        ></AppArticleCard> -->
      <AppArticleCard
        v-for="post in posts"
        :tags="post.tags"
        :articleTitle="post.articleTitle"
        :desc="post.desc"
        :url="post.url"
        :pubDate="post.pubDate"
        :readTime="post.readTime"
        :imageUrl="post.imageUrl"
      ></AppArticleCard>
    </section>
  </main>
</template>

<script setup>
  // const { data } = await useFetch("/api/posts");

  // const posts = ref([]);
  const posts = ref([
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolores qui quibusdam nihil.",
      articleTitle: "ABc",
      url: "https://github.com/vuejs/vue",
      tags: ["TailwindCSS", "VueJS", "localForage"],
      imageUrl:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1612381741215/ZBUN5T-cX.png",
      pubDate: "Oct 02, 2021",
      readTime: "4 mins"
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolores qui quibusdam nihil.",
      articleTitle: "DEf",
      url: "https://github.com/vuejs/vue",
      tags: ["TailwindCSS", "VueJS", "localForage"],
      imageUrl:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1612385777370/8Ygogt87m.png",
      pubDate: "Feb 24, 2022",
      readTime: "3 mins"
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolores qui quibusdam nihil.",
      articleTitle: "GHi",
      url: "https://github.com/vuejs/vue",
      tags: ["TailwindCSS", "VueJS", "localForage"],
      imageUrl: "/cover-img.png",
      pubDate: "Jan 12, 2022",
      readTime: "7 mins"
    }
  ]);

  // console.log(JSON.parse(JSON.stringify(data.value)));
</script>
