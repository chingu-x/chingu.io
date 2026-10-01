# Chingu.io v2

The Chingu.io web application, built with TanStack Start.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19)
- **Routing:** [TanStack Router](https://tanstack.com/router) (file-based)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** Base UI, shadcn/ui, Tabler Icons, Lucide React
- **Testing:** [Vitest](https://vitest.dev/) + Playwright
- **Linting/Formatting:** [Biome](https://biomejs.dev/)
- **Monitoring:** Sentry
- **Package Manager:** pnpm

## Getting Started

```bash
pnpm install
cp .env.example .env.local  # add your environment variables
pnpm dev
```

The dev server runs at `http://localhost:3000`.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests |
| `pnpm lint` | Lint with Biome |
| `pnpm format` | Format with Biome |
| `pnpm check` | Lint + format check |
| `pnpm storybook` | Run Storybook at port 6006 |

## Project Structure

```
src/
├── routes/         # File-based routes (TanStack Router)
├── components/     # UI components organized by tier:
│   ├── ui/         # Shadcn components (BaseUI)
│   ├── shared/     # Composed components (Shared across pages, e.g. ActionButton)
│   └── layout/     # Full structural components (e.g. Navbar, Footer)
├── features/       # Feature modules
├── content/        # Static data (nav items, copy, config)
├── lib/            # Utility functions and helpers
├── styles/         # Global styles (CSS custom properties, theme)
├── stories/        # Storybook stories for component showcase
└── types/          # TypeScript type definitions
```

## Site Map

Every page in `src/routes/` is listed below with the content files it reads from. Copy lives in `src/content/`; a route's own JSX holds layout and any inline copy.

| Route | Page | Content files |
|---|---|---|
| `/` | Home | `content/stats.ts`, `content/home/role-cards.ts`, `content/home/tools.ts`, `content/home/testimonials.ts`, `content/home/projects.ts`, `content/home/journey-nodes.ts` |
| `/apply` | Apply to a Voyage | `content/apply/requirements.ts`, `content/apply/timeline.ts`, `content/apply/why-join.ts` |
| `/community/about` | About Chingu | `content/community/about-values.ts`, `content/community/about-differences.ts`, `content/stats.ts` |
| `/community/why-its-free` | Why it's free | `content/community/free-guarantees.ts`, `content/community/free-qna.ts`, `content/community/free-spendings.ts` |
| `/community/who-runs-chingu` | Who runs Chingu | `content/community/who-teams.ts` |
| `/community/community-programs` | Community programs | `content/community/programs-book-club.ts`, `content/community/programs-channels.ts`, `content/community/programs-workshops.ts` |
| `/roles/developers` | For Developers | `content/roles/developer-types.ts`, `content/roles/developer-skills.ts`, `content/roles/developer-testimonial.ts`, `content/roles/developer-wordcloud.ts` |
| `/roles/designers` | For Designers | `content/roles/designer-types.ts`, `content/roles/designer-skills.ts`, `content/roles/designer-testimonial.ts` |
| `/roles/agile-leaders` | For Agile Leaders | `content/roles/agile-leaders-types.ts`, `content/roles/agile-leaders-skills.ts`, `content/roles/agile-leaders-testimonials.ts` |
| `/teams/standard-voyage` | Standard Voyage | `content/teams/voyage-cards.ts`, `content/teams/voyage-timeline.ts`, `content/teams/voyage-stack-list.ts`, `content/teams/voyage-testimonial.ts` |
| `/teams/voyage-xp` | Voyage XP | `content/teams/voyage-xp-prerequisites.ts`, `content/teams/voyage-xp-mentorship.ts`, `content/teams/voyage-xp-comparison.ts`, `content/teams/voyage-xp-testimonial.ts` |
| `/teams/pair-programming` | Pair Programming | `content/teams/pair-programming-audience.ts`, `content/teams/pair-programming-steps.ts` |

Site-wide content, not tied to one route:

| Content file | Used by |
|---|---|
| `content/nav.ts` | `components/shared/layout/nav/desktop-nav.tsx`, `nav/mobile-nav.tsx` |
| `content/footer.ts` | `components/shared/layout/footer.tsx` |
| `content/stats.ts` | Home and `/community/about` |

## Storybook

Storybook is used for component development and documentation. Start the Storybook dev server with:

```bash
pnpm storybook
```

Stories are located in `src/stories/` and correspond to components throughout the application. 

## Reference Site
https://jokma.com/chingu/site-redesign/

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values. Variables include Sentry configuration for error monitoring.

## Deployment

This project includes `nixpacks.toml` for Railway deployment:

1. Push to GitHub
2. Create a new project at [railway.com](https://railway.com/new) from your repo
3. Add environment variables from `.env.example` in the **Variables** tab
