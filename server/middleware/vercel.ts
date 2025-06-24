import { defineEventHandler, proxyRequest } from "h3";

export default defineEventHandler(async (event) => {
  if (event.node.req.url?.startsWith("/measure/")) {
    const targetPath = event.node.req.url.replace(
      "/measure",
      "/_vercel/insights"
    );

    return proxyRequest(event, `https://minch.dev${targetPath}`);
  }
});
