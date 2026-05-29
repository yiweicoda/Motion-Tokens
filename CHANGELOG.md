# Changelog

All notable changes to motion-tokens are documented here.

---

## [1.0.1] — 2026-05-29

### Changed — Shimmer effect refined for primary CTAs

**`.fx-shimmer` is now perpetual and optimized for high-visibility call-to-action buttons:**

- **Perpetual loop instead of hover**: The gloss sweep runs continuously (`shimmer-loop` keyframe: 45% visible sweep + 55% off-screen pause, 3s cycle) to keep drawing the eye. No hover required.
- **Always behind the label**: `z-index: -1` + the host's `isolation: isolate` ensures the highlight paints under the text, so it never reduces label legibility even at full opacity.
- **Slower tempo**: `--motion-shimmer-sweep` increased from 900ms to 3s for a more deliberate, premium feel.
- **Opt-in backward compatibility**: A `.fx-shimmer--hover` modifier restores the original one-shot-on-hover behavior for quieter accents.

Use `.fx-shimmer` on **exactly one** button per view — the perpetual motion is attention-drawing by design.

---

## [0.2.0] — 2026-05-29

### Added — Button interaction effects

Three opt-in, framework-agnostic button accents delivered as token-driven CSS
utility classes (`src/effects.css`, imported from `src/index.css`):

- **`.fx-shimmer`** — a diagonal gloss highlight that loops **perpetually behind
  the button label** (`z-index: -1`, so it never reduces text legibility) to draw
  the eye to a primary CTA. Tempo: new `--motion-shimmer-sweep` token (3s loop =
  sweep + pause). Themable via `--fx-shimmer-color`. A `.fx-shimmer--hover`
  modifier restores the original one-shot-on-hover behaviour for non-CTA buttons.
- **`.fx-ripple`** — a Material-style ripple that radiates from the **click
  point**. Pairs with a tiny JS helper in `src/ripple.js` (exported at
  `motion-tokens/ripple`): `createRipple(event)` for any framework, plus a Vue
  `vRipple` directive. Tempo: new `--motion-ripple` token (350ms). Themable via
  `--fx-ripple-color`.
- **`.fx-glow-border`** — a system-level running conic border: a gold "comet"
  rotates clockwise around the edge. Tempo: new `--motion-border-spin` token
  (3.2s, linear). Built with a registered `@property --angle` rotating
  `conic-gradient` masked to a ring, so it scales to any button size. Themable
  via `--fx-border-width`, `--fx-border-radius`, `--fx-border-track`,
  `--fx-border-glow`, `--fx-border-hot`.

Reproduces the gold-comet border from the reference CodePen (which was actually
an SVG animated linear-gradient stroke) using the size-agnostic conic technique,
carrying over its exact colours (`#fff8e0` → `#ffc700` → transparent over
`#4e3c00`) and 3.2s linear timing.

### Also
- New `effects` export in `src/tokens.js` and `border-spin` / `gloss-sweep`
  entries in `keyframes`.
- New docs page **Button effects** (`docs/tokens/button-effects.md`) with a live
  `ButtonEffects.vue` demo.
- `prefers-reduced-motion`: the gloss sweep and border loop stop; the ripple
  collapses to instant. Effects are accents, never the only affordance.

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
