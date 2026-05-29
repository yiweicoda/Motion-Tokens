<script setup>
import { ref, nextTick } from 'vue'
import { stagger as staggerTokens } from '../../src/tokens.js'

const items = ['Inbox', 'Drafts', 'Sent', 'Archive', 'Spam', 'Trash']
const stagger = ref('sm')
const show = ref(false)

// Concrete ms value (e.g. '150ms') — no CSS var in calc, no cascade conflicts.
function delayFor(i) {
  const raw = staggerTokens[stagger.value]?.value ?? '50ms'
  return `${i * parseInt(raw)}ms`
}

async function reset() {
  show.value = false
  await nextTick() // wait for DOM to remove .go before replaying
}

async function replay() {
  await reset()
  show.value = true // .go added → animation fires per-item with animationDelay
}
</script>

<template>
  <div class="demo">
    <div class="demo__controls">
      <button class="demo__btn" @click="replay">▶ Play</button>
      <button class="demo__btn demo__btn--ghost" @click="reset">↺ Reset</button>
      <label v-for="s in ['xs', 'sm', 'md']" :key="s" class="radio">
        <input type="radio" :value="s" v-model="stagger" /> stagger-{{ s }}
      </label>
    </div>
    <ul class="list">
      <li
        v-for="(item, i) in items"
        :key="item"
        class="item"
        :class="{ go: show }"
        :style="{ animationDelay: delayFor(i) }"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.radio { font-size: 13px; display: inline-flex; gap: 4px; align-items: center; }

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 280px;
}

/* Hidden by default — animation drives the reveal */
.item {
  opacity: 0;
  padding: 10px 14px;
  border-radius: 8px;
  background: var(--vp-c-default-soft);
  font-size: 14px;
}

/*
  'both' fill:
    backwards — holds the 'from' state during animation-delay (keeps hidden)
    forwards  — holds the 'to' state after the animation ends (stays visible)
*/
.item.go {
  animation: slide-up var(--motion-duration-base) var(--motion-ease-decelerate) both;
}
</style>
