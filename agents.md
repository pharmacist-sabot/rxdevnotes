# Refactoring Task: Reorganize Blog Content and Assets

## Context

This is an Astro project. Currently, the file structure for blog posts and images is flat and cluttered.

- Blog posts are located at: `src/content/blog/*.mdx`
- Images are scattered in: `public/`, `public/blog/`, and `public/images/`

## Objective

Refactor the file structure to use **Directory-based (Page Bundle)** organization for MDX files and a structured hierarchy for public images. The goal is to improve maintainability without breaking existing URLs or image paths.

## Plan of Action

### Phase 1: Reorganize MDX Files (Page Bundles)

For every `.mdx` file in `src/content/blog/`:

1. Create a new directory inside `src/content/blog/` with the same name as the file (minus the extension).
   - Example: `src/content/blog/my-article.mdx` -> `src/content/blog/my-article/`
2. Move the `.mdx` file into that directory and rename it to `index.mdx`.
   - Result: `src/content/blog/my-article/index.mdx`
3. **Important:** Use `git mv` command if possible to preserve file history.

### Phase 2: Reorganize Public Images

1. Create a standardized directory structure: `public/images/blog/`
2. Identify images belonging to specific blog posts.
3. Move images into specific subdirectories: `public/images/blog/[slug-of-the-post]/`
   - If an image is generic (used across multiple posts), move it to `public/images/common/`.
4. **Important:** Use `git mv` to move the image files.

### Phase 3: Update References

Iterate through all `src/content/blog/**/*.mdx` files and update image paths:

1. **Frontmatter (`heroImage`):**
   - Update the path string to match the new location in `public/`.
   - Example: `heroImage: '/blog/old-img.png'` -> `heroImage: '/images/blog/my-article/old-img.png'`

2. **Markdown Images (`![alt](src)`):**
   - Update standard markdown image links.
   - Example: `![alt](/blog-placeholder-1.png)` -> `![alt](/images/blog/my-article/blog-placeholder-1.png)`

3. **Astro `<Image />` Component:**
   - Update the `src` attribute.
   - Example: `<Image src="/blog/img.png" />` -> `<Image src="/images/blog/my-article/img.png" />`

### Phase 4: Verification

1. Run `npm run lint` or `npm run build` to ensure no broken paths.
2. Ensure that the `slug` generation logic in `src/utils/slugify.ts` or `astro.config.mjs` is not affected (Astro automatically handles `index.mdx` inside folders correctly, so this should remain safe).

## Constraints & Rules

- Do NOT delete any files.
- Do NOT change the logic in `src/content/config.ts`.
- Ensure all paths remain absolute paths starting with `/` (referencing the public folder).
- If you encounter duplicate image names, resolve them by appending the post slug to the filename.

## Execution Order

Please perform Phase 1 first. Once confirmed, proceed to Phase 2 and 3 together.
