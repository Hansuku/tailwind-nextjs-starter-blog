# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚀 Quick Start Commands

```bash
# Development
npm run dev          # Standard Next.js dev server
npm start           # Dev with file watching for content changes

# Build & Production
npm run build       # Production build + sitemap + RSS generation
npm run serve       # Production server locally
npm run analyze     # Bundle size analysis with @next/bundle-analyzer

# Quality
npm run lint        # ESLint + Prettier formatting
```

## 🏗️ Architecture Overview

**Static Blog Generator using Next.js Pages Router**

- **Framework**: Next.js 15.1.4 with React 19.0.0
- **Content**: MDX blog posts in `/data/blog/` with YAML frontmatter
- **Styling**: Tailwind CSS with dark mode support
- **Build**: Static Site Generation (SSG) with RSS feeds and sitemaps

## 📁 Key Directories

```
├── pages/           # Next.js Pages Router (not App Router)
│   ├── blog/        # Blog listing and dynamic post routes
│   ├── tags/        # Tag-based filtering
│   └── api/         # Newsletter subscription APIs
├── data/            # Content + configuration
│   ├── blog/        # Markdown/MDX blog posts
│   └── siteMetadata.js  # Global site config
├── components/      # Reusable React components
├── layouts/         # Page layout templates
├── lib/             # MDX processing, RSS generation, utilities
└── public/          # Static assets, RSS feeds, sitemap
```

## 📝 Content Workflow

1. **Create new post**: `npm run compose` (CLI tool)
2. **Add content**: Write MDX files in `/data/blog/`
3. **Frontmatter**: Include YAML metadata (title, date, tags, draft)
4. **Build**: `npm run build` generates static site + RSS/sitemap

## 🎯 Critical Configuration Files

- **`next.config.js`**: Advanced Next.js config with security headers, CDN setup
- **`tailwind.config.js`**: Custom theme with typography plugin
- **`jsconfig.json`**: Import aliases (@/ prefix for src/)
- **`package.json`**: Modern dependencies, comprehensive scripts

## 🌍 Deployment

- **Docker**: Multi-stage Dockerfile with sharp for image processing
- **CDN**: Production builds use Qiniu CDN (hansuku.com)
- **Static**: SSG output in `.next/` for static hosting

## 🔄 Development Patterns

- **getStaticProps**: All pages use static generation
- **MDX-Bundler**: Compile MDX with custom remark/rehype plugins
- **File-based routing**: Next.js Pages Router convention
- **No client-side data fetching**: Pure static site approach
- **Build-time optimization**: Preact in production, CDN integration
