# Agent Guide for Chingu.io v2

This document provides guidelines for AI agents working on the Chingu.io v2 project. It consolidates the project's architecture, standards, and workflows to ensure consistency and quality.

## Project Overview

Chingu.io v2 is a modern web application built with **TanStack Start** (React 19), featuring file-based routing, component-driven UI development with Storybook, and responsive design as a core principle.

**Development Server:** `http://localhost:3000` (via `pnpm dev`)
**Storybook:** `http://localhost:6006` (via `pnpm storybook`)

---

## Tech Stack

- **Framework:** TanStack Start (React 19)
- **Routing:** TanStack Router (file-based)
- **Styling:** Tailwind CSS v4 with CSS custom properties
- **Components:** Base UI, shadcn/ui, Tabler Icons, Lucide React
- **Component Logic:** cva (class-variance-authority) for variants
- **Testing:** Vitest + Playwright
- **Linting/Formatting:** Biome
- **Monitoring:** Sentry
- **Package Manager:** pnpm

---

## Core Principles

Every change should reflect these three principles:

1. **Reuse first.** Always check what already exists before building something new. This includes:
   - Components in `src/components/ui/` (Base UI, shadcn/ui)
   - Icons in Tabler Icons or Lucide React
   - Utility functions in `src/lib/`
   - Existing styles and CSS custom properties

2. **Respect the architecture.** New code must look like it belongs next to existing code. This means:
   - Following the three-tier component hierarchy
   - Keeping data in `src/content/` and `src/types/`
   - Using the established import alias pattern (`#/...`)
   - Matching the code style and patterns you see in the codebase

3. **Keep it simple.** The right amount of complexity is what the task actually requires — no more.
   - Don't add speculative features or premature abstractions
   - Don't add error handling for impossible scenarios
   - Don't add unnecessary comments or type annotations
   - Delete unused code completely; don't rename it with underscores or add "removed" comments

---

## Architecture

### Component Hierarchy

The project organizes components into three tiers. **Always place new components at the correct tier:**

```
src/components/
├── ui/        # Base UI primitives (shadcn components, Base UI wrappers)
├── shared/    # Composed components (Shared across pages, e.g. ActionButton)
└── layout/    # Full structural components (e.g. Navbar, Footer)
```

