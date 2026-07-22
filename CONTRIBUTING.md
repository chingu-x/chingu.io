# Contributing to Chingu.io v2

## Core Principles

Before writing a line of code, internalize these three principles:

- **Reuse first.** Check what already exists before building something new.
- **Respect the architecture.** New code should look like it belongs next to existing code.
- **Keep it simple.** The right amount of complexity is what the task actually requires — no more.

---

## Architecture

The project is organized around a three-tier component hierarchy:

```
src/components/
├── ui/        # Base UI primitives (shadcn components, Base UI, low-level building blocks)
├── shared/    # Composed components (Shared across pages, e.g. ActionButton)
└── layout/    # Full structural components (e.g. Navbar, Footer)
```

**Always build at the correct tier.** A reusable button belongs in `shared/`, not `layout/`. A layout component like Navbar or Footer belongs in `layout/`. Never skip tiers — don't reach into `ui/` from `layout/` when a `shared/` component already does what you need.

### Data & Types

Content and data are separated from components:

```
src/content/   # Static data (nav items, copy, config)
src/types/     # TypeScript interfaces and type definitions
```

Keep data out of components. If a component needs static content, define it in `content/` and import it. If you're defining a shape, define it in `types/` and import it — don't inline types in component files.

---

## Styling

This project uses **Tailwind CSS v4** with **CSS custom properties** and **`cva`** (class-variance-authority).

### Rules

**Use CSS custom properties for all colors and theme values.** They are defined in `src/styles.css`. Do not hardcode color values in components.

```tsx
// correct
className="bg-nav-background"

// wrong
className="bg-slate-900"
```

**Design for responsive layouts from the start.** Use Tailwind's responsive prefixes (`sm:`, `md`, `lg:`, etc.) for screen-size-specific styling. Test on both mobile, tablet and desktop layouts during development.

**Use `cva` for any component that has variants or complex class logic.** Define styles at the top of the file, outside the component function.

```tsx
// correct
const buttonStyle = cva(`base-classes`, {
  variants: { ... }
})

export function MyButton() {
  return <button className={buttonStyle()} />
}

// wrong — inline ternaries and template strings for variants
```

**Use the `cn()` utility** (clsx + tailwind-merge) when merging classes conditionally.

---

## Packages

**Do not add a package when the project already has one that does the job.**

Before reaching for a new library, check:

- `src/components/ui/` — Base UI primitives already available
- Tabler Icons and Lucide React for icons
- Just className strings, e.g. `flex flex-col ...` for simple, static styling
- `cva` for variant styling
- `cn` utility for class merging

If you genuinely need something new, open a discussion first. Every new dependency has a maintenance cost.

---

## Code Style

- **One component per file.** Name the file after the component.
- **Named exports only.** No default exports.
- **Types in `src/types/`.** Don't inline complex types in component files.
- **Import aliases:** use `#/` for src-relative imports (`#/components/...`, `#/types/...`).
- Linting and formatting are handled by [Biome](https://biomejs.dev/). Run `pnpm check` before committing.

---

## Workflow

1. **Branch from `main`.**
   ```
   git checkout main && git pull
   git checkout -b feat/your-feature
   ```

2. **Test and document components.**
   - Add a story in `src/stories/` for any new shared or layout component
   - Test responsive design across mobile, tablet, and desktop breakpoints
   - Verify the component works in Storybook and in context on the actual page

3. **Open a pull request** against `main` when your work is ready for review.

4. **Rebase merge only.** PRs are merged with rebase to maintain a linear history. Do not use merge commits or squash merge.

---

## Before Opening a PR

- [ ] `pnpm check` passes (lint + format)
- [ ] `pnpm test` passes
- [ ] No new packages added without discussion
- [ ] New components placed at the correct tier
- [ ] Colors and theme values use CSS custom properties
- [ ] No logic duplicated from an existing component
- [ ] New shared/layout components have a Storybook story
- [ ] Responsive design tested (mobile and desktop breakpoints)
