# Using tokens in Vue

CSS handles the large majority of UI motion and is GPU-friendly. Reach for a JS
engine only for springs, gestures, list reordering, and shared-element
transitions.

## Hover & press — pure CSS

<ButtonStates />

```vue
<template>
  <button class="btn">Save</button>
</template>

<style scoped>
.btn { transition: transform var(--motion-hover), box-shadow var(--motion-hover); }
.btn:hover { transform: translateY(-2px); }
.btn:active { transform: scale(0.96); transition: transform var(--motion-press); }
</style>
```

## Enter / leave — `<Transition>`

Vue's `<Transition>` maps cleanly onto the tokens. Use **decelerate** for the
enter and **accelerate** (or **sharp**) for the leave.

```vue
<Transition name="toast">
  <div v-if="visible" class="toast">Saved</div>
</Transition>

<style scoped>
.toast-enter-active { transition: opacity var(--motion-toast-enter), transform var(--motion-toast-enter); }
.toast-leave-active { transition: opacity var(--motion-duration-exit) var(--motion-ease-accelerate); }
.toast-enter-from { opacity: 0; transform: translateY(var(--motion-distance-lg)); }
.toast-leave-to { opacity: 0; }
</style>
```

## Staggered lists — `<TransitionGroup>`

Multiply the stagger token by the item index:

```vue
<li
  v-for="(item, i) in items"
  :style="{ transitionDelay: `calc(${i} * var(--motion-stagger-sm))` }"
>
```

Cap total stagger time and only animate items near the viewport — a 200-row list
shouldn't animate for seconds.

## When to use JS (`@vueuse/motion`)

Use a motion engine for spring physics, gesture tracking, and orchestrated /
interruptible sequences. Read the token values from JS so they stay in sync:

```js
import { durations, easings } from 'motion-tokens'
// durations.base.value === '250ms', easings.decelerate.value === 'cubic-bezier(0, 0, 0.2, 1)'
```

During a drag, bind position to the pointer **without** easing; apply the spring
only on release to the snap target.

## Performance

Animate only `transform` and `opacity` on hot paths. For expand/collapse, animate
`grid-template-rows: 0fr → 1fr` (see the [accordion demo](/tokens/keyframes)) or a
`transform: scaleY()` rather than raw `height`.
