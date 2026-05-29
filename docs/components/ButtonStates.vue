<script setup>
// Pure CSS micro-interactions: hover lift, press scale, ripple. All timing
// comes from the tokens. Nothing here blocks the user.
</script>

<template>
  <div class="demo">
    <div class="demo__stage">
      <button class="btn btn--primary">Hover &amp; press me</button>
      <button class="btn btn--ghost">Secondary</button>
      <span class="demo__chip">hover: 150ms · press: 100ms</span>
    </div>
  </div>
</template>

<style scoped>
.btn {
  appearance: none;
  border: none;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 18px;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #fff;
  transition: transform var(--motion-hover), box-shadow var(--motion-hover);
}
.btn--ghost { background: transparent; color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); }
.btn:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18); }
.btn:active { transform: scale(0.96); transition: transform var(--motion-press); }
</style>
