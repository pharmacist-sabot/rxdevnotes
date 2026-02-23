/**
 * Estimates the reading time for a given body of text.
 * @param content - Raw text content (e.g. post.body)
 * @returns A formatted string like "3 min read", or null if content is empty.
 */
export function calculateReadingTime(content: string): string | null {
  const wordsPerMinute = 200;
  const normalized = content.trim();
  if (!normalized)
    return null;
  const wordCount = normalized.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}