**Tier Placement Rules:**
- **ui/**: Lowest-level, mostly unstyled or minimally styled primitives. Imported from Base UI or shadcn/ui.
- **shared/**: Combines ui/ primitives into reusable, styled components. Used across multiple pages.
- **layout/**: Full structural components (Navbar, Footer, sidebars). Components that form the page layout structure.
- **Never skip tiers.** Don't reach into `ui/` from `layout/` when a `shared/` component already does what you need.

### Data & Types

Content and data live outside components:

```
src/content/   # Static data (nav items, copy, config)
src/types/     # TypeScript interfaces and type definitions
src/lib/       # Utility functions and helpers
```

**Data Rules:**
- If a component needs static content, define it in `src/content/` and import it.
- If you're defining a TypeScript shape, define it in `src/types/` and import it.
- Never inline types or large data structures in component files.

### Routes & Pages

```
src/routes/    # File-based routes (TanStack Router)
```

Use TanStack Router's file-based routing. Each route file is a page or section.

---

## Styling Guidelines

### CSS Custom Properties

**All colors and theme values must use CSS custom properties.** They are defined in `src/styles/styles.css`. Never hardcode color values.

```tsx
// ✅ correct
className="bg-nav-background"

// ❌ wrong
className="bg-slate-900"
```

### Responsive Design

**Design for responsive layouts from the start.** Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.) for screen-size-specific styling.

```tsx
// ✅ correct
className="flex flex-col lg:flex-row gap-4 lg:gap-8"

// ❌ wrong
className="flex flex-col gap-4"  // no responsive variants
```

Always test across mobile, tablet, and desktop breakpoints.

### Variant Styling with cva

**Use `cva` for any component that has variants or complex class logic.** Define styles outside the component function.

```tsx
// ✅ correct
const buttonStyle = cva('base-classes', {
  variants: {
    size: { sm: 'text-sm', lg: 'text-lg' },
    intent: { primary: 'bg-blue-500', secondary: 'bg-gray-300' },
  },
})

export function MyButton({ size, intent, children }) {
  return <button className={buttonStyle({ size, intent })}>{children}</button>
}

// ❌ wrong — inline ternaries or template strings
```

### Class Merging

**Use the `cn()` utility** (clsx + tailwind-merge) when merging classes conditionally.

```tsx
className={cn('base-classes', condition && 'conditional-class')}
```

---

## Code Style

- **One component per file.** Name the file after the component.
- **Named exports only.** No default exports.
- **Types in `src/types/`.** Don't inline complex types in component files.
- **Import aliases:** Use `#/` for src-relative imports: `#/components/...`, `#/types/...`, `#/lib/...`.
- **Linting and formatting:** Run `pnpm check` before committing. Biome enforces style.

---

## Development Workflow

### 1. Start from main

```bash
git checkout main && git pull
git checkout -b feat/your-feature
```

### 2. Test and Document Components

- Add a story in `src/stories/` for any new **shared** or **layout** component
- Test responsive design across mobile, tablet, and desktop breakpoints
- Verify the component works in Storybook **and** in context on the actual page

### 3. Quality Checks Before Committing

Run these before pushing:

```bash
pnpm check      # Lint + format check (enforced by Biome)
pnpm test       # Run tests (Vitest + Playwright)
pnpm build      # Build for production (catches TS and build errors)
```

### 4. Open a Pull Request

- PR should be against `main`
- Include a clear description of what changed and why
- Link to any related issues or tasks

### 5. Merge Strategy

- PRs are merged with **rebase merge** to maintain a linear history
- Do NOT use merge commits or squash merge

---

## Before Opening a PR — Checklist

- [ ] `pnpm check` passes (lint + format)
- [ ] `pnpm test` passes (all tests green)
- [ ] `pnpm build` succeeds (no TypeScript or build errors)
- [ ] No new packages added without discussion
- [ ] New components placed at the correct tier (ui/shared/layout)
- [ ] Colors and theme values use CSS custom properties, not hardcoded values
- [ ] No logic duplicated from an existing component
- [ ] New shared/layout components have a Storybook story
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Code follows the style rules (one component per file, named exports, etc.)

---

## Common Patterns & Anti-Patterns

### ✅ Do

- Check what exists before building something new
- Place components at the correct tier
- Use CSS custom properties for colors
- Use responsive prefixes in Tailwind classes
- Define types in `src/types/`
- Define static data in `src/content/`
- Use `cva` for variant styling
- Write stories for new shared/layout components
- Test across all screen sizes
- Use `pnpm check` before committing

### ❌ Don't

- Hardcode color values in components
- Create abstract utilities for one-off operations
- Add unnecessary error handling or validation
- Inline complex types in component files
- Mix data with component logic
- Use default exports
- Skip component tiers or reach across them
- Add speculative features or premature abstractions
- Commit without running `pnpm check`
- Add packages without discussion

---

## Project Structure Reference

```
src/
├── routes/         # File-based routes (TanStack Router)
├── components/     # UI components organized by tier:
│   ├── ui/         # Base UI primitives (shadcn, Base UI)
│   ├── shared/     # Composed components (shared across pages)
│   └── layout/     # Full structural components (page-level)
├── features/       # Feature modules (if used)
├── content/        # Static data (nav items, copy, config)
├── lib/            # Utility functions and helpers
├── styles/         # Global styles (CSS custom properties, theme)
├── stories/        # Storybook stories for component showcase
└── types/          # TypeScript type definitions
```

---

## Scripts Reference

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start development server (port 3000) |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests (Vitest + Playwright) |
| `pnpm lint` | Lint with Biome |
| `pnpm format` | Format with Biome |
| `pnpm check` | Lint + format check (run before committing) |
| `pnpm storybook` | Start Storybook (port 6006) |

---

## Notes for AI Agents

When working on this project:

1. **Read the existing code first.** Before suggesting changes or creating new components, explore the codebase to understand patterns.
2. **Follow the three-tier hierarchy strictly.** This is not a suggestion — it's the architectural constraint.
3. **Always check CONTRIBUTING.md and this agent.md** for the latest guidelines before implementing.
4. **Test comprehensively.** Don't assume responsive design works without testing.
5. **Keep commits clean.** One logical change per commit. Use rebase merge workflow.
6. **Use the right tools.** Tailwind for styling, cva for variants, cn() for class merging.
7. **Default to simplicity.** If you can do something in one line, don't create a helper function.

---

## Links

- [README.md](README.md) — Project overview and getting started
- [CONTRIBUTING.md](CONTRIBUTING.md) — Contribution guidelines and standards
- [TanStack Start Docs](https://tanstack.com/start)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/)
- [cva Documentation](https://cva.style/)
- [Biome Documentation](https://biomejs.dev/)
