<script setup lang="ts">
import { onMounted, inject, onUnmounted, type Ref } from "vue"

const timer = inject<Ref<number | undefined>>('timer')
const count = inject<Ref<number>>('count')


onMounted(() => {
  if (!timer || !count) return
  // 切换子组件时, 定时器将不正常工作, 让我们来修复它 . 
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})

onUnmounted(() => {
  if (!timer) return
  clearInterval(timer.value)
})
</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>

