<script setup>
import { ref, nextTick } from 'vue'
import { easings } from '../../src/tokens.js'

// Visualise each easing curve as a bezier path + a dot that animates along it.
const curves = Object.entries(easings)
  .filter(([name]) => name !== 'linear')
  .map(([name, meta]) => ({ name, ...meta, ...parse(meta.value) }))

function parse(cb) {
  const m = cb.match(/cubic-bezier\(([^)]+)\)/)
  if (!m) return { p: [0, 0, 1, 1] }
  return { p: m[1].split(',').map((n) => parseFloat(n)) }
}

// SVG path for a cubic-bezier in a 100x100 box (y inverted so up = progress).
function path(p) {
  const [x1, y1, x2, y2] = p
  return `M0,100 C${x1 * 100},${100 - y1 * 100} ${x2 * 100},${100 - y2 * 100} 100,0`
}

const playing = ref(false)
const snapping = ref(false)

async function reset() {
  snapping.value = true
  playing.value = false
  await nextTick() // DOM: transition:none, dots at start
  snapping.value = false
  await nextTick() // DOM: transitions re-enabled — must flush before play
}

async function replay() {
  await reset()
  requestAnimationFrame(() => (playing.value = true))
}
</script>

<template>
  <div class="demo">
    <div class="demo__controls">
      <button class="demo__btn" @click="replay">▶ Play</button>
      <button class="demo__btn demo__btn--ghost" @click="reset">↺ Reset</button>
      <span class="demo__chip">duration: slow (350ms)</span>
    </div>
    <div class="grid">
      <div v-for="c in curves" :key="c.name" class="cell">
        <svg viewBox="-6 -6 112 112" class="curve">
          <line x1="0" y1="100" x2="100" y2="0" class="diag" />
          <path :d="path(c.p)" class="bez" />
        </svg>
        <div class="track">
          <div
            class="dot"
            :class="{ go: playing }"
            :style="{
              transition: snapping ? 'none' : `transform var(--motion-duration-slow) ${c.value}`,
            }"
          />
        </div>
        <code class="name">ease-{{ c.name }}</code>
        <span class="job">{{ c.job }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 18px; }
.cell { display: flex; flex-direction: column; gap: 6px; }
.curve { width: 100%; aspect-ratio: 1; background: var(--vp-c-default-soft); border-radius: 8px; }
.diag { stroke: var(--vp-c-divider); stroke-width: 1; stroke-dasharray: 3 3; }
.bez { fill: none; stroke: var(--vp-c-brand-1); stroke-width: 3; }
.track { position: relative; height: 16px; border-radius: 999px; background: var(--vp-c-default-soft); }
.dot { position: absolute; top: 2px; left: 2px; width: 12px; height: 12px; border-radius: 50%; background: var(--vp-c-brand-1); transform: translateX(0); }
.dot.go { transform: translateX(calc(150px - 18px)); }
.name { font-size: 12px; }
.job { font-size: 11px; color: var(--vp-c-text-2); line-height: 1.3; }
</style>
