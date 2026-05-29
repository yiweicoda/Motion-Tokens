<script setup>
import { ref, nextTick } from 'vue'

const durations = ['fast', 'base', 'slow', 'slower']
const playing = ref(false)
const snapping = ref(false) // true while dots snap back — disables transition

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
      <span class="demo__chip">ease: decelerate</span>
    </div>
    <div class="rows">
      <div v-for="d in durations" :key="d" class="row">
        <span class="label"><code>duration-{{ d }}</code></span>
        <div class="track">
          <div
            class="dot"
            :class="{ go: playing }"
            :style="{
              transition: snapping
                ? 'none'
                : `transform var(--motion-duration-${d}) var(--motion-ease-decelerate)`,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rows { display: flex; flex-direction: column; gap: 14px; }
.row { display: flex; align-items: center; gap: 16px; }
.label { width: 130px; flex-shrink: 0; font-size: 13px; }
.track {
  position: relative;
  flex: 1;
  height: 28px;
  border-radius: 999px;
  background: var(--vp-c-default-soft);
}
.dot {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  transform: translateX(0);
}
.dot.go { transform: translateX(calc(100% + 100cqw)); }
/* fallback: animate across most of the track */
.track .dot.go { transform: translateX(380px); }
</style>
