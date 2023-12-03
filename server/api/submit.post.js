import { Resend } from "resend";

const { resendApiKey, resendFrom, resendTo } = useRuntimeConfig();

const resend = new Resend(resendApiKey);

export default defineEventHandler(async (event) => {
  try {
    const { senderName, senderEmail, senderMessage } = await readBody(event);

    // Form validation
    if (!senderName.trim() || !senderMessage.trim()) {
      throw new Error("Missing Field");
    }

    const messageBody = `
    ${
      senderEmail.trim() ? "FROM: " + senderEmail.trim() + "\n\n" : ""
    }\n\nMESSAGE: \n\n${senderMessage}`;

    const data = await resend.emails.send({
      from: `${senderName} <${resendFrom}>`,
      to: resendTo,
      subject: "Message from Portfolio",
      text: messageBody
    });

    return data;
  } catch (error) {
    return { error };
  }
});
