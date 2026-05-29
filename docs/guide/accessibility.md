# Accessibility

Motion accessibility is non-negotiable. These rules ship enforced in the tokens.

## Respect `prefers-reduced-motion`

Some users get nauseated or disoriented by motion (vestibular disorders).
`motion-tokens/css` includes a global fallback that collapses animation and
transition durations to near-instant when the OS requests reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Toggle the simulation below to see the reduced path:

<ReducedMotionToggle />

For meaningful motion you can provide a deliberate reduced variant (a quick
cross-fade) rather than killing it entirely — in JS, branch on
`useReducedMotion()` from `@vueuse/motion`.

## Motion is never the only signal

A state change must also be conveyed by colour, text, or an icon — so it survives
reduced-motion and works for everyone. Notice the demo above keeps its checkmark
and border colour even when motion is off.

## Other requirements

- **No flashing** faster than 3 times per second (seizure risk).
- **No essential info behind hover** — touch and many assistive setups have no hover.
- **Don't trap the user** waiting on an animation; keep controls responsive and
  animations interruptible.
- Keep parallax and large continuous background motion gentle and reduced-motion-gated.
