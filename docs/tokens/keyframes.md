# Keyframe presets

Named `@keyframes` built on the tokens, exposed as Tailwind `animate-*`
utilities. They animate only `transform` and `opacity` so everything composites
on the GPU.

<TokenTable group="keyframes" />

## Tailwind utilities

| Utility | Keyframe | Notes |
|---|---|---|
| `animate-fade-in` / `animate-fade-out` | fade | generic cross-fade |
| `animate-slide-up` / `-down` / `-left` / `-right` | slide | entrances; travel = `--motion-distance-lg` |
| `animate-scale-in` | scale-in | modal / popover grow from 0.95 |
| `animate-pop` | pop | like / reward overshoot (spring) |
| `animate-shake` | shake | inline validation error |
| `animate-spin-token` | spin | loader (1.2s linear loop) |
| `animate-pulse-token` | pulse | idle / skeleton pulse |
| `animate-shimmer` | shimmer | skeleton sweep |
| `animate-ripple` | ripple | press feedback |

## Usage

```html
<div class="animate-slide-up">Enters from below</div>
<div class="animate-spin-token">⏳</div>
```

Or drive a keyframe manually with token values:

```css
.toast { animation: slide-up var(--motion-duration-base) var(--motion-ease-decelerate) both; }
```

Loaders, shimmer, and the staggered reveals these power are shown live on the
[semantic tokens page](./semantic) and the [stagger page](./delay-stagger).
