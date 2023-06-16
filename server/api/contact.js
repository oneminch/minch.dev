export default defineEventHandler(async () => {
  try {
    return "hi";
  } catch (error) {
    return error;
  }
});
