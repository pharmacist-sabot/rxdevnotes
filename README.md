# 🧠 RxDev Man: The Developer's Living Knowledge Base

> **Your ultimate, ever-growing knowledge base for modern software development.** From Git workflows to system architecture, debugging tricks to UI/UX best practices — meticulously curated by a developer, for developers.

RxDev Man is a **living, breathing repository** of software engineering knowledge. It is designed to be more than just a collection of notes; it is a modular, interactive knowledge graph built to help developers master their craft.

---

## 🚀 Features

Built with **Astro**, this project combines high performance with a rich content authoring experience:

- **📚 Modular Knowledge Graph**: Content is organized into self-contained `.mdx` guides.
- **⚡ High Performance**: Static site generation (SSG) by default, with support for SSR/Hybrid rendering.
- **🧩 Interactive Components**: Rich UI blocks embedded directly in markdown:
  - `CodeExplainer`: Break down complex code snippets.
  - `InfoBox`: Highlight key takeaways, warnings, or tips.
  - `ProsCons`: Visual comparison tables.
  - `GitCommand`: Specialized formatting for terminal commands.
- **🔍 Built-in Search**: Fast, client-side search functionality.
- **📱 Responsive Design**: Optimized for reading on any device.
- **🌑 Dark Mode Support**: Built-in theming capabilities.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (v5.x)
- **Content**: MDX (Markdown + JSX)
- **Styling**: CSS Variables & Scoped Styles
- **Icons**: `astro-icon` with Iconify
- **Search**: `astro-pagefind`
- **Deployment**: Vercel Adapter configured

---

## 📂 Project Structure

```text
/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── CodeExplainer.astro
│   │   ├── InfoBox.astro
│   │   ├── Search.astro
│   │   └── ...
│   ├── content/
│   │   └── blog/       # MDX Content files (The Knowledge Base)
│   ├── layouts/        # Page layouts
│   └── pages/          # Application routes
└── astro.config.mjs    # Astro configuration
```

---

## 🧞 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

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

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:4321` to see the site in action.

---

## 📝 Contributing

Contributions are welcome! Whether it's fixing a typo, adding a new guide, or improving a component.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feat/amazing-topic`).
3.  Commit your changes using **Conventional Commits** (e.g., `feat: add guide on rust variables`).
4.  Push to the branch.
5.  Open a Pull Request.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

> **“The best developers are eternal students.”**
