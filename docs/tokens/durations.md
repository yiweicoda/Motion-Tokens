# Duration tokens

How long a motion takes. The rule of thumb: most UI motion lives between
**150–400ms**. Too slow feels laggy; too fast feels jumpy. Larger distances and
bigger surface changes take longer; objects leaving take less time than objects
arriving.

<DurationScale />

<TokenTable group="durations" prefix="--motion-duration-" />

## Guidance

- **fast (150ms)** — anything the user triggers constantly (hover, ripple, small toggle) must feel instant.
- **base (250ms)** — the default working range for standard transitions and entrances.
- **slow (350ms)** — scale up for large or complex surface moves (modals, full-screen).
- **slower (500ms)** — reserve for scroll reveals and deliberate hero moments. Anything beyond this usually feels sluggish.
- **exit (200ms)** — elements leaving need less attention than elements arriving, so they're quicker.

## Usage

```html
<div class="transition duration-base ease-decelerate">…</div>
```
```css
.el { transition: transform var(--motion-duration-base) var(--motion-ease-decelerate); }
```
