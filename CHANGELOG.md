# Changelog

All notable changes to motion-tokens are documented here.

---

## [1.0.0] — 2026-05-29

### Initial Release

A complete, production-ready motion design token system for Vue 3 + Tailwind.

#### ✨ What's included

**Token sets (6 categories):**
- **Durations** — 6 tokens: `instant`, `fast`, `base`, `slow`, `slower`, `exit` (150–500ms)
- **Easing curves** — 7 tokens: `standard`, `decelerate`, `accelerate`, `sharp`, `emphasized`, `spring`, `linear`
- **Delay / stagger** — 3 tokens: `xs`, `sm`, `md` (30–80ms for sequenced reveals)
- **Displacement** — 4 tokens: `sm`, `md`, `lg`, `xl` (4–24px slide distances)
- **Semantic tokens** — 11 named shorthands: `hover`, `press`, `modal-enter`, `modal-exit`, `drawer`, `toast-enter`, `toggle`, `dropdown`, `tab-indicator`, `accordion`, `page`
- **Keyframe presets** — 13 named animations: `fade-in/out`, `slide-up/down/left/right`, `scale-in`, `pop`, `shake`, `spin`, `pulse`, `shimmer`, `ripple`

**Implementation:**
- CSS custom properties as the single source of truth (`src/tokens/motion.css`)
- Tailwind v3 utilities mapping (`duration-base`, `ease-decelerate`, `animate-slide-up`)
- JS mirror for JS-driven motion and docs auto-generation (`src/tokens.js`)
- Global `prefers-reduced-motion` fallback (accessibility built-in)
- PostCSS + Autoprefixer for browser compatibility

**Documentation & demos:**
- VitePress docs site with 6 token reference pages
- 12 interactive demo components (modals, drawers, toasts, stagger, loaders, easing curves, etc.)
- Live playable examples — adjust controls, trigger animations, observe the tokens in action
- Adoption tracking table & changelog in docs

**Vue 3 integration:**
- CSS transitions (recommended for ~90% of UI motion)
- `<Transition>` / `<TransitionGroup>` support
- Compatible with `@vueuse/motion` for springs, gestures, list reorder
- Staggered reveals using `animation-delay`
- No runtime dependencies beyond Vue

#### 🎯 Core principles

1. **Motion is functional** — every token has a real job (feedback, continuity, orientation, status, attention). Nothing is decorative by default.
2. **One source of truth** — tokens live in CSS custom properties; all other systems (Tailwind, docs, JS) read from that one place.
3. **Accessibility first** — `prefers-reduced-motion` is honored globally. Motion is never the only signal of a state change.
4. **Performance** — only `transform` and `opacity` animate on hot paths; animations hold 60fps on mid-range devices.

#### 📚 Guidance encoded in tokens

Timing rules from Nielsen, Google, and Framer motion research:
- Micro-feedback (hover, press): 100–150ms
- Standard transitions (entrances, modals): 200–350ms
- Easing: ease-out on entrance, ease-in on exit, standard for on-screen moves
- Stagger: 30–80ms between items; cap total time
- Displacement: keep slide distances small (4–24px) to avoid motion sickness

#### 🚀 Deployment

- Static VitePress docs site: `npm run docs:build` → deploy to GitHub Pages or internal host
- Token library: npm package with CSS entry point and JS mirror
- Team sharing: docs site + adoption tracking table

#### 📋 For next releases

Future versions may add:
- Spring physics tokens (bounce, overshoot percentages)
- Tailwind v4 CSS-first `@theme` support
- Figma variables sync
- Component transition templates
- Performance profiling guides

---

## Notes

- The docs are *live* — every demo reads the real token values, so the site never drifts from the tokens.
- The stagger demo uses `animation-delay` (not `transition-delay`) to avoid CSS cascade conflicts and ensure cascading effects actually cascade.
- All timing values are based on real-world research and tested on mid-range devices; faster hardware will feel snappier, not broken.
- Motion is system-level — a single shared token set across the whole product is worth more than perfect timing on individual animations.
