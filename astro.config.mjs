// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap'; 
import pagefind from 'astro-pagefind'; 

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
