---
kind: external_dependency
name: Vite build tool and dev server
slug: vite
category: external_dependency
category_hints:
    - framework_behavior
scope:
    - '**'
---

- The React plugin (`@vitejs/plugin-react`) and Tailwind integration (`@tailwindcss/vite`) are configured as Vite plugins, so the framework behavior is plugin-driven rather than CLI-flag driven.
- Verify exact plugin configuration against the official Vite docs when adding new plugins.