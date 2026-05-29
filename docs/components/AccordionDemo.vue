<script setup>
import { ref } from 'vue'

// Expand/collapse via animating grid-template-rows 0fr→1fr — smooth like a
// height animation but cheaper and without the jank of animating raw `height`.
const open = ref(0)
const panels = [
  { q: 'What are motion tokens?', a: 'Named, reusable durations, easings, delays and displacements that keep every animation in the product consistent.' },
  { q: 'When should I reach for JS?', a: 'Only for springs, gestures, list reordering, and shared-element transitions. CSS covers the rest.' },
]
</script>

<template>
  <div class="demo">
    <div class="demo__controls">
      <span class="demo__chip">350ms · standard</span>
      <button class="demo__btn demo__btn--ghost" @click="open = -1">↺ Close all</button>
    </div>
    <div class="accordion">
      <div v-for="(p, i) in panels" :key="i" class="row">
        <button class="head" :aria-expanded="open === i" @click="open = open === i ? -1 : i">
          <span>{{ p.q }}</span>
          <span class="caret" :class="{ open: open === i }">⌄</span>
        </button>
        <div class="wrap" :class="{ open: open === i }">
          <div class="inner"><p>{{ p.a }}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion { max-width: 460px; border: 1px solid var(--vp-c-divider); border-radius: 10px; overflow: hidden; }
.row + .row { border-top: 1px solid var(--vp-c-divider); }
.head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  font-size: 14px;
  padding: 14px 16px;
  color: var(--vp-c-text-1);
}
.caret { transition: transform var(--motion-accordion); }
.caret.open { transform: rotate(180deg); }
.wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--motion-accordion);
}
.wrap.open { grid-template-rows: 1fr; }
.inner { overflow: hidden; }
.inner p { margin: 0; padding: 0 16px 16px; font-size: 14px; color: var(--vp-c-text-2); }
</style>
