# Getting started

Motion tokens give your interface one consistent "physics." Instead of scattering
magic numbers (`250ms`, `cubic-bezier(...)`) across components, you reference a
small, shared set of named tokens. Every hover, modal, and reveal then feels like
part of the same product.

## The one rule

> Motion exists to serve understanding and the task — never to show off.
>
> **If removing an animation makes the interface harder to understand, it earns its place. If removing it changes nothing but "feel," make it subtle or cut it.**

Each token below is tied to a *job*: feedback, continuity, orientation, status,
attention, or a deliberate delight moment.

## Install

```bash
npm install motion-tokens
```

Import the tokens once at your app's entry (loads the CSS custom properties,
keyframes, and the `prefers-reduced-motion` fallback):

```js
// main.js
import 'motion-tokens/css'
```

## Wire up Tailwind

The tokens ship a `tailwind.config.js` that maps them to utilities. Either extend
your config from it, or copy its `theme.extend` block. You then get:

```html
<!-- duration + easing utilities -->
<button class="transition duration-fast ease-standard">Save</button>

<!-- keyframe presets -->
<div class="animate-slide-up">Hello</div>
<div class="animate-spin-token">⏳</div>
```

## Or use the raw CSS variables

Anywhere outside Tailwind, reference the variables directly:

```css
.card {
  transition: transform var(--motion-duration-base) var(--motion-ease-decelerate);
}
```

## Next

- [Using tokens in Vue](./usage-vue) — `<Transition>`, `<TransitionGroup>`, and when to reach for JS.
- [Accessibility](./accessibility) — the non-negotiables.
- [Browse the tokens](/tokens/durations) — each with a live demo.
