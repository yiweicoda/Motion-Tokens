<script setup>
import { ref } from 'vue'

// Symmetric open/close: enter decelerates (scale-in + backdrop fade),
// exit accelerates away. Uses Vue <Transition> with token-driven CSS.
const open = ref(false)
</script>

<template>
  <div class="demo">
    <div class="demo__stage">
      <button class="demo__btn" @click="open = true">Open modal</button>
      <span class="demo__chip">enter: 350ms decelerate · exit: 200ms accelerate</span>
    </div>

    <Transition name="modal">
      <div v-if="open" class="backdrop" @click.self="open = false">
        <div class="dialog" role="dialog" aria-modal="true">
          <h3>Delete project?</h3>
          <p>This grows in from 0.95 as the backdrop fades. Closing reverses it.</p>
          <div class="actions">
            <button class="demo__btn demo__btn--ghost" @click="open = false">Cancel</button>
            <button class="demo__btn" @click="open = false">Confirm</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.backdrop {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  z-index: 2;
}
.dialog {
  background: var(--vp-c-bg);
  border-radius: 12px;
  padding: 24px;
  max-width: 320px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.28);
}
.dialog h3 { margin: 0 0 8px; }
.dialog p { margin: 0 0 16px; font-size: 14px; color: var(--vp-c-text-2); }
.actions { display: flex; gap: 8px; justify-content: flex-end; }

/* Backdrop fade — enter decelerate, exit accelerate */
.modal-enter-active { transition: opacity var(--motion-modal-enter); }
.modal-leave-active { transition: opacity var(--motion-modal-exit); }
.modal-enter-from,
.modal-leave-to { opacity: 0; }

/* Dialog scale — driven by the same tokens */
.modal-enter-active .dialog { transition: transform var(--motion-modal-enter), opacity var(--motion-modal-enter); }
.modal-leave-active .dialog { transition: transform var(--motion-modal-exit), opacity var(--motion-modal-exit); }
.modal-enter-from .dialog,
.modal-leave-to .dialog { transform: scale(0.95); opacity: 0; }
</style>
