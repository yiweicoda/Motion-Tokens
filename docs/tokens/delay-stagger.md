# Delay & stagger tokens

Stagger is the incremental delay between sequenced items entering. It lets users
process content in order and creates an organic, premium feel
(follow-through / overlapping action). Multiply the token by each item's index.

<StaggerDemo />

<TokenTable group="stagger" prefix="--motion-stagger-" />

## Guidance

- **xs (30ms)** — tight, for dense rows where a longer cascade would drag.
- **sm (50ms)** — the standard for lists and cards.
- **md (80ms)** — relaxed, for a small number of large sections.

Cap the total stagger time and only animate items near the viewport — a long list
should never take seconds to finish.

## Usage

```vue
<li
  v-for="(item, i) in items"
  :style="{ transitionDelay: `calc(${i} * var(--motion-stagger-sm))` }"
>
```
```html
<!-- Tailwind delay utilities are also available -->
<div class="delay-stagger-sm">…</div>
```
