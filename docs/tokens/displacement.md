# Displacement tokens

The travel distance for slide-in / slide-out motion. Sharing one set of offsets
keeps reveals consistent across the product — a toast, a dropdown, and a list item
should all enter by the same amount.

<TokenTable group="distance" prefix="--motion-distance-" />

## Guidance

- **sm (4px)** — a subtle nudge (e.g. hover lift pairs well with `4–2px`).
- **md (8px)** — small slide-in offset for compact UI.
- **lg (16px)** — the standard slide-in offset; the keyframe presets use this.
- **xl (24px)** — a more pronounced entrance for larger surfaces.

Keep entrance distances small — large travel reads as slow and can cause motion
discomfort.

## Usage

```css
.toast-enter-from { transform: translateY(var(--motion-distance-lg)); opacity: 0; }
```

The `slide-up` / `slide-down` / `slide-left` / `slide-right` keyframes
([see keyframes](./keyframes)) already build on `--motion-distance-lg`.
