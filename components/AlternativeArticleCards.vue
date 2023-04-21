<template>
  <section>
    <!-- Alternative Card (3) -->
    <div
      id="article-card-3"
      class="w-full h-32 relative bg-cover -z-20 bg-center bg-gray-900 rounded-md overflow-hidden p-4 flex justify-start first:[&>*]:mb-0 [&>*]:mb-2 mb-5"
    >
      <!-- Article Image -->
      <img
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612381741215/ZBUN5T-cX.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
        alt="Article Image"
        class="w-24 h-24 mr-4 bg-cover rounded-lg"
      />
      <div class="flex flex-col">
        <!-- Publish Date -->
        <p class="text-sm text-gray-400">Oct 21, 2023 &bull; 3 mins</p>
        <!-- Article Title -->
        <h3 class="font-bold">DNS</h3>
        <!-- Article Tags -->
        <div class="my-1 mt-auto">
          <span
            class="px-2 py-[.1rem] inline-block rounded-full bg-[#c0eb75] font-semibold font-mono text-gray-800 text-xs mr-1"
            v-for="tag in ['TailwindCSS', 'VueJS', 'localForage']"
            :key="tag"
            >{{ tag.toUpperCase() }}
          </span>
        </div>
      </div>
    </div>
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
          <p class="text-sm text-gray-600">Oct 21, 2023</p>
          <!-- Article Title -->
          <h3 class="font-bold">{{ articleTitle }}</h3>
          <!-- Article Tags -->
          <div class="my-1">
            <span
              class="px-2 py-[.1rem] inline-block rounded-full bg-[#c0eb75] font-semibold font-mono text-gray-800 text-xs mr-1"
              v-for="tag in tags"
              :key="tag"
              >{{ tag.toUpperCase() }}
            </span>
          </div>
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
  </section>
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
