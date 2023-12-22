<script setup lang="ts">
import { ref, computed, watch, watchEffect, effectScope } from 'vue'

const counter = ref(1)
const doubled = computed(() => counter.value * 2)
// 使用 `effectScope` API 使这些Effect效果在触发一次后停止
const scope = effectScope()
scope.run(() => {
  watch(doubled, () => console.log(doubled.value))
  watchEffect(() => console.log('doubled: ', doubled.value))
})

counter.value = 2
scope.stop()

setTimeout(() => {
  counter.value = 4
})
</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>
