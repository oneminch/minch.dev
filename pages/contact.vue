<script setup>
  definePageMeta({
    title: "Contact",
    description: "Let's talk. Send me a message using the form."
  });

  // Turnstile States
  const turnstile = ref();
  const turnstileToken = ref("");

  // Feedback card props
  const feedbackVisible = ref(false);
  const feedbackMessage = ref("");

  // Form control states
  const senderName = ref("");
  const senderEmail = ref("");
  const senderMessage = ref("");
  const isSubmitting = ref(false);
  const isSuccessful = ref(true);

  const afterFormSubmit = (feedback, success) => {
    isSubmitting.value = false;
    isSuccessful.value = success;
    feedbackMessage.value = feedback;
    feedbackVisible.value = true;
    turnstile.value?.reset();
  };

  async function submit(e) {
    // Reset state
    isSubmitting.value = true;
    feedbackVisible.value = false;
    feedbackMessage.value = "";
    isSuccessful.value = true;

    // Validate required input fields
    if (!senderName.value.trim() || !senderMessage.value.trim()) {
      afterFormSubmit("A Required Field is Empty", false);
      return;
    }

    // Attempt submission
    $fetch("/api/submit", {
      method: "post",
      body: {
        senderName: senderName.value.trim(),
        senderEmail: senderEmail.value.trim(),
        senderMessage: senderMessage.value.trim(),
        turnstileToken: turnstileToken.value
      }
    })
      .then((res) => {
        afterFormSubmit("Successfully Sent", true);
      })
      .catch((err) => {
        afterFormSubmit("Error Sending Message", false);
      });
  }
</script>

<template>
  <article>
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
          class="w-full px-3 py-2 border rounded-lg bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-600 focus:global-focus"
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
          class="w-full px-3 py-2 border rounded-lg bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-600 focus:global-focus"
          placeholder="email@example.com"
        />
      </label>
      <label class="block w-full mb-2 space-y-2">
        <p
          class="font-medium cursor-pointer after:content-['*'] after:text-red-500"
        >
          Message
        </p>
        <textarea
          name="message"
          v-model="senderMessage"
          class="w-full min-h-[8rem] h-40 px-3 py-2 border rounded-lg resize-y max-h-80 bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-600 focus:global-focus"
          placeholder="Your message..."
          aria-required="true"
        ></textarea>
      </label>

      <app-feedback-card
        :label="feedbackMessage"
        :visible="feedbackVisible"
        :is-success="isSuccessful"
        @close-feedback="() => (feedbackVisible = false)"
      ></app-feedback-card>

      <div class="my-4">
        <NuxtTurnstile
          v-model="turnstileToken"
          expired-callback="turnstile.reset()"
          ref="turnstile"
          class="rounded-lg"
        />
      </div>

      <button
        class="px-4 py-2 font-medium bg-green-500 rounded-lg w-36 text-zinc-800 focus-visible:global-focus focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-800 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:bg-zinc-400"
        :disabled="isSubmitting"
      >
        <Icon v-if="isSubmitting" name="svg-spinners:3-dots-fade" />
        <span v-else>Send Message</span>
      </button>
    </form>
  </article>
</template>
