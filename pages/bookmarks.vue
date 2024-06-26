<script setup>
  definePageMeta({
    title: "Bookmarks",
    description: "Stuff from across the web that I found interesting."
  });

  const nuxtApp = useNuxtApp();
  const route = useRoute();
  const router = useRouter();

  const INITIAL_PAGE = 1;
  const PER_PAGE = 10;
  const page = ref(parseInt(route.query.page) || INITIAL_PAGE);

  const { data, pending, refresh } = await useLazyAsyncData(
    `bookmarks-${page.value}`,
    () => $fetch(`/api/bookmarks?page=${page.value}`),
    {
      getCachedData(key) {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
      }
    }
  );

  const totalPages = computed(() =>
    Math.ceil(data.value.totalCount / PER_PAGE)
  );

  const handlePagination = {
    goTo(newPage) {
      page.value = newPage;
      router.push({ query: { page: newPage } });
      refresh();
    },
    prev() {
      if (page.value > INITIAL_PAGE) {
        this.goTo(page.value - 1);
      }
    },
    next() {
      if (page.value < totalPages.value) {
        this.goTo(page.value + 1);
      }
    }
  };

  watch(
    () => route.query.page,
    (newPage) => {
      page.value = parseInt(newPage) || INITIAL_PAGE;
      refresh();
    }
  );
</script>

<template>
  <article>
    <h1 class="mb-4 text-2xl font-bold">Bookmarks</h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      Stuff from across the web that I found interesting.
    </p>
    <template v-if="pending">
      <app-bookmark-skeleton
        v-for="skeleton in generateKeys(10)"
        :key="skeleton"
      />
    </template>
    <template v-else>
      <app-bookmark-card
        v-for="bookmark in data.bookmarks"
        :key="bookmark.link"
        :bookmark="bookmark"
      />
    </template>
    <div
      class="w-full md:w-60 mx-auto flex items-center justify-center gap-x-2"
    >
      <button
        :disabled="pending || page <= INITIAL_PAGE"
        @click="handlePagination.prev()"
        type="button"
        class="flex items-center justify-center w-1/2 md:w-24 py-1 font-semibold duration-150 bg-green-500 rounded-l-lg rounded-r-sm focus-visible:global-focus text-zinc-800 group/hover-effect disabled:bg-zinc-700 disabled:text-zinc-400 disabled:cursor-not-allowed"
      >
        <Icon
          name="heroicons:chevron-left-20-solid"
          class="mr-1 group-disabled/hover-effect:translate-x-0 group-hover/hover-effect:-translate-x-1"
        />
        Prev
      </button>
      <button
        :disabled="pending || page >= totalPages"
        @click="handlePagination.next()"
        type="button"
        class="flex items-center justify-center w-1/2 md:w-24 py-1 font-semibold duration-150 bg-green-500 rounded-r-lg rounded-l-sm focus-visible:global-focus text-zinc-800 group/hover-effect disabled:bg-zinc-700 disabled:text-zinc-400 disabled:cursor-not-allowed"
      >
        Next
        <Icon
          name="heroicons:chevron-right-20-solid"
          class="ml-1 group-disabled/hover-effect:translate-x-0 group-hover/hover-effect:translate-x-1"
        />
      </button>
    </div>
  </article>
</template>
