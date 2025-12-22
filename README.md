# 🧠 RxDev Man

> **The Developer's Living Knowledge Base.**
> A high-performance, interactive knowledge graph built for modern software engineers.

🌐 **[Live Demo: rxdevman.com](https://www.rxdevman.com/)**

![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=flat&logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat&logo=supabase)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?style=flat&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)

**RxDev Man** is more than just a blog—it's a modular, interactive documentation system designed to help developers master their craft. Built on **Astro's Island Architecture**, it delivers static content with lightning-fast performance while seamlessly hydrating interactive elements like search and analytics.

---

## 🔑 Key Features

### 📚 Rich Content Experience

- **MDX-Powered**: Author content in Markdown with the power of embedded components.
- **Interactive Blocks**:
  - `<CodeExplainer />`: Break down complex logic line-by-line.
  - `<InfoBox />`: Highlight critical warnings, tips, and notes.
  - `<ProsCons />`: Visual comparison tables for architectural decisions.
  - `<GitCommand />`: Copy-paste friendly terminal snippets.
- **Syntax Highlighting**: Beautiful code blocks powered by Shiki (GitHub Dark theme).

### ⚡ Performance & Architecture

- **Zero-JS by Default**: HTML-first rendering for optimal SEO and load times.
- **Hybrid Rendering**: Static Site Generation (SSG) for content, with Server-Side Rendering (SSR) capabilities for dynamic features.
- **Client-Side Search**: Instant, typo-tolerant search using **Pagefind**.

### 📊 Analytics & Data

- **Real-Time View Counts**: Integrated with **Supabase** to track article engagement.
- **Type-Safe Content**: Validated frontmatter schemas using **Zod**.

---

## 🛠️ Tech Stack

| Category     | Technology                                    | Usage                       |
| ------------ | --------------------------------------------- | --------------------------- |
| **Core**     | [Astro 5.x](https://astro.build/)             | Framework & Build Tool      |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type Safety                 |
| **Content**  | [MDX](https://mdxjs.com/)                     | Interactive Markdown        |
| **Styling**  | CSS Variables                                 | Scoped, theme-aware styling |
| **Database** | [Supabase](https://supabase.com/)             | View counters & Analytics   |
| **Search**   | [Pagefind](https://pagefind.app/)             | Static search indexing      |
| **Icons**    | [Iconify](https://iconify.design/)            | `astro-icon` integration    |
| **Deploy**   | [Vercel](https://vercel.com/)                 | Edge Network Deployment     |

---

## 📂 Project Structure

```text
/
├── public/             # Static assets (images, fonts)
├── src/
│   ├── components/     # Reusable UI & MDX components
│   │   ├── CodeExplainer.astro
│   │   ├── InfoBox.astro
│   │   ├── Search.astro
│   │   └── ...
│   ├── content/
│   │   └── blog/       # The Knowledge Base (MDX files)
│   ├── layouts/        # Page layouts (Base, Post, etc.)
│   ├── lib/            # External services (Supabase client)
│   ├── pages/          # File-based routing
│   │   ├── api/        # Server-side API endpoints
│   │   └── ...
│   └── styles/         # Global styles & CSS variables
├── astro.config.mjs    # Astro configuration
└── package.json        # Dependencies & Scripts
```

---

## 🧞 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: v18.17.1 or higher
- **Package Manager**: npm, pnpm, or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/pharmacist-sabot/rxdevnotes.git
    cd rxdevnotes
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your Supabase credentials:

    ```env
    PUBLIC_SUPABASE_URL=your_supabase_project_url
    PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Start the development server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:4321` to see the site.

### Building for Production

To build the static site and index the search:

```bash
npm run build
```

This command will:

1. Build the Astro site.
2. Run `pagefind` to index the content for search.

### Troubleshooting

**Build fails with Supabase errors:**

- Ensure your `.env` file contains valid Supabase credentials.
- For local development without Supabase, the site will work but view counters will not function.

**Search not working:**

- Run `npm run build` to generate the search index.
- The search feature requires the production build to function properly.

**Port already in use:**

- Change the dev server port: `npm run dev -- --port 3000`

---

## 🎯 Roadmap

- [ ] **Dark Mode Toggle**: User-selectable theme preferences
- [ ] **Tag System**: Filter articles by technology/topic
- [ ] **RSS Feed**: Subscribe to new content
- [ ] **Comment System**: Community engagement
- [ ] **Series/Collections**: Group related articles
- [ ] **Reading Progress**: Track reader engagement
- [ ] **Multi-language Support**: i18n implementation

---

## 📝 Contributing

We welcome contributions from the community!

1.  **Fork** the repository.
2.  Create a **Feature Branch** (`git checkout -b feat/new-topic`).
3.  Commit your changes with **Conventional Commits** (`feat: add guide on system design`).
4.  **Push** to your branch.
5.  Open a **Pull Request**.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

> **“The best developers are eternal students.”**
