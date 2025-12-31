import type { CollectionEntry } from 'astro:content';

/**
 * Safely parse a date, returning 0 for invalid dates
 */
function safeGetTime(date: Date | string | undefined): number {
  if (!date)
    return 0;
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
}

/**
 * Calculate related posts based on tags and category matching.
 * Uses a scoring system: +2 points per matching tag, +1 point for matching category.
 * Falls back to most recent posts if no related posts are found.
 */
export function getRelatedPosts(
  allPosts: CollectionEntry<'blog'>[],
  currentSlug: string,
  currentTags: string[] = [],
  currentCategory = '',
  limit = 3,
): CollectionEntry<'blog'>[] {
  // Normalize inputs with defaults
  const safeTags = currentTags ?? [];
  const safeCategory = currentCategory ?? '';

  // Filter out the current post and posts without valid pubDate
  const otherPosts = allPosts.filter(
    post => post.slug !== currentSlug && post.data.pubDate,
  );

  // Calculate scores for each post
  const scoredPosts = otherPosts.map((post) => {
    let score = 0;

    // +2 points for each matching tag
    const postTags = post.data.tags ?? [];
    for (const tag of postTags) {
      if (safeTags.includes(tag)) {
        score += 2;
      }
    }

    // +1 point for matching category
    if (safeCategory && post.data.category === safeCategory) {
      score += 1;
    }

    return { post, score };
  });

  // Sort by score (descending), then by pubDate (descending) for tie-breaking
  scoredPosts.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // Tie-breaker: newer posts first
    return safeGetTime(b.post.data.pubDate) - safeGetTime(a.post.data.pubDate);
  });

  // Check if we have any posts with score > 0
  const postsWithScore = scoredPosts.filter(item => item.score > 0);

  if (postsWithScore.length > 0) {
    // Return top 'limit' related posts
    return postsWithScore.slice(0, limit).map(item => item.post);
  }

  // Fallback: return most recent posts if no related posts found
  const recentPosts = [...otherPosts].sort(
    (a, b) => safeGetTime(b.data.pubDate) - safeGetTime(a.data.pubDate),
  );

  return recentPosts.slice(0, limit);
}
