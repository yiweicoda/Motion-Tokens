# Adoption tracking

A single place to see which motion tokens exist, where they're used, and how far
rollout has progressed. Update this table in the same PR that ships or adopts a
token so it never goes stale.

**Status key:** ✅ shipped · 🚧 in progress · ⬜ planned

## Tokens

| Token | Category | Status | Used in (components) | Owner | Notes |
|---|---|---|---|---|---|
| `duration-fast` | Duration | ✅ | Button, Toggle, Tabs | — | |
| `duration-base` | Duration | ✅ | Toast, List reveal, Progress | — | |
| `duration-slow` | Duration | ✅ | Modal, Drawer, Accordion | — | |
| `duration-slower` | Duration | ⬜ | — | — | Reserved for scroll reveals |
| `duration-exit` | Duration | ✅ | Modal exit, Toast exit | — | |
| `ease-standard` | Easing | ✅ | Tabs, Accordion, Button | — | |
| `ease-decelerate` | Easing | ✅ | Toast, Modal enter, List | — | |
| `ease-accelerate` | Easing | ✅ | Modal exit | — | |
| `ease-sharp` | Easing | ✅ | Drawer | — | |
| `ease-emphasized` | Easing | ⬜ | — | — | |
| `ease-spring` | Easing | 🚧 | Like button | — | Use sparingly |
| `stagger-*` | Delay | ✅ | List / section reveals | — | |
| `distance-*` | Displacement | ✅ | Toast, slide keyframes | — | |
| `motion-modal-*` | Semantic | ✅ | Modal | — | |
| `motion-drawer` | Semantic | ✅ | Drawer | — | |
| `motion-toast-enter` | Semantic | ✅ | Toast | — | |
| `motion-tab-indicator` | Semantic | ✅ | Tabs | — | |
| `motion-accordion` | Semantic | ✅ | Accordion | — | |
| `motion-page` | Semantic | ⬜ | — | — | Router transition pending |
| keyframe presets | Keyframes | 🚧 | Loaders, reveals | — | `ripple` not yet adopted |
| `motion-shimmer-sweep` | Effect | ✅ | `.fx-shimmer` CTA buttons | — | Perpetual loop (3s) behind label; `--hover` for one-shot |
| `motion-ripple` | Effect | ✅ | `.fx-ripple` buttons | — | Needs `v-ripple` / `createRipple` |
| `motion-border-spin` | Effect | ✅ | `.fx-glow-border` buttons | — | System-level running conic border (3.2s) |

## How to track adoption in your app

1. When a component starts using a token, add it to the **Used in** column.
2. Flip the **Status** as the token moves planned → in progress → shipped.
3. Note any deliberate exceptions (e.g. a one-off hero animation) so reviewers
   know it's intentional, not drift.

## Changelog

Record every token change here so consumers can upgrade confidently.

| Date | Version | Change |
|---|---|---|
| 2026-05-29 | 0.1.0 | Initial token set: durations, easing, stagger, displacement, semantic, keyframes. |
| 2026-05-29 | 0.2.0 | Button interaction effects: `.fx-shimmer`, `.fx-ripple` (+ `v-ripple`), `.fx-glow-border`; tokens `--motion-shimmer-sweep`, `--motion-ripple`, `--motion-border-spin`. |
| 2026-05-29 | 1.0.1 | `.fx-shimmer` refined: now perpetual (loop instead of hover), slower (3s), always behind label (`z-index: -1`); added `.fx-shimmer--hover` modifier for one-shot behavior. |
