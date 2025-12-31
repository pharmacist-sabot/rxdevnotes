import type { CollectionEntry } from 'astro:content';

import { getCollection } from 'astro:content';

/**
 * Cached blog posts collection.
 * Since Astro pre-renders pages at build time, this module-level cache
 * ensures the collection is fetched only once during the build process,
 * avoiding redundant queries across multiple page renders.
 */
let cachedPosts: CollectionEntry<'blog'>[] | null = null;

/**
 * Get all blog posts with caching.
 * Results are cached at the module level to avoid repeated collection fetches.
 */
export async function getAllBlogPosts(): Promise<CollectionEntry<'blog'>[]> {
  if (cachedPosts === null) {
    cachedPosts = await getCollection('blog');
  }
  return cachedPosts;
}
