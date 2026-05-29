# Semantic tokens

Composite tokens pair the *correct* duration and easing for a specific
interaction, so engineers never re-derive them. Each value is a ready-to-apply
`transition` shorthand — drop it straight onto the `transition` property.

<TokenTable group="semantic" prefix="--motion-" />

## Live patterns

### Modal / dialog

Open and close should feel symmetric — enter decelerates in, exit accelerates away.

<ModalDemo />

### Drawer

Slides from the edge it lives on, using the `sharp` curve because it parks
off-screen and may return.

<DrawerDemo />

### Toast

Enters ease-out from below; auto-dismisses without blocking the user.

<ToastDemo />

### Tabs

The indicator slides to the active tab while content stays put.

<TabsDemo />

### Accordion

Expands by animating `grid-template-rows` (not raw `height`), so it's smooth and cheap.

<AccordionDemo />

### Loaders

Status motion — spinner (linear loop), determinate progress (eased updates), and skeleton shimmer.

<LoadersDemo />

## Usage

```css
.modal-enter-active { transition: opacity var(--motion-modal-enter), transform var(--motion-modal-enter); }
.modal-leave-active { transition: opacity var(--motion-modal-exit),  transform var(--motion-modal-exit); }
```
