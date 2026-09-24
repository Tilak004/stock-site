// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE must be the final public URL — Astro uses it for canonical tags, Open
// Graph URLs and sitemap entries. Set it to the custom domain once you have one;
// until then the Cloudflare Pages subdomain is correct.
export default defineConfig({
  site: "https://stock-site.pages.dev",
  integrations: [sitemap()],
  build: {
    // One stylesheet instead of many small ones — fewer requests, better LCP.
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
