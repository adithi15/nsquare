---
kind: build_system
name: Vite + TypeScript Build Pipeline for React SPA
category: build_system
scope:
    - '**'
source_files:
    - package.json
    - vite.config.ts
    - tsconfig.json
    - tailwind.config.cjs
    - index.html
---

## Build System Overview

This repository uses **Vite 6** as the build and development server for a React 19 single-page application, with TypeScript compilation handled by Vite's built-in esbuild pipeline and type-checking via `tsc --noEmit`. Styling is processed through **Tailwind CSS v4** using the `@tailwindcss/vite` plugin.

## Key Files and Configuration

- **`package.json`** — Defines npm scripts: `dev` (Vite dev server on port 3000, bound to `0.0.0.0`), `build` (`vite build`), `preview` (`vite preview`), `clean` (removes `dist/` and `server.js`), and `lint` (`tsc --noEmit`). Declares runtime dependencies (React 19, react-router-dom 7, express, motion, lucide-react) and dev dependencies (Vite, @vitejs/plugin-react, tailwindcss, typescript ~5.8, tsx, esbuild).
- **`vite.config.ts`** — Core build configuration: registers `@vitejs/plugin-react` and `@tailwindcss/vite` plugins; sets an `@` path alias resolving to the project root; configures HMR toggling via the `DISABLE_HMR` environment variable (when true, both HMR and file watching are disabled to reduce CPU usage).
- **`tsconfig.json`** — Compiler options target ES2022 with `module: ESNext`, `moduleResolution: bundler`, JSX transform set to `react-jsx`, `isolatedModules: true`, `skipLibCheck: true`, and `noEmit: true` (Vite performs the actual emit). Includes a `@/*` path mapping aligned with the Vite alias.
- **`tailwind.config.cjs`** — Tailwind v4 config scanning `./index.html` and `./src/**/*.{js,ts,jsx,tsx}` for content; extends theme with custom gold color palette (`gold`, `gold-light`, `gold-dark`).
- **`index.html`** — Vite entry HTML that mounts the React app under `#root` and loads `/src/main.tsx` as a module script.

## Architecture and Conventions

- **No emitted TypeScript output**: `tsconfig.json` has `noEmit: true`; Vite compiles TS/TSX on-the-fly via esbuild during both dev and build, so there is no separate `tsc` step producing `.js` files.
- **Module system**: Project is declared as ESM (`"type": "module"`) in `package.json`, and TypeScript uses `moduleDetection: force` plus `allowImportingTsExtensions: true`, allowing direct `.ts` imports without extensions.
- **Path aliases**: Both `vite.config.ts` and `tsconfig.json` define `@/*` → project root, enabling absolute imports like `@/components/Header` throughout the codebase.
- **Styling pipeline**: Tailwind CSS v4 is integrated as a Vite plugin (`@tailwindcss/vite`); styles are scoped via class names generated from the configured content globs rather than a traditional CSS build step.
- **Environment variables**: The dev server behavior is controlled by `DISABLE_HMR`; a `.env.example` file exists at the repo root for documenting expected env vars.

## Conventions and Constraints

- Development runs exclusively through `npm run dev` (or equivalent via bun/pnpm), which starts Vite with HMR enabled unless `DISABLE_HMR=true` is set.
- Production builds go through `npm run build`, which invokes `vite build` to produce optimized static assets in the default `dist/` directory.
- Type checking is decoupled from the build: `npm run lint` runs `tsc --noEmit` purely for diagnostics; it does not participate in artifact generation.
- There is no Dockerfile, CI pipeline, Makefile, or deployment script present in this repository root — build and distribution artifacts are produced locally via Vite and presumably deployed externally.
- Dependencies are locked via `bun.lock` and `package-lock.json`; the project is private (`"private": true`) and versioned at `0.0.0` with no release automation.