# Button interaction effects

Three opt-in accents for buttons (or any element), delivered as **CSS utility
classes driven by tokens**. Add a class to opt in — nothing is applied by
default. Each does a real job: the shimmer and border draw attention to a
high-emphasis action; the ripple confirms exactly where the user pressed.

<ButtonEffects />

## The effects

| Class | Token (tempo) | Job |
|---|---|---|
| `.fx-shimmer` | `--motion-shimmer-sweep` (3s) | Diagonal gloss highlight loops **perpetually behind the label** to flag a primary CTA (`.fx-shimmer--hover` for one-shot on hover) |
| `.fx-ripple` | `--motion-ripple` (350ms) | Ripple radiates from the **click point** (needs the JS helper below) |
| `.fx-glow-border` | `--motion-border-spin` (3.2s) | A gold "comet" runs clockwise around the border (rotating conic gradient) |

## 1. Gloss shimmer (perpetual CTA)

```html
<button class="btn fx-shimmer">Get started</button>
```

Loops continuously — a gloss highlight sweeps across, pauses, and repeats
(`--motion-shimmer-sweep`, 3s) — to keep drawing the eye to the page's **primary
call to action**. The band paints **behind the label** (`z-index: -1` + the
host's `isolation: isolate`), so it never reduces the text's legibility. Override
the highlight colour with `--fx-shimmer-color`.

Because it's always moving, use it on **exactly one** button per view — a
perpetual shimmer on several elements competes for attention and stops meaning
anything. For a quieter, non-CTA accent that only fires on interaction, use the
one-shot modifier:

```html
<button class="btn fx-shimmer fx-shimmer--hover">Secondary</button>
```

## 2. Click-point ripple

The ripple needs the click coordinates, so it pairs the `.fx-ripple` class with a
tiny JS helper. Two ways to wire it:

**Vue directive:**

```js
// main.js
import { vRipple } from 'motion-tokens/ripple'
app.directive('ripple', vRipple)
```
```html
<button class="fx-ripple" v-ripple>Click</button>
```

**Vanilla / any framework:**

```js
import { createRipple } from 'motion-tokens/ripple'
button.addEventListener('pointerdown', createRipple)
```

The helper spawns a `.fx-ripple__wave` sized to cover the button from the press
point, then removes it on `animationend`. Override its colour with
`--fx-ripple-color`.

## 3. Running conic border

```html
<button class="fx-glow-border">Upgrade</button>
```

A **system-level** effect: the rotation period is the `--motion-border-spin`
token, so every glowing border in the product runs at one tempo. It reproduces
the gold-comet look from the reference pen, but with a size-agnostic rotating
`conic-gradient` masked to a ring, so it fits a button of any dimensions.

Themable via custom properties:

| Property | Default | Controls |
|---|---|---|
| `--fx-border-width` | `2px` | ring thickness |
| `--fx-border-radius` | `8px` | corner radius |
| `--fx-border-track` | `#4e3c00` | static base border colour |
| `--fx-border-glow` | `#ffc700` | comet gold |
| `--fx-border-hot` | `#fff8e0` | comet hot-spot (cream) |

```css
/* e.g. a blue comet, thicker ring */
.my-cta {
  --fx-border-width: 3px;
  --fx-border-track: #0b2447;
  --fx-border-glow: #19a7ce;
  --fx-border-hot: #e7f6ff;
}
```

## How it's built

The angle is animated through a **registered custom property**
(`@property --angle`), which lets the browser interpolate the
`conic-gradient(from var(--angle), …)` smoothly on the compositor — no
layout/paint per frame. See `src/tokens/keyframes.css` and `src/effects.css`.

## Accessibility

Under `prefers-reduced-motion: reduce`, the gloss sweep and the border loop stop
and the ripple collapses to instant. Because these are **accents, never the only
affordance** — the button's label, colour, and press feedback all still work —
turning the motion off costs nothing functional.
