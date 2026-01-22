# Qilin's Blog

A high-performance, minimalist personal tech blog built with modern web technologies.

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Content**: MDX (Markdown + React Components)
- **Deployment**: [Vercel](https://vercel.com/)
- **CI/CD**: GitHub Actions

## Features

- Dark/Light mode with system preference detection
- MDX support for rich content with React components
- Syntax highlighting with [Shiki](https://shiki.style/)
- Auto-generated sitemap and robots.txt
- SEO optimized with dynamic metadata
- Fully responsive design
- Static site generation for optimal performance

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/my-tech-blog.git
cd my-tech-blog
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-tech-blog/
├── app/                    # Next.js App Router pages
│   ├── posts/[slug]/       # Dynamic post pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # Robots.txt configuration
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   ├── navbar.tsx          # Site navigation
│   ├── footer.tsx          # Site footer
│   ├── theme-provider.tsx  # Dark mode provider
│   └── theme-toggle.tsx    # Dark mode toggle
├── content/
│   └── posts/              # MDX blog posts
├── lib/                    # Utility functions
│   ├── mdx.ts              # MDX parsing utilities
│   └── utils.ts            # General utilities
├── types/                  # TypeScript type definitions
└── .github/workflows/      # GitHub Actions CI/CD
```

## Writing Posts

Create a new MDX file in `content/posts/` with frontmatter:

```mdx
---
title: "Your Post Title"
date: "2025-01-20"
description: "A brief description of your post"
---

Your content here...
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and deploy

### Environment Variables

Set these in your deployment platform:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_BASE_URL` | Your site's base URL (e.g., `https://yourdomain.com`) |

## CI/CD

GitHub Actions automatically runs on every push and PR to `main`:

- ESLint linting
- TypeScript type checking
- Next.js build verification

## License

MIT License - feel free to use this template for your own blog.
