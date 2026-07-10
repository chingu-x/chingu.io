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
├── routes/       # File-based routes (TanStack Router)
├── components/   # Shared UI components
├── features/     # Feature modules
├── content/      # Content files
├── lib/          # Utility functions
├── stories/      # Storybook stories
└── types/        # TypeScript type definitions
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values. Variables include Sentry configuration for error monitoring.

## Deployment

This project includes `nixpacks.toml` for Railway deployment:

1. Push to GitHub
2. Create a new project at [railway.com](https://railway.com/new) from your repo
3. Add environment variables from `.env.example` in the **Variables** tab
