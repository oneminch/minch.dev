export default defineEventHandler(async (e) => {
  try {
    const { turnstileSecretKey } = useRuntimeConfig();

    const formBody = await readBody(e);
    // const token = formBody["cf-turnstile-response"];
    // const token = formBody.get("cf-turnstile-response");
    // const ip = getRequestHeader(e, "CF-Connecting-IP");

    // Validate the Turnstile token
    // let formData = new FormData();
    // formData.append("secret", turnstileSecretKey);
    // formData.append("response", token);
    // ip && formData.append("remoteip", ip);

    // const result = await fetch(
    //   "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    //   {
    //     method: "POST",
    //     body: formData
    //   }
    // );

    // const { success } = await result.json();
    // if (!success) {
    //   return new Response("The provided Turnstile token was not valid!");
    // }

    // return new Response(formBody, { status: 200 });
    return { formBody };
  } catch (error) {
    return error;
  }
});
