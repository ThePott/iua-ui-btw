# iua-ui-btw — AGENTS.md

## Commands (pnpm)

- `pnpm dev` — Vite dev server
- `pnpm build` — `tsc -b && vite build` (typecheck then build)
- `pnpm lint` — ESLint (flat config)
- `pnpm format` — Prettier with `prettier-plugin-organize-imports` + `prettier-plugin-tailwindcss`
- `pnpm preview` — Vite preview
- No test framework is configured

## Git hooks (Husky)

- **pre-commit**: `pnpm format && git add .`
- **pre-push**: `pnpm lint && pnpm build`

## TypeScript 6.x

- `erasableSyntaxOnly: true` → **no `enum`**, `namespace`, or constructor parameter properties. Use const objects / unions.
- Path alias: `@/*` → `./src/*`

## Tailwind CSS v4 (CSS-first)

- **No `tailwind.config.js`** — theme defined via `@theme` in `src/package/shared/styles/iua-ui-btw.css`
- Custom design tokens: `bg-iua-bg-0`, `p-iua-md`, `gap-iua-sm`, `rounded-iua-sm`, `shadow-iua-sm`, `text-iua-fg-vivid`, etc.
- `iua-transition` utility via `@utility`
- Component variants use `tailwind-variants/lite` + `clsx`

## Theming

- 5 color schemes via `data-schema` on `<html>`: `ghostty`, `ic-orange-ppl`, `rose-pine`, `tokyo-night`, `gruvbox`
- All colors in **OKLCH**; dark mode via `light-dark()` CSS function

## ESLint

- `no-console: error`, `no-debugger: error`
- `react-hooks/exhaustive-deps: off`
- `@typescript-eslint/no-unused-vars: error` (ignores `_` prefix)

## Known broken / incomplete state

- `@tanstack/react-router` used in routes/ and layout but **not in dependencies** and **not wired in App.tsx** — routing is scaffolding only
- `@/package/components/inputs/` — does not exist (imported by RootLayout + button page)
- `@/package/components/texts/` — does not exist (imported by button page)
- `@/package/shared/utils/styles` — does not exist; real path is `@/package/shared/styles/styles.ts`

## Architecture

- `src/package/` — reusable UI component library (layouts done, inputs/texts pending)
- `src/routes/` — TanStack Router file-based routes (scaffolded, not live)
- `src/pages/` — page components
- `src/shared/` — app-level shared components
- `motion` library (not framer-motion) for animations
