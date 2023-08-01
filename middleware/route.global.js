export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp();
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) {
    return;
  } else {
    if (to.path !== from.path && process.client) {
      window.scrollTo(0, 0);
    }
  }
});
