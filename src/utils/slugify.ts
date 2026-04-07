export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/-{2,}/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Extract the URL-friendly slug from an Astro v6 Content Layer entry id.
 *
 * The glob loader sets `entry.id` to the file path relative to the `base`
 * directory, e.g.:
 *   "my-post/index.mdx"  →  "my-post"
 *   "another-post.md"    →  "another-post"
 */
export function getEntrySlug(id: string): string {
  return id
    .replace(/\/index\.(md|mdx)$/, '') // strip trailing /index.md(x)
    .replace(/\.(md|mdx)$/, ''); // strip remaining extension
}
