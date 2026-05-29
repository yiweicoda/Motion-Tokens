<script setup>
import { ref } from 'vue'

// Toasts enter ease-out (slide-up + fade) and auto-dismiss. Non-blocking.
let id = 0
const toasts = ref([])

function add() {
  const t = { id: id++, msg: 'Changes saved' }
  toasts.value.push(t)
  setTimeout(() => {
    toasts.value = toasts.value.filter((x) => x.id !== t.id)
  }, 2600)
}

function clearAll() {
  toasts.value = []
}
</script>

<template>
  <div class="demo">
    <div class="demo__controls">
      <button class="demo__btn" @click="add">Trigger toast</button>
      <button class="demo__btn demo__btn--ghost" @click="clearAll">↺ Clear all</button>
      <span class="demo__chip">enter: 250ms decelerate</span>
    </div>
    <!-- Stage is position:relative so the absolutely-placed stack stays inside -->
    <div class="stage">
      <TransitionGroup name="toast" tag="div" class="stack">
        <div v-for="t in toasts" :key="t.id" class="toast">✓ {{ t.msg }}</div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.stage {
  position: relative;
  min-height: 120px;
  border-radius: 8px;
  background: var(--vp-c-default-soft);
}
.stack {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
  max-width: calc(100% - 24px);
}
.toast {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid var(--vp-c-brand-1);
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
  white-space: nowrap;
}
.toast-enter-active { transition: opacity var(--motion-toast-enter), transform var(--motion-toast-enter); }
.toast-leave-active { transition: opacity var(--motion-duration-exit) var(--motion-ease-accelerate), transform var(--motion-duration-exit) var(--motion-ease-accelerate); }
.toast-enter-from { opacity: 0; transform: translateY(var(--motion-distance-lg)); }
.toast-leave-to { opacity: 0; transform: translateX(var(--motion-distance-xl)); }
</style>
