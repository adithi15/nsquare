---
kind: configuration_system
name: Vite + Environment Variable Configuration for a React SPA
category: configuration_system
scope:
    - '**'
source_files:
    - vite.config.ts
    - .env.example
    - tailwind.config.cjs
    - package.json
    - metadata.json
---

## What system/approach is used

This repository uses a minimal, Vite-native configuration approach for its React single-page application. There is no centralized runtime configuration loader (no `config/` directory, no YAML/TOML parsers, no feature-flag library). Instead, configuration is split across three layers:

1. **Build-time configuration** — `vite.config.ts`, `tailwind.config.cjs`, `tsconfig.json`, and `package.json` scripts define how the app is built and served.
2. **Environment variables** — loaded via Vite's built-in `.env*` support; an example template is provided in `.env.example`. The project also lists `dotenv` as a dependency but does not appear to be imported anywhere in the source shown.
3. **Static metadata** — `metadata.json` holds declarative app metadata (name, description, capabilities) consumed at build or runtime by the hosting platform rather than by application code.

## Key files and packages

- `vite.config.ts` — Central Vite configuration: registers `@vitejs/plugin-react` and `@tailwindcss/vite`, defines the `@` path alias resolving to the project root, and reads `DISABLE_HMR` from `process.env` to toggle Hot Module Replacement and file watching.
- `.env.example` — Documents the expected environment variables (`GEMINI_API_KEY`, `APP_URL`) with comments explaining their purpose; developers are instructed to copy into `.env.local`.
- `tailwind.config.cjs` — Tailwind v4 configuration extending the theme with brand gold color tokens (`gold`, `gold-light`, `gold-dark`).
- `package.json` — Declares scripts (`dev`, `build`, `preview`, `clean`, `lint`) and dependencies including `dotenv`, `express`, `react-router-dom`, `motion`, `lucide-react`, and the Vite toolchain. The `type: module` field enables ESM throughout.
- `metadata.json` — Platform-level metadata declaring the app name, description, and major capabilities (e.g., `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API`).

## Architecture and conventions

- **Environment variable loading**: Vite automatically loads `.env`, `.env.local`, `.env.production`, etc. at startup. In this repo, environment variables are only consumed inside `vite.config.ts` (`process.env.DISABLE_HMR`) to control the dev server behavior. No application code was found reading `import.meta.env.*` or `process.env.*` directly in `src/`, meaning runtime config values like `GEMINI_API_KEY` and `APP_URL` are likely passed through the build pipeline or consumed by a separate server process (the presence of `express` and `dotenv` suggests a Node.js backend may exist outside the scope of the scanned files).
- **Path aliases**: A single `@` alias points to the project root, enabling absolute imports like `@/components/...` instead of relative paths. This is configured once in `vite.config.ts` under `resolve.alias`.
- **Theme configuration**: Brand colors are defined as Tailwind theme extensions in `tailwind.config.cjs` and consumed via utility classes (e.g., `text-gold`). There is no runtime theme switching logic visible in the scanned files.
- **Metadata-driven configuration**: `metadata.json` is a plain JSON file describing the app's identity and capabilities. It appears intended for external consumption (e.g., a deployment platform) rather than being parsed by the React app itself.
- **No runtime feature flags**: There is no feature-flag service, JSON config file read at runtime, or environment-based toggles inside the React components/pages. All behavioral variation is compile-time (via Vite plugins and Tailwind class generation).

## Conventions and constraints

- Environment variable names follow the `UPPER_SNAKE_CASE` convention (`GEMIMI_API_KEY`, `APP_URL`, `DISABLE_HMR`), documented in `.env.example` comments.
- Sensitive keys (API keys) are explicitly called out in `.env.example` as requiring local `.env.local` setup — they must never be committed to version control (`.gitignore` is present at the repo root).
- The dev server HMR flag is controlled exclusively through the `DISABLE_HMR` environment variable; setting it to `'true'` disables both HMR and file watching to reduce CPU usage during development.
- Build-time-only configuration lives in `*.config.*` files at the project root; there is no runtime configuration loader pattern in the application source.
- Path aliases are centralized in `vite.config.ts`; consumers import using the `@/` prefix consistently.