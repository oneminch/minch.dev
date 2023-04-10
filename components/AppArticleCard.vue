<!-- Article: Card -->
<template>
  <div
    id="article-card"
    class="w-full mb-5 flex flex-col items-start overflow-hidden hover:-translate-y-1 transition-all duration-200 first-of-type:[column-span:all] [&>a>div_img]:first-of-type:h-32 md:[&>a>div_img]:first-of-type:h-52 relative"
    :href="url"
  >
    <a :href="url" class="w-full">
      <div class="w-full">
        <!-- Article Header Image -->
        <img
          src="/cover-img.png"
          alt="Profile Picture"
          class="w-full h-24 md:h-32 rounded-lg object-cover"
        />
        <!-- Share Button -->
      </div>
      <div class="py-1 text-left">
        <!-- Article Tags -->
        <div class="my-1">
          <span
            class="px-2 py-[.1rem] inline-block rounded-full bg-[#c0eb75] font-semibold font-mono text-gray-800 text-xs mr-1"
            v-for="tag in tags"
            :key="tag"
            >{{ tag.toUpperCase() }}
          </span>
        </div>
        <!-- Article Title -->
        <h3 class="font-bold">{{ articleTitle }}</h3>
        <!-- Article Excerpt -->
        <!-- <p class="text-sm text-gray-600">
          {{ desc }}
        </p> -->
      </div>
    </a>
    <button
      v-if="isSupported"
      @click="
        share({
          articleTitle,
          desc,
          url
        })
      "
      class="icon-link share-btn"
    >
      <Icon name="octicon:share-16" />
    </button>
  </div>
</template>

<script setup>
  const { share, isSupported } = useShare();

  function startShare(title, text, url) {
    share({
      title,
      text,
      url
    });
  }

  defineProps({
    desc: {
      default: "",
      type: String
    },
    articleTitle: {
      default: "",
      type: String
    },
    url: {
      default: "#",
      type: String
    },
    tags: {
      default() {
        return [];
      },
      type: Array
    }
  });
</script>

<style scoped>
  #article-card:hover .share-btn {
    @apply flex;
  }
  .share-btn {
    @apply absolute right-2 top-2 w-6 h-6 m-0 bg-[rgba(255,255,255,0.75)] rounded-full text-gray-800 hidden;
    @apply [&>svg]:w-4 [&>svg]:h-4;
  }
</style>
