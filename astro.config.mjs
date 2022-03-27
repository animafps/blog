import svelte from "@astrojs/svelte"; // Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
// @ts-check

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig(
/** @type {import('Astro').AstroUserConfig} */
{
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  buildOptions: {
    site: "https://animafps.xyz",
    // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true,
    // Generate sitemap (set to "false" to disable)
    drafts: false
  },
  integrations: [svelte(), sitemap(), partytown(), turbolinks()],
  vite: {
    optimizeDeps: {
      allowNodeBuiltins: true
    }
  },
  markdownOptions: {
    render: ["@astrojs/markdown-remark", {
      remarkPlugins: ["remark-smartypants", "remark-gfm"],
      rehypePlugins: ["rehype-slug", ["rehype-autolink-headings", {
        behavior: "prepend"
      }], "rehype-external-links"]
    }]
  }
});