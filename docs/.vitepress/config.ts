import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Motion Tokens',
  description: 'Motion design tokens for a Vue 3 + Tailwind design system.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Tokens', link: '/tokens/durations' },
      { text: 'Tracking', link: '/tracking' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'Using tokens in Vue', link: '/guide/usage-vue' },
          { text: 'Accessibility', link: '/guide/accessibility' },
        ],
      },
      {
        text: 'Tokens',
        items: [
          { text: 'Durations', link: '/tokens/durations' },
          { text: 'Easing', link: '/tokens/easing' },
          { text: 'Delay & stagger', link: '/tokens/delay-stagger' },
          { text: 'Displacement', link: '/tokens/displacement' },
          { text: 'Semantic tokens', link: '/tokens/semantic' },
          { text: 'Keyframes', link: '/tokens/keyframes' },
        ],
      },
      {
        text: 'Adoption',
        items: [{ text: 'Tracking', link: '/tracking' }],
      },
    ],
    outline: 'deep',
  },
})
