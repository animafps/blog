import { getHighlighter } from "shiki";

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ {
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  buildOptions: {
    site: "https://animafps.xyz", // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true, // Generate sitemap (set to "false" to disable)
  },
  renderers: ["@astrojs/renderer-svelte"],
  markdownOptions: {
    render: [
      "@astrojs/markdown-remark",
      {
        remarkPlugins: [
          [
            "@stefanprobst/remark-shiki",
            {
              highlighter: await getHighlighter({ theme: "github-dark" }),
            },
          ],
          "remark-smartypants",
          "remark-gfm",
          "remark-math",
          "remark-twemoji",
          // Add a Remark plugin that you want to enable for your project.
          // If you need to provide options for the plugin, you can use an array and put the options as the second item.
          // ['remark-autolink-headings', { behavior: 'prepend'}],
        ],
        rehypePlugins: [
          "rehype-katex",
          "rehype-slug",
          // Add a Rehype plugin that you want to enable for your project.
          // If you need to provide options for the plugin, you can use an array and put the options as the second item.
          // 'rehype-slug',
          // ['rehype-autolink-headings', { behavior: 'prepend'}],
        ],
      },
    ],
  },
};
