# Easing tokens

Easing shapes *how* a motion accelerates. Almost never use `linear` except for
continuous loops — it feels robotic. The counter-intuitive but important rule:
**ease-out on entrance, ease-in on exit.** Entering elements decelerate to rest
so the eye can follow them; exiting elements accelerate away so departure feels
final.

<EasingCurve />

<TokenTable group="easings" prefix="--motion-ease-" />

## Choosing a curve

- **standard** — the everyday default for elements moving *within* the screen.
- **decelerate** — elements **entering**: arrive fast, settle gently.
- **accelerate** — elements **leaving permanently**: speed up and fly off.
- **sharp** — elements that exit but may return (a side panel parked just off-screen).
- **emphasized** — expressive, attention-drawing large transitions.
- **spring** — a gentle overshoot for playful moments (likes, success). Use sparingly; avoid for utilitarian UI and elements that must stop precisely.
- **linear** — continuous motion only: spinners, progress fills, looping ambients.

## Usage

```html
<div class="transition ease-decelerate">…</div>
```
```css
.modal { transition: transform var(--motion-duration-slow) var(--motion-ease-decelerate); }
```
