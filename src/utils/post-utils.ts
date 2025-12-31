import type { CollectionEntry } from 'astro:content';

/**
 * Calculate related posts based on tags and category matching.
 * Uses a scoring system: +2 points per matching tag, +1 point for matching category.
 * Falls back to most recent posts if no related posts are found.
 */
export function getRelatedPosts(
  allPosts: CollectionEntry<'blog'>[],
  currentSlug: string,
  currentTags: string[],
  currentCategory: string,
  limit: number = 3,
): CollectionEntry<'blog'>[] {
  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug);

  // Calculate scores for each post
  const scoredPosts = otherPosts.map((post) => {
    let score = 0;

    // +2 points for each matching tag
    const postTags = post.data.tags || [];
    for (const tag of postTags) {
      if (currentTags.includes(tag)) {
        score += 2;
      }
    }

    // +1 point for matching category
    if (post.data.category === currentCategory) {
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
    return (
      new Date(b.post.data.pubDate).getTime()
        - new Date(a.post.data.pubDate).getTime()
    );
  });

  // Check if we have any posts with score > 0
  const postsWithScore = scoredPosts.filter(item => item.score > 0);

  if (postsWithScore.length > 0) {
    // Return top 'limit' related posts
    return postsWithScore.slice(0, limit).map(item => item.post);
  }

  // Fallback: return most recent posts if no related posts found
  const recentPosts = [...otherPosts].sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
  );

  return recentPosts.slice(0, limit);
}
