import { Resend } from "resend";

const { resendApiKey, resendFrom, resendTo } = useRuntimeConfig();

const resend = new Resend(resendApiKey);

export default defineEventHandler(async (event) => {
  try {
    const { senderName, senderEmail, senderMessage, turnstileToken } =
      await readBody(event);

    // Validate Turnstile Token
    if (!turnstileToken) {
      throw new Error("Token not Provided");
    }

    const turnstile = await verifyTurnstileToken(turnstileToken, event);

    if (!turnstile.success) {
      throw new Error("Invalid Token");
    }

    // Validate Submission
    if (!senderName.trim() || !senderMessage.trim()) {
      throw new Error("Missing Field");
    }

    // Construct message body and send
    const messageBody = `
    ${
      senderEmail.trim() ? "FROM: " + senderEmail.trim() + "\n\n" : ""
    }\n\nNAME: ${senderName}\nMESSAGE: \n\n${senderMessage}`;

    const { data, error } = await resend.emails.send({
      from: `${senderName} <${resendFrom}>`,
      to: resendTo,
      subject: `Message from ${senderName} (Portfolio)`,
      text: messageBody
    });

    if (error) {
      throw new Error("Server Issue Sending Message");
    }

    return { data };
  } catch (error) {
    // console.log(error);
    return error;
  }
});
