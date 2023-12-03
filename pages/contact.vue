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

  // Feedback card props
  const feedbackVisible = ref(false);
  const feedbackMessage = ref("");

  const onCloseFeedback = () => {
    feedbackVisible.value = false;
  };

  // Form control states
  const senderName = ref("");
  const senderEmail = ref("");
  const senderMessage = ref("");
  const isSubmitting = ref(false);
  const isSuccessful = ref(true);

  async function submit(e) {
    // Reset state
    isSubmitting.value = true;
    feedbackVisible.value = false;
    feedbackMessage.value = "";
    isSuccessful.value = true;

    // Validate required input fields
    if (!senderName.value.trim() || !senderMessage.value.trim()) {
      isSubmitting.value = false;
      isSuccessful.value = false;
      feedbackMessage.value = "A Required Field is Empty";
      feedbackVisible.value = true;
      return;
    }

    // Attempt submission
    $fetch("/api/submit", {
      method: "post",
      body: {
        senderName: senderName.value.trim(),
        senderEmail: senderEmail.value.trim(),
        senderMessage: senderMessage.value.trim()
      }
    })
      .then((res) => {
        isSubmitting.value = false;
        isSuccessful.value = true;
        feedbackMessage.value = "Successfully Sent";
        feedbackVisible.value = true;
      })
      .catch((err) => {
        isSubmitting.value = false;
        isSuccessful.value = false;
        feedbackMessage.value = "Error Sending Message";
        feedbackVisible.value = true;
      });
  }
</script>

<template>
  <main id="main-content" class="h-full">
    <section class="mb-8">
      <h1 class="mb-4 text-2xl font-semibold">Contact 📧</h1>
      <p class="my-2 text-zinc-700 dark:text-zinc-300">
        You can message me directly using this form.
      </p>
    </section>

    <form
      @submit.prevent="submit"
      class="w-full md:max-w-md md:w-11/12 lg:w-2/3"
    >
      <label class="block w-full mb-4 space-y-2">
        <p
          class="font-medium cursor-pointer after:content-['*'] after:text-red-500"
        >
          Name
        </p>
        <input
          type="text"
          name="name"
          v-model="senderName"
          class="w-full px-3 py-2 border rounded-lg bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-600 global-focus"
          placeholder="Your name..."
          aria-required="true"
        />
      </label>
      <label class="block w-full mb-4 space-y-2">
        <p class="font-medium cursor-pointer">
          Email <span class="text-zinc-400 dark:text-zinc-500">(Optional)</span>
        </p>
        <input
          type="email"
          name="email"
          v-model="senderEmail"
          class="w-full px-3 py-2 border rounded-lg bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-600 global-focus"
          placeholder="email@example.com"
        />
      </label>
      <label class="block w-full mb-4 space-y-2">
        <p
          class="font-medium cursor-pointer after:content-['*'] after:text-red-500"
        >
          Message
        </p>
        <textarea
          name="message"
          v-model="senderMessage"
          class="w-full min-h-[8rem] h-40 px-3 py-2 border rounded-lg resize-y max-h-80 bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-600 global-focus"
          placeholder="Your message..."
          aria-required="true"
        ></textarea>
      </label>

      <app-feedback-card
        :label="feedbackMessage"
        :visible="feedbackVisible"
        :is-success="isSuccessful"
        @close-feedback="onCloseFeedback"
      ></app-feedback-card>

      <button
        class="px-4 py-2 font-medium bg-green-500 rounded-lg w-36 text-zinc-800 global-focus focus:ring-offset-zinc-50 dark:focus:ring-offset-zinc-800 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-zinc-400"
        :disabled="isSubmitting"
      >
        <Icon v-if="isSubmitting" name="svg-spinners:3-dots-fade" />
        <span v-else>Send Message</span>
      </button>
    </form>
  </main>
</template>
