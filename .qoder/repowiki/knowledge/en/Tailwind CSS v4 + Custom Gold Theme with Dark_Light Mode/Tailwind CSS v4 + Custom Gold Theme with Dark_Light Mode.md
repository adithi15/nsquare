---
kind: frontend_style
name: Tailwind CSS v4 + Custom Gold Theme with Dark/Light Mode
category: frontend_style
scope:
    - '**'
source_files:
    - src/index.css
    - tailwind.config.cjs
    - package.json
    - src/components/Header.tsx
---

## What system/approach is used

The application uses **Tailwind CSS v4** (via `@tailwindcss/vite` plugin) as its primary styling framework, combined with a Vite-based React build. Styling is composed almost entirely of utility classes applied inline in JSX components, with a small set of custom CSS utilities and theme extensions defined in dedicated files.

## Key files and packages

- `src/index.css` — single global stylesheet that imports Tailwind (`@import "tailwindcss"`), defines the dark-mode variant, and declares all custom utility classes, theme defaults, and component-level styles (glass cards, navigation links, dividers, scrollbars, gold glow).
- `tailwind.config.cjs` — extends Tailwind's default theme with a brand color palette: `gold: '#C5A059'`, `gold-light: '#D4B575'`, `gold-dark: '#A27E3B'`.
- `package.json` — declares dependencies on `tailwindcss ^4.1.14`, `@tailwindcss/vite ^4.1.14`, `autoprefixer`, `motion` (framer-motion), and `lucide-react` for icons.
- Component files under `src/components/` (e.g., `Header.tsx`, `HeroSlider.tsx`, `Footer.tsx`) — where nearly all visual styling is expressed as Tailwind utility class strings.

## Architecture and conventions

### Design tokens
- **Brand colors**: The only custom color tokens live in `tailwind.config.cjs` under `theme.extend.colors` as `gold`, `gold-light`, `gold-dark`. Components reference these via `text-gold`, `bg-gold`, `border-gold`, etc.
- **Typography**: Two font families are declared as Tailwind utility classes in `src/index.css`: `.serif` (Cormorant Garamond, Georgia) and `.sans` (Outfit, system stack). The `body` element defaults to the Outfit sans-serif stack.
- **Theme modes**: A dual light/dark mode is implemented by toggling a `light-theme` or `dark-theme` class on the `<body>` element. Global CSS rules scoped under `.dark-theme` and `.light-theme` control background, text, glass-card appearance, and scrollbar colors. A shared transition rule applies a 300ms ease-in-out transition to `color`, `background-color`, `border-color`, and `box-shadow` across common elements.

### Utility layer
Custom reusable styles are grouped under `@layer utilities` in `src/index.css`: `.serif`, `.sans`, `.accent-gold`, `.bg-gold`, `.border-gold`, `.nav-link`, `.line-vertical`, `.gold-glow`, and the `.glass-card` variants per theme. These are consumed alongside raw Tailwind utilities throughout components.

### Component styling pattern
Components compose their appearance by concatenating Tailwind utility class strings directly in JSX `className` attributes. There are no CSS modules, styled-components, or SCSS files. Visual states (hover, active, scrolled) are driven by conditional class composition using template literals, e.g.:
```jsx
className={`... ${isScrolled ? 'bg-black/90 backdrop-blur-xl shadow-2xl py-3' : 'bg-transparent pt-4 pb-3'} ...`}
```
Responsive breakpoints use Tailwind's built-in prefixes (`md:`, `lg:`). Motion and transitions are handled by `framer-motion` (`motion.div`, `AnimatePresence`) rather than CSS animations.

### Iconography
Icons come from `lucide-react` (e.g., `Moon`, `Sun`, `Menu`, `X`, `Phone`, `ChevronDown`) and are styled purely through Tailwind utility classes passed to the icon components.

### Responsive strategy
Responsive design is breakpoint-driven via Tailwind's responsive prefixes (`md:`, `lg:`) applied inline in component classNames. No media queries are written manually; layout shifts (e.g., desktop nav vs. mobile hamburger menu) are controlled by conditional rendering and responsive class variants.

## Conventions and constraints

- **No CSS modules / preprocessors**: All styling is either Tailwind utility classes in JSX or plain CSS in `src/index.css`; there are no `.scss`, `.module.css`, or CSS-in-JS libraries beyond framer-motion motion props.
- **Single source of truth for colors**: Brand colors are centralized in `tailwind.config.cjs` as `gold*` tokens; ad-hoc hex values for gold (`#C5A059`) also appear in `src/index.css` for custom utilities, which duplicates the token but keeps them accessible as both Tailwind utilities and CSS classes.
- **Dark/light mode is class-based on `<body>`**: Components do not use Tailwind's `dark:` variant; instead they rely on the `.dark-theme` / `.light-theme` class toggled at the root level, with scoped rules in `src/index.css`.
- **Glass morphism is a shared pattern**: The `.glass-card` utility (with separate dark/light variants) is the standard card style used across sections.
- **Transitions are uniform**: A global 300ms ease-in-out transition is applied to core UI elements for theme switching; component-specific micro-interactions use framer-motion spring/ease presets.
- **Navigation links follow a fixed style**: The `.nav-link` utility enforces uppercase, wide letter-spacing (`0.18em`), small font size, and medium weight consistently across the header.