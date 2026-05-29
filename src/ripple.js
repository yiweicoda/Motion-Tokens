/**
 * Click-point ripple.
 * -------------------
 * Spawns a `.fx-ripple__wave` element at the pointer location inside a
 * `.fx-ripple` host and removes it when the animation ends. The visual styling
 * and timing live in effects.css (driven by --motion-ripple); this only
 * handles geometry (where + how big).
 *
 * Two ways to use it:
 *
 *   // Vanilla / any framework
 *   import { createRipple } from 'motion-tokens/ripple'
 *   el.addEventListener('pointerdown', createRipple)
 *
 *   // Vue 3 directive
 *   import { vRipple } from 'motion-tokens/ripple'
 *   app.directive('ripple', vRipple)
 *   // <button class="fx-ripple" v-ripple>Click</button>
 */

export function createRipple(event) {
  const host = event.currentTarget
  if (!host) return

  // Size the wave to fully cover the host from the click point.
  const rect = host.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height) * 2
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  const wave = document.createElement('span')
  wave.className = 'fx-ripple__wave'
  wave.style.width = wave.style.height = `${size}px`
  wave.style.left = `${x - size / 2}px`
  wave.style.top = `${y - size / 2}px`

  // Clean up after the animation so waves don't accumulate.
  wave.addEventListener('animationend', () => wave.remove())

  host.appendChild(wave)
}

export const vRipple = {
  mounted(el) {
    if (!el.classList.contains('fx-ripple')) el.classList.add('fx-ripple')
    el._rippleHandler = createRipple
    el.addEventListener('pointerdown', el._rippleHandler)
  },
  unmounted(el) {
    if (el._rippleHandler) el.removeEventListener('pointerdown', el._rippleHandler)
  },
}

export default { createRipple, vRipple }
