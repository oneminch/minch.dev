<script setup>
  const seoMeta = {
    title: "Dawit's Contact Form",
    description: "Wanna chat? Send me a message using the form.",
    image: "/og-image.png",
    page: "contact"
  };

  useServerSeoMeta({
    title: seoMeta.title,
    ogTitle: seoMeta.title,
    twitterTitle: seoMeta.title,
    description: seoMeta.description,
    ogDescription: seoMeta.description,
    twitterDescription: seoMeta.description,
    ogImage: seoMeta.image,
    twitterImage: seoMeta.image,
    ogUrl: `https://oneminch.dev/${seoMeta.page}`,
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });
</script>

<template>
  <main
    id="main-content"
    class="flex flex-col items-center justify-center h-full"
  >
    <div class="flex flex-col items-center justify-center h-96">
      <Icon
        aria-labelledby="not-found"
        name="fluent-emoji:building-construction"
        size="10rem"
        class="mb-8"
      />
      <h1
        id="not-found"
        class="mb-6 text-xl font-semibold text-center sm:text-2xl text-zinc-700 dark:text-zinc-300"
      >
        Under Construction
      </h1>
    </div>
    <!-- <form action="/api/submit.post.js" class="w-full">
      <label class="block w-1/2 mb-4 space-y-2">
        <p>Name:</p>
        <input
          type="text"
          name="name"
          class="w-full px-3 py-2 border rounded-lg bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-600"
          placeholder="Your name..."
        />
      </label>
      <label class="block w-1/2 mb-4 space-y-2">
        <p>Email:</p>
        <input
          type="text"
          name="email"
          class="w-full px-3 py-2 border rounded-lg bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-600"
          placeholder="Your email address..."
        />
      </label>
      <label class="block w-1/2 mb-4 space-y-2">
        <p>Message:</p>
        <textarea
          name="message"
          class="w-full px-3 py-2 border rounded-lg bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-600"
        ></textarea>
      </label>
    </form> -->
  </main>
</template>
