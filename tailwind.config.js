/**
 * Tailwind v3 configuration.
 * --------------------------
 * Re-exposes the motion CSS custom properties (src/tokens/motion.css) as
 * Tailwind utilities so authors stay on-token automatically:
 *
 *   <button class="transition duration-fast ease-standard">      // hover/press
 *   <div class="animate-slide-up">                               // entrance
 *   <div class="animate-spin-token">                             // loader
 *
 * The values point at the CSS variables, so the tokens remain the single
 * source of truth — change motion.css and every utility updates with it.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/**/*.{vue,js,ts,md}',
    './src/**/*.{js,css}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        instant: 'var(--motion-duration-instant)',
        fast: 'var(--motion-duration-fast)',
        base: 'var(--motion-duration-base)',
        slow: 'var(--motion-duration-slow)',
        slower: 'var(--motion-duration-slower)',
        exit: 'var(--motion-duration-exit)',
      },
      transitionTimingFunction: {
        standard: 'var(--motion-ease-standard)',
        decelerate: 'var(--motion-ease-decelerate)',
        accelerate: 'var(--motion-ease-accelerate)',
        sharp: 'var(--motion-ease-sharp)',
        emphasized: 'var(--motion-ease-emphasized)',
        spring: 'var(--motion-ease-spring)',
      },
      transitionDelay: {
        'stagger-xs': 'var(--motion-stagger-xs)',
        'stagger-sm': 'var(--motion-stagger-sm)',
        'stagger-md': 'var(--motion-stagger-md)',
      },
      // Keyframe presets live in src/tokens/keyframes.css; we register matching
      // `animation` utilities that wire them to the token durations/easings.
      animation: {
        'fade-in': 'fade-in var(--motion-duration-base) var(--motion-ease-decelerate) both',
        'fade-out': 'fade-out var(--motion-duration-exit) var(--motion-ease-accelerate) both',
        'slide-up': 'slide-up var(--motion-duration-base) var(--motion-ease-decelerate) both',
        'slide-down': 'slide-down var(--motion-duration-base) var(--motion-ease-decelerate) both',
        'slide-left': 'slide-left var(--motion-duration-base) var(--motion-ease-decelerate) both',
        'slide-right': 'slide-right var(--motion-duration-base) var(--motion-ease-decelerate) both',
        'scale-in': 'scale-in var(--motion-duration-slow) var(--motion-ease-decelerate) both',
        pop: 'pop var(--motion-duration-base) var(--motion-ease-spring) both',
        shake: 'shake var(--motion-duration-slow) var(--motion-ease-standard) both',
        'spin-token': 'spin 1.2s var(--motion-ease-linear) infinite',
        'pulse-token': 'pulse 1.4s var(--motion-ease-standard) infinite',
        shimmer: 'shimmer 1.4s var(--motion-ease-linear) infinite',
        ripple: 'ripple var(--motion-duration-slow) var(--motion-ease-decelerate) forwards',
      },
    },
  },
  plugins: [],
}
