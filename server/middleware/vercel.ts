import { defineEventHandler, proxyRequest } from "h3";

export default defineEventHandler(async (event) => {
  // Proxy analytics requests to Vercel Insights
  if (event.node.req.url?.startsWith("/measure/")) {
    const targetPath = event.node.req.url.replace(
      "/measure",
      "/_vercel/insights"
    );

    return proxyRequest(event, `https://minch.dev${targetPath}`);
  }
});
