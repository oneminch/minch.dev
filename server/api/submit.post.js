export default defineEventHandler(async (event) => {
  try {
    const { senderName, senderEmail, senderMessage } = await readBody(event);

    if (!senderName.trim() || !senderMessage.trim()) {
      throw new Error("Missing Field");
    }

    console.log(senderEmail, senderName, senderMessage);

    return { success: true };
  } catch (error) {
    return error;
  }
});
