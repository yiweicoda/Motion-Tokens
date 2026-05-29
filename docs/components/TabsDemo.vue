<script setup>
import { ref } from 'vue'

const tabs = ['Overview', 'Activity', 'Settings']
const active = ref(0)
</script>

<template>
  <div class="demo">
    <div class="tabs" role="tablist">
      <button
        v-for="(tab, i) in tabs"
        :key="tab"
        class="tab"
        :class="{ active: active === i }"
        role="tab"
        :aria-selected="active === i"
        @click="active = i"
      >
        {{ tab }}
      </button>
      <span class="indicator" :style="{ transform: `translateX(${active * 100}%)` }" />
    </div>
    <div class="demo__controls" style="margin-top:12px">
      <button class="demo__btn demo__btn--ghost" @click="active = 0">↺ Reset</button>
      <span class="demo__chip">indicator: 250ms standard</span>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 360px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.tab {
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
  font-size: 14px;
  padding: 12px 8px;
  color: var(--vp-c-text-2);
  transition: color var(--motion-hover);
}
.tab.active { color: var(--vp-c-brand-1); font-weight: 600; }
.indicator {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: calc(100% / 3);
  height: 2px;
  background: var(--vp-c-brand-1);
  transition: transform var(--motion-tab-indicator);
}
</style>
