import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// Load the real tokens (CSS custom properties + keyframes + reduced-motion)
// so every demo animates with the actual values — no hardcoded copies.
import '../../../src/index.css'
// Tailwind utilities (utilities only — no Preflight, to avoid clobbering the
// VitePress theme). Lets demos showcase real `duration-*` / `animate-*` usage.
import './tailwind.css'
import './custom.css'

// Auto-register every demo component in docs/components as a global so the
// markdown token pages can use them directly.
const demos = import.meta.glob('../../components/*.vue', { eager: true })

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    for (const path in demos) {
      const name = path.split('/').pop()!.replace(/\.vue$/, '')
      // @ts-expect-error default export is a Vue component
      app.component(name, demos[path].default)
    }
  },
} satisfies Theme
