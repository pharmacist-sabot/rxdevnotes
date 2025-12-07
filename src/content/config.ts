import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
