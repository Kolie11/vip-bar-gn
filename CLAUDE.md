# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/reservation website for "VIP Bar", a bar in Conakry, Guinea. UI copy is in French (an FR/EN toggle exists in the navbar but is not wired to any i18n yet). Supabase (`@supabase/supabase-js`) is installed but not yet used anywhere — forms (e.g. `Reservations.jsx`) only set local state on submit.

## Layout & commands

The actual app lives in `vip-bar-gn/`. Run all npm commands from there:

```bash
cd vip-bar-gn
npm run dev       # Vite dev server
npm run build     # production build to dist/
npm run lint      # ESLint (flat config, eslint.config.js)
npm run preview   # serve the built dist/
```

There is no test framework configured.

The repo root also has a stray `package.json`, `node_modules/` and `tailwind.config.js`. Note: `@tailwindcss/vite` (imported by `vip-bar-gn/vite.config.js`) is only declared in the **root** `package.json`, so it currently resolves from the root `node_modules`. Don't delete the root install without first adding `@tailwindcss/vite` to `vip-bar-gn/package.json`.

## Architecture

- Stack: React 19 + Vite 8 + React Router 7 (`BrowserRouter` in `src/main.jsx`), plain JSX (no TypeScript), icons from `lucide-react`.
- `src/App.jsx` renders `NavBar`, a `<Routes>` block, and `Footer`. Routes: `/`, `/about`, `/galerie`, `/reservation`, `/contact` — one component per page in `src/pages/`. Adding a page means adding the route here and links in both `NavBar.jsx` (desktop + mobile menus) and `Footer.jsx`.

## Styling

Tailwind v4 via the `@tailwindcss/vite` plugin (`@import "tailwindcss"` in CSS). The root `tailwind.config.js` is v3-style and is **not** loaded by v4, so its custom colors (`gold`, `dark-bg`, …) are not real Tailwind theme values.

Instead, `src/styles/globals.css` is the real design system:
- CSS variables on `:root` (`--gold`, `--gold-light`, `--black`, `--dark-bg`, `--dark-card`, `--dark-border`, `--gray-*`).
- Hand-written utility classes that mimic Tailwind names for those colors (`.text-gold`, `.bg-gold`, `.bg-dark-bg`, `.border-dark-border`, …). If you need a new color utility (e.g. `hover:bg-dark-card`), either add it there or define it properly with a Tailwind v4 `@theme` block.
- Semantic component classes used by pages: `.hero`, `.features`, `.feature-card`, `.btn-primary`, `.page-section`, `.page-container`, `.page-title`, `.page-subtitle`, `.footer-*`, etc.

Pages mostly use these semantic classes; `NavBar` mixes Tailwind layout utilities with the custom color classes. `src/App.css` is leftover Vite boilerplate and is not imported.
