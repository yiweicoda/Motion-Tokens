<script setup>
import { computed } from 'vue'
import tokens from '../../src/tokens.js'

// Renders a token reference table straight from src/tokens.js so the docs can
// never drift from the source of truth. `group` selects which token category.
const props = defineProps({
  group: { type: String, required: true },
  prefix: { type: String, default: '' }, // CSS-var prefix, e.g. --motion-duration-
})

const rows = computed(() =>
  Object.entries(tokens[props.group]).map(([name, meta]) => ({
    name,
    value: meta.value ?? '',
    job: typeof meta === 'string' ? meta : meta.job,
    cssVar: props.prefix ? `${props.prefix}${name}` : '',
  })),
)
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Token</th>
        <th v-if="prefix">CSS variable</th>
        <th v-if="rows[0]?.value">Value</th>
        <th>Job</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.name">
        <td><code>{{ row.name }}</code></td>
        <td v-if="prefix"><code>{{ row.cssVar }}</code></td>
        <td v-if="row.value"><code>{{ row.value }}</code></td>
        <td>{{ row.job }}</td>
      </tr>
    </tbody>
  </table>
</template>
