<script setup>
import { ref } from 'vue'

// Simulates the prefers-reduced-motion fallback so reviewers can see the
// reduced path without changing their OS setting. The `reduce` class mirrors
// what src/tokens/reduced-motion.css does globally.
const reduce = ref(false)
const show = ref(false)
function replay() {
  show.value = false
  requestAnimationFrame(() => requestAnimationFrame(() => (show.value = true)))
}
</script>

<template>
  <div class="demo">
    <div class="demo__controls">
      <label class="switch">
        <input type="checkbox" v-model="reduce" />
        Simulate <code>prefers-reduced-motion: reduce</code>
      </label>
      <button class="demo__btn" @click="replay">↺ Replay</button>
    </div>
    <div class="stage" :class="{ reduce }">
      <div class="card" :class="{ go: show }">
        <strong>Saved ✓</strong>
        <span>Note the colour + checkmark still convey the change when motion is off.</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stage { min-height: 96px; display: flex; align-items: center; }
.card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 320px;
  padding: 14px 18px;
  border-radius: 10px;
  background: var(--vp-c-default-soft);
  border-left: 3px solid var(--vp-c-divider);
  opacity: 0;
  transform: translateY(var(--motion-distance-lg));
  transition: opacity var(--motion-duration-base) var(--motion-ease-decelerate),
              transform var(--motion-duration-base) var(--motion-ease-decelerate),
              border-color var(--motion-duration-base) var(--motion-ease-standard);
}
.card.go { opacity: 1; transform: translateY(0); border-left-color: var(--vp-c-brand-1); }
.card span { font-size: 13px; color: var(--vp-c-text-2); }

/* Mirrors reduced-motion.css */
.stage.reduce .card { transition-duration: 0.01ms !important; }
</style>
