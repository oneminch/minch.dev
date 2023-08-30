<!-- About Page -->
<template>
  <main id="contact">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1>Send me a message.</h1>

    <!-- <form action="/contact" method="POST"> -->
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        name="input"
        class="border border-zinc-400 rounded-md my-1 py-2 px-2"
      />
      <div class="max-w-min rounded-lg overflow-hidden">
        <div class="cf-turnstile" :data-sitekey="turnstileSiteKey"></div>
      </div>
      <input
        type="submit"
        value="Submit"
        class="bg-zinc-300 rounded-md my-1 py-2 px-4"
      />
    </form>

    <!-- <form action="https://formend.vercel.app/submit/portfolio" method="post"> -->
    <!-- <form action="/api/contact" method="post">
      <label for="name">
        Name:
        <input type="text" name="name" id="name" />
      </label>

      <label for="email">
        Email:
        <input type="email" name="email" id="email" />
      </label>

      <label for="message">
        Message:
        <textarea
          name="message"
          id="message"
          placeholder="Enter message..."
          required
        ></textarea>
      </label>

      === Captcha Validation ===

      <button type="submit" aria-label="Submit Form"
      title="Submit Form">Send</button>
    </form> -->
  </main>
</template>

<script setup>
  const turnstileSiteKey = "0x4AAAAAAABlDwSHN3HVmFWH";

  const onSubmit = async (e) => {
    // let formData = new FormData();
    // formData.append("msg", "hi");
    // formData.append("name", "Minch");

    const { data } = await useFetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-encoded" },
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
      // body: new FormData(e.target)
      // body: formData
    });
    console.log(data);
  };

  useHead({
    script: [
      {
        type: "text/javascript",
        src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
        async: true,
        defer: true
      }
    ]
  });

  const seoMeta = {
    title: "Contact Me",
    description: "Send me a message.",
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
