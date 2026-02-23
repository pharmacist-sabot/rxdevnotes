# Task: Implement Social Share Component

## Context

The user wants to add "Share to Social Media" functionality to blog posts.
Current Stack: Astro, TypeScript, Tailwind/CSS Variables, Iconify (`astro-icon`).

## Objective

1. Create a reusable `ShareButtons` component.
2. Integrate this component into the `BlogPostLayout`.
3. Ensure the design matches the existing site theme (using CSS variables from `global.css`).

## Plan of Action

### Step 1: Create Component `src/components/blog/ShareButtons.astro`

Create a new Astro component that accepts `title` (string) and `url` (URL | string) as props.

**Requirements:**

- **Platforms:**
  1. **Facebook:** `https://www.facebook.com/sharer/sharer.php?u={url}`
  2. **X (Twitter):** `https://twitter.com/intent/tweet?url={url}&text={title}`
  3. **Line:** `https://social-plugins.line.me/lineit/share?url={url}`
  4. **LinkedIn:** `https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}`
  5. **Copy Link:** A button that copies the current URL to the clipboard using `navigator.clipboard`.

- **Icons:** Use `astro-icon`. Suggested icons:
  - `mdi:facebook`
  - `mdi:twitter` (or `mdi:twitter-x` / `ri:twitter-x-fill`)
  - `bi:line` (or `fa6-brands:line`)
  - `mdi:linkedin`
  - `heroicons:link` (for copy link)

- **Styling:**
  - Use a flex container with `gap`.
  - Buttons should be circular or rounded squares.
  - Use `var(--font-color-light)` for default state and `var(--brand-color)` on hover.
  - Add a simple tooltip or `title` attribute for accessibility (e.g., "Share on Facebook").

- **Script (Client-side):**
  - Add a small `<script>` block to handle the "Copy Link" click event.
  - Show a temporary "Copied!" feedback (e.g., changing the icon or tooltip text) when clicked.

### Step 2: Register in `astro.config.mjs`

Add `'./src/components/blog/ShareButtons.astro'` to the `autoImport` integration list in `astro.config.mjs` to maintain project consistency.

### Step 3: Integrate into `src/layouts/BlogPostLayout.astro`

1. Access `Astro.url` to get the current full URL.
2. Place the `<ShareButtons />` component in the **Footer** of the article.
   - **Location:** Inside `footer.post-footer`, just above or below the `.tags-list`.
   - **Props:** Pass `title={title}` and `url={Astro.url}`.

### Step 4: Styling & Polish

- Ensure the layout is responsive (wrap buttons on very small screens if necessary).
- Check `src/styles/global.css` to ensure no conflicting styles.
- Add a label text "Share this article:" above the buttons if it improves UX.

## Technical Constraints

- Do NOT install external social sharing libraries. Use native URL parameters.
- Ensure `Astro.url` generates an absolute URL (e.g., starts with https://rxdevman.com...).
- Use `color-mix` for hover effects if needed, consistent with existing buttons.
