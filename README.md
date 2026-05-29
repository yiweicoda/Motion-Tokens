# Motion Tokens

Motion design tokens for a **Vue 3 + Tailwind** design system — a single source of
truth for durations, easing, delays, displacement, and named interaction
transitions, plus a VitePress documentation site with live interactive demos.

**Core principle:** Motion is a functional layer, not decoration. Every token maps
to a real job — feedback, continuity, orientation, status, attention, or a
deliberate delight moment. Nothing is animated by default.

---

## What's inside

```
src/
  tokens/motion.css        # SOURCE OF TRUTH — CSS custom properties
  tokens/keyframes.css     # named @keyframes presets
  tokens/reduced-motion.css# prefers-reduced-motion fallback
  index.css                # single entry point
  tokens.js                # JS mirror (for JS-driven motion + docs tables)
tailwind.config.js         # maps tokens → Tailwind utilities
docs/                      # VitePress site with live demos + tracking
```

## Token categories

| Category | Tokens | Purpose |
|---|---|---|
| Duration | `fast` `base` `slow` `slower` `exit` | how long motion takes (150–400ms range) |
| Easing | `standard` `decelerate` `accelerate` `sharp` `emphasized` `spring` `linear` | acceleration curves (ease-out in, ease-in out) |
| Delay / stagger | `xs` `sm` `md` | incremental delay between sequenced items |
| Displacement | `sm` `md` `lg` `xl` | slide-in / slide-out travel distance |
| Semantic | `hover` `press` `modal-enter` `drawer` `toast-enter` … | ready-to-apply transition shorthands per interaction |
| Keyframes | `slide-up` `scale-in` `spin` `shimmer` `ripple` … | reusable named animations, @keyframes presets |

---

## Quick start

### 1. Install

```bash
npm install
npm run docs:dev    # open docs locally: http://localhost:5174
```

### 2. Load tokens in your app

```js
// main.js — once at app startup
import 'motion-tokens/css'
```

This imports the CSS custom properties, `@keyframes` presets, and the
`prefers-reduced-motion` fallback.

### 3. Use tokens in Vue + Tailwind

**Tailwind utilities** (recommended for most motion):

```html
<!-- Durations & easing as utilities -->
<button class="transition duration-fast ease-standard">Save</button>

<!-- Keyframe animations -->
<div class="animate-slide-up">Hello</div>
<div class="animate-spin-token">⏳</div>

<!-- Semantic shorthands -->
<div class="transition duration-slow ease-decelerate">Modal content</div>
```

**CSS variables** (when working outside Tailwind):

```css
.button {
  transition: transform var(--motion-hover), box-shadow var(--motion-hover);
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
}

.modal-enter-active {
  transition: opacity var(--motion-modal-enter), transform var(--motion-modal-enter);
}
.modal-enter-from { opacity: 0; transform: scale(0.95); }
```

**Vue `<Transition>` / `<TransitionGroup>`:**

```vue
<Transition name="toast">
  <div v-if="saved" class="toast">✓ Saved</div>
</Transition>

<style scoped>
.toast-enter-active { transition: opacity var(--motion-toast-enter), transform var(--motion-toast-enter); }
.toast-leave-active { transition: opacity var(--motion-duration-exit) var(--motion-ease-accelerate); }
.toast-enter-from { opacity: 0; transform: translateY(var(--motion-distance-lg)); }
.toast-leave-to { opacity: 0; }
</style>
```

**Staggered list reveals:**

```vue
<li
  v-for="(item, i) in items"
  :key="item"
  :style="{ animationDelay: `calc(${i} * 50ms)` }"
  class="animate-slide-up"
>
  {{ item }}
</li>
```

---

## Documentation & live demos

Run `npm run docs:dev` to start the local VitePress site at `http://localhost:5174`.

The docs include:

- **Getting started** — how to install and use tokens in Vue
- **Usage guide** — CSS vs `<Transition>`, when to reach for JS engines
- **Token reference** — 6 pages with **live, interactive demos** for:
  - Durations (side-by-side comparison, replay controls)
  - Easing curves (cubic-bezier visualization, easing comparison)
  - Delay & stagger (adjustable stagger intervals, cascading reveal)
  - Displacement (standard slide distances)
  - Semantic tokens (modal, drawer, toast, tabs, accordion, loaders)
  - Keyframes (all named animation presets)
- **Accessibility** — `prefers-reduced-motion` rules and non-negotiables
- **Tracking** — adoption status table & changelog for team visibility

**Deploy the docs:**

```bash
npm run docs:build
# outputs static site to docs/.vitepress/dist
# → deploy to GitHub Pages, Netlify, or internal host
```

---

## CSS-first vs JS engines

**Use CSS** (default):
- Hover, press, focus feedback
- Modal / drawer / dropdown open/close
- Expand / collapse (accordion)
- Tab indicator slides
- Staggered list reveals (with `animation-delay`)
- Loading spinners & progress bars

**Use `@vueuse/motion` or Web Animations API** (when CSS isn't enough):
- Spring physics (playful bounces, overshoots)
- Gesture tracking (drag, swipe, pull-to-refresh)
- List reordering (animate-out + animate-in rearrangement)
- Shared-element transitions (thumbnail → hero image)

Most UI motion is CSS-first — it's GPU-accelerated, requires no JS event loop,
and respects `prefers-reduced-motion` automatically.

---

## Extending the tokens

1. **Add the CSS variable** to `src/tokens/motion.css` with a comment describing
   its *job* (e.g. "hover feedback" or "modal entrance").
2. **Mirror it in `src/tokens.js`** so the docs table auto-generates correctly.
3. **Map to Tailwind** in `tailwind.config.js` if it needs a utility.
4. **Update the tracking table** in `docs/tracking.md` and add an entry to the
   changelog.

Keep the set small — consistency is the value. Resist adding a new duration when
an existing one is close enough. Three durations, five easing curves, and a small
set of named semantic tokens is the sweet spot for most products.

---

## Accessibility (non-negotiable)

- `prefers-reduced-motion: reduce` is honored globally — all durations collapse to instant.
- Motion is **never the only signal** of a state change — always pair it with
  a colour, text, or icon change.
- No flashing faster than 3 Hz (seizure risk).
- No essential content hidden behind hover (touch devices have no hover).

See the [Accessibility guide](docs/guide/accessibility.md) in the docs for details.

---

## Architecture

Tokens live as CSS custom properties in `src/tokens/motion.css` — the single
source of truth. Every system (Tailwind utilities, VitePress docs, JS for
`@vueuse/motion`) reads from this one place, so there's no drift.

**Tailwind wiring** (`tailwind.config.js`): Maps `--motion-*` variables to
utilities like `duration-base`, `ease-decelerate`, and `animate-slide-up`.
Authors write `class="duration-base"` and stay on-token automatically.

**JS mirror** (`src/tokens.js`): A JS object mirroring the CSS variables,
used by:
- The VitePress docs (tables render from this data)
- `@vueuse/motion` for JS-driven motion
- Keeping docs synchronized with tokens (no hardcoded duplicates)

**Reduced-motion fallback** (`src/tokens/reduced-motion.css`): A global
`@media (prefers-reduced-motion: reduce)` that collapses durations and
iteration counts, built in by default.

---

## License

MIT
