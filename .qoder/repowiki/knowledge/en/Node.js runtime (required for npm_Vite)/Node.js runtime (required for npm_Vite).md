---
kind: external_dependency
name: Node.js runtime (required for npm/Vite)
slug: nodejs
category: external_dependency
category_hints:
    - client_constraint
scope:
    - '**'
---

- The project requires Node.js to be installed on the developer machine; `npm` is not bundled with the repo and must be added to the system PATH before any `npm install` / `npm run dev` commands will work.
- All scripts (`dev`, `build`, `preview`, `lint`) are executed via `vite`/`tsc` through Node's package manager; the README explicitly lists Node.js as a prerequisite.
- A `bun.lock` file exists alongside `package-lock.json`, but the documented workflow and scripts use `npm`; Bun is an alternative runtime that can also resolve this lockfile.