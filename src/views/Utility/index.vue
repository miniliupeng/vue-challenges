<script setup lang="ts">
import { ref, watch } from 'vue'

const count = ref(0)

/**
 * 实现`until`函数
 */

function until<T>(initial: Ref<T>) {
  function toBe(value: T) {
    return new Promise((resolve) => {
      const unwatch = watch(initial,(intw)=>{
        if(intw=== value){
          unwatch()
          resolve()
        }
      })
    })
  }

  return {
    toBe
  }
}


async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // 确保输出为true
}
</script>

<template>
  <p @click="increase">
    {{ count }}
  </p>
</template>
