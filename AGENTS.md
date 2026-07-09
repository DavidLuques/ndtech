                # NDTech_Luis — Landing page

Static single-page landing page for NDTech (Non-Destructive Testing / Oil & Gas).
Generated from Figma via Make. React 18 + TypeScript + Vite 6 + Tailwind CSS v4.

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |

No test, lint, or typecheck commands exist. No test, lint, or CI infrastructure is configured — set up from scratch if needed.

## Key conventions

- **Alias `@` → `./src`** — use `@/app/App.tsx`, `@/styles/index.css`, etc.
- **No `tsconfig.json`** — Vite handles TypeScript compilation with defaults.
- **Tailwind v4 via `@tailwindcss/vite`** — no `tailwind.config.js`. The `@theme` directive is used in `src/styles/theme.css`. No PostCSS plugins needed.
- **`cn()` utility** from `src/app/components/ui/utils.ts` — use for conditional class merging.
- **Images from Unsplash** (external URLs). Use `<ImageWithFallback>` from `src/app/components/figma/ImageWithFallback.tsx` for error handling.
- **`figma:asset/...` imports** resolve via a custom Vite plugin to `src/assets/`.
- **`.svg` and `.csv`** can be imported as raw URLs (`assetsInclude` in vite.config).
- **Package manager:** pnpm (preferred, `pnpm-workspace.yaml` exists), but npm works too.

## Architecture

Single `<App>` component renders 5 sections in order: `Navbar → Hero → Services → About → Contact → Footer`. No router, no API calls, no backend. All data is static (`src/app/data/servicesData.ts`).

## UI components

Full **shadcn/ui** library at `src/app/components/ui/` (48 components). Most are unused — only import what the page actually needs. Design guidelines template at `guidelines/Guidelines.md`.

## Git-ignored

- `src/imports/` — reference/draft materials
- `*.zip` — compressed archives
