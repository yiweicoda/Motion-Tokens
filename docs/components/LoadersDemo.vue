<script setup>
import { ref, onUnmounted } from 'vue'

// Status motion: spinner (linear loop), determinate progress (eased updates),
// skeleton shimmer. The one place `linear` easing is correct.
const progress = ref(0)
let timer = null

function run() {
  clearInterval(timer)
  progress.value = 0
  timer = setInterval(() => {
    progress.value = Math.min(100, progress.value + Math.round(Math.random() * 18))
    if (progress.value >= 100) clearInterval(timer)
  }, 500)
}

function reset() {
  clearInterval(timer)
  progress.value = 0
}

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="demo">
    <div class="grid">
      <div class="cell">
        <div class="spinner" />
        <code>spin · 1.2s linear</code>
      </div>

      <div class="cell">
        <div class="bar"><div class="fill" :style="{ width: progress + '%' }" /></div>
        <div style="display:flex;gap:6px">
          <button class="demo__btn demo__btn--ghost" @click="run">▶ Run</button>
          <button class="demo__btn demo__btn--ghost" @click="reset">↺ Reset</button>
        </div>
        <code>fill eased over 250ms</code>
      </div>

      <div class="cell">
        <div class="skeleton">
          <div class="line" style="width: 80%"><span class="shimmer" /></div>
          <div class="line" style="width: 60%"><span class="shimmer" /></div>
          <div class="line" style="width: 90%"><span class="shimmer" /></div>
        </div>
        <code>shimmer · 1.4s loop</code>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 24px; }
.cell { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }

.spinner {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 3px solid var(--vp-c-default-soft);
  border-top-color: var(--vp-c-brand-1);
  animation: spin 1.2s var(--motion-ease-linear) infinite;
}

.bar { width: 100%; height: 8px; border-radius: 999px; background: var(--vp-c-default-soft); overflow: hidden; }
.fill {
  height: 100%;
  background: var(--vp-c-brand-1);
  transition: width var(--motion-duration-base) var(--motion-ease-standard);
}

.skeleton { width: 100%; display: flex; flex-direction: column; gap: 8px; }
.line {
  position: relative;
  height: 12px;
  border-radius: 4px;
  background: var(--vp-c-default-soft);
  overflow: hidden;
}
.shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  animation: shimmer 1.4s var(--motion-ease-linear) infinite;
}
code { font-size: 12px; color: var(--vp-c-text-2); }
</style>
