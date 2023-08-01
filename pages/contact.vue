<!-- About Page -->
<template>
  <main id="contact">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />

    <h1>Send me a message.</h1>

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
  const seoMeta = {
    title: "Contact Me",
    description: "Send me a message.",
    image: "/og-image.png"
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
    ogUrl: `http://oneminch.dev${useRoute().fullPath}`,
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary_large_image"
  });
</script>
