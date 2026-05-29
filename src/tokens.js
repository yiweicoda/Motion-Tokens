/**
 * JS mirror of the motion tokens.
 * ------------------------------
 * Kept in sync with src/tokens/motion.css. Use this for JS-driven motion
 * (@vueuse/motion, Web Animations API) and to render the documentation tables
 * from a single list so docs never drift from the tokens.
 *
 * Each entry includes the `job` it does so the value is never separated from
 * its intent.
 */

export const durations = {
  instant: { value: '0ms', job: 'Disabled / reduced-motion' },
  fast: { value: '150ms', job: 'Micro-feedback: hover, ripple, small toggle' },
  base: { value: '250ms', job: 'Default standard transition / entrance' },
  slow: { value: '350ms', job: 'Large or complex surface moves (modal, full-screen)' },
  slower: { value: '500ms', job: 'Scroll reveals / deliberate hero moments (cap)' },
  exit: { value: '200ms', job: 'Elements leaving the screen (shorter)' },
}

export const easings = {
  standard: { value: 'cubic-bezier(0.4, 0, 0.2, 1)', job: 'On-screen moves (default)' },
  decelerate: { value: 'cubic-bezier(0, 0, 0.2, 1)', job: 'Entrances — ease-out' },
  accelerate: { value: 'cubic-bezier(0.4, 0, 1, 1)', job: 'Permanent exits — ease-in' },
  sharp: { value: 'cubic-bezier(0.4, 0, 0.6, 1)', job: 'Exit that may return (parked panel)' },
  emphasized: { value: 'cubic-bezier(0.2, 0, 0, 1)', job: 'Expressive large transitions' },
  spring: { value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', job: 'Playful overshoot — use sparingly' },
  linear: { value: 'linear', job: 'Continuous loops only (spinner, progress)' },
}

export const stagger = {
  xs: { value: '30ms', job: 'Tight stagger between sequenced items' },
  sm: { value: '50ms', job: 'Standard list / card stagger' },
  md: { value: '80ms', job: 'Relaxed section stagger' },
}

export const distance = {
  sm: { value: '4px', job: 'Subtle nudge' },
  md: { value: '8px', job: 'Small slide-in offset' },
  lg: { value: '16px', job: 'Standard slide-in offset' },
  xl: { value: '24px', job: 'Pronounced slide-in offset' },
}

export const semantic = {
  hover: { value: '150ms standard', job: 'Hover affordance' },
  press: { value: '100ms standard', job: 'Press / tap feedback' },
  toggle: { value: '200ms standard', job: 'Toggle, switch, checkbox' },
  dropdown: { value: '200ms decelerate', job: 'Dropdown / popover open' },
  'modal-enter': { value: '350ms decelerate', job: 'Modal / dialog opening' },
  'modal-exit': { value: '200ms accelerate', job: 'Modal / dialog closing' },
  drawer: { value: '350ms sharp', job: 'Side drawer slide (may return)' },
  'toast-enter': { value: '250ms decelerate', job: 'Toast / snackbar entrance' },
  'tab-indicator': { value: '250ms standard', job: 'Sliding tab indicator' },
  accordion: { value: '350ms standard', job: 'Accordion expand / collapse' },
  page: { value: '350ms standard', job: 'Page / route transition' },
}

export const keyframes = {
  'fade-in': 'Generic entrance / cross-fade in',
  'fade-out': 'Generic exit / cross-fade out',
  'slide-up': 'Entrance from below (lists, toasts, sections)',
  'slide-down': 'Entrance from above (dropdowns, banners)',
  'slide-left': 'Entrance from the right',
  'slide-right': 'Entrance from the left',
  'scale-in': 'Modal / popover grow-in from 0.95',
  pop: 'Like / favourite reward with overshoot',
  shake: 'Inline validation error',
  spin: 'Loading spinner (linear loop)',
  pulse: 'Skeleton / idle pulse (loop)',
  shimmer: 'Skeleton shimmer sweep (loop)',
  ripple: 'Press ripple feedback',
}

export default { durations, easings, stagger, distance, semantic, keyframes }
