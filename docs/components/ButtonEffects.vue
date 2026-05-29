<script setup>
import { createRipple } from '../../src/ripple.js'
</script>

<template>
  <div class="demo">
    <p class="hint">
      Each effect is opt-in — add the class to any button. The shimmer runs
      perpetually to flag a primary CTA, the ripple fires from the click point,
      the border runs continuously.
    </p>

    <div class="grid">
      <!-- Plain (baseline) -->
      <div class="cell">
        <button class="btn">Plain button</button>
        <code>no effect</code>
      </div>

      <!-- Perpetual gloss shimmer (primary CTA) -->
      <div class="cell">
        <button class="btn fx-shimmer">Get started</button>
        <code>.fx-shimmer (perpetual CTA)</code>
      </div>

      <!-- Click-point ripple -->
      <div class="cell">
        <button class="btn btn--dark fx-ripple" @pointerdown="createRipple">
          Click anywhere
        </button>
        <code>.fx-ripple + createRipple</code>
      </div>

      <!-- Running conic border -->
      <div class="cell">
        <button class="btn btn--bare fx-glow-border">Glow border</button>
        <code>.fx-glow-border</code>
      </div>

      <!-- All effects combined -->
      <div class="cell">
        <button
          class="btn btn--bare fx-glow-border fx-shimmer fx-ripple"
          @pointerdown="createRipple"
        >
          All three
        </button>
        <code>combined</code>
      </div>
    </div>

    <p class="note">
      The shimmer loops at <code>--motion-shimmer-sweep</code> (3s, sweep +
      pause) behind the label so text stays legible; the ripple fires on click;
      the border loops at <code>--motion-border-spin</code> (3.2s). Under
      <code>prefers-reduced-motion</code> the shimmer and border loops stop and
      the ripple collapses to instant — the buttons stay fully usable.
    </p>
  </div>
</template>

<style scoped>
.hint { font-size: 14px; color: var(--vp-c-text-2); margin: 0 0 16px; }
.note { font-size: 13px; color: var(--vp-c-text-2); margin: 20px 0 0; line-height: 1.5; }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 24px;
  align-items: start;
}
.cell { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }
.cell code { font-size: 12px; color: var(--vp-c-text-2); }

/* Base button — kept token-driven so press/hover feel consistent */
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
  transition: transform var(--motion-press);
}
.btn:active { transform: scale(0.96); }

/* darker surface so the white ripple reads clearly */
.btn--dark { background: #1f2430; }

/* bare surface for the glow border (border supplies the colour) */
.btn--bare {
  background: #15110050;
  color: #ffe9a8;
  /* let .fx-glow-border own the border + radius */
  border-radius: 8px;
}

/* Tune the gold glow for the combined example via the themable vars */
.fx-glow-border { --fx-border-radius: 8px; }
</style>
