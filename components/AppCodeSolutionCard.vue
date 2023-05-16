<!-- Article: Card -->
<template>
  <!-- <NuxtLink
    class="card-style w-full min-h-[8rem] h-auto overflow-hidden flex justify-start items-center p-2 mb-5 [&>img]:hover:scale-110"
    :to="url"
  >
    Article Image
    <img
      :src="imageUrl"
      alt="Platform Image"
      class="w-12 h-12 p-2 box-content object-cover bg-cover origin-center rounded-full flex-shrink-0 mr-2"
    />
    <div
      class="flex flex-col items-start justify-evenly flex-shrink-0 w-full md:w-2/3 min-h-full px-2"
    >
      Article Title
      <h3 class="font-bold">{{ title }}</h3>
      Article Tags
      <div class="my-1 mt-auto">
        <span
          class="px-2 py-[.1rem] inline-block rounded-full bg-green-300 font-semibold font-mono text-slate-800 text-xs mr-1"
          v-for="tag in tags"
          :key="tag"
          >{{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink> -->
  <NuxtLink
    class="focused-link card-style w-1/2 flex justify-start items-center px-4 py-2 mb-4 relative"
    :to="url"
  >
    <img
      :src="imageUrl"
      class="w-8 h-8 flex-shrink-0 object-cover rounded-full mr-2 overflow-hidden"
      alt="Platform Image"
    />
    <div class="px-2 py-1">
      <h3 class="text-base font-semibold mb-1">{{ title }}</h3>
      <div>
        <span
          class="px-2 py-[.1rem] inline-block rounded-full bg-green-300 font-medium font-mono text-slate-800 text-xs mr-1"
          v-for="tag in tags"
          :key="tag"
          >{{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
  const imageUrl = `/leetcode.png`;

  const title = "Two Sum";
  const url = "http://leetcode.com/";
  const tags = ["Python", "Array", "String"];
  // const url =
  // const props = defineProps({
  //   desc: String,
  //   articleTitle: String,
  //   url: String,
  //   title: String,
  //   tags: Array,
  //   readTime: String,
  //   pubDate: Number
  // });

  // const lastUpdateTime = computed(() => {
  //   const dateObj = new Date(props.pubDate);
  // return `${} ${}, ${}`

  // return dateObj.toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric"
  // });
  // });
</script>
