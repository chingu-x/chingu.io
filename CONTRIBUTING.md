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
├── ui/        # Headless primitives (Base UI wrappers, low-level building blocks)
├── shared/    # Composed components that combine ui/ primitives (e.g. ActionButton)
└── layout/    # Full structural components (e.g. Navbar, MenuContent)
```

**Always build at the correct tier.** A reusable button belongs in `shared/`, not `layout/`. A one-off page section belongs in `layout/`, not `shared/`. Never skip tiers — don't reach into `ui/` from `layout/` when a `shared/` component already does what you need.

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
className="bg-(--color-nav-background)"

// wrong
className="bg-slate-900"
```

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

## Before Opening a PR

- [ ] `pnpm check` passes (lint + format)
- [ ] `pnpm test` passes
- [ ] No new packages added without discussion
- [ ] New components placed at the correct tier
- [ ] Colors and theme values use CSS custom properties
- [ ] No logic duplicated from an existing component
