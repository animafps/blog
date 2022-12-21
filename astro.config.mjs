import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import prefetch from "@astrojs/prefetch";
import critters from "astro-critters";
import compress from "astro-compress";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://animafps.xyz',
  integrations: [image(), mdx(), sitemap(), prefetch(), critters(), compress(), svelte()],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    }
  }
});