import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import pagefind from 'astro-pagefind';
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rxdevnotes.vercel.app/',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  integrations: [mdx(), icon(), sitemap(), pagefind()],
  adapter: vercel(),
});
