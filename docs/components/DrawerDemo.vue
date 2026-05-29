<script setup>
import { ref } from 'vue'

// Drawer slides from the edge it lives on. Uses the `sharp` curve because it
// parks just off-screen and may return.
const open = ref(false)
</script>

<template>
  <div class="demo">
    <div class="demo__stage">
      <button class="demo__btn" @click="open = true">Open drawer</button>
      <span class="demo__chip">350ms · sharp</span>
    </div>

    <Transition name="drawer">
      <div v-if="open" class="backdrop" @click.self="open = false">
        <aside class="panel">
          <h3>Filters</h3>
          <p>Slides from the right edge — the side it belongs to.</p>
          <button class="demo__btn demo__btn--ghost" @click="open = false">Close</button>
        </aside>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  overflow: hidden;
  z-index: 2;
}
.panel {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 240px;
  background: var(--vp-c-bg);
  padding: 20px;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.22);
}
.panel h3 { margin: 0 0 8px; }
.panel p { font-size: 14px; color: var(--vp-c-text-2); margin: 0 0 16px; }

.drawer-enter-active,
.drawer-leave-active { transition: opacity var(--motion-drawer); }
.drawer-enter-from,
.drawer-leave-to { opacity: 0; }
.drawer-enter-active .panel,
.drawer-leave-active .panel { transition: transform var(--motion-drawer); }
.drawer-enter-from .panel,
.drawer-leave-to .panel { transform: translateX(100%); }
</style>
