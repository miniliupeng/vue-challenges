<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'

const count = ref(0)

/**
 * 挑战 1: Watch 一次
 * 确保副作用函数只执行一次
 */
const unWatch = watch(count, () => {
  console.log('Only triggered once')
  unWatch()
})

count.value = 1
setTimeout(() => (count.value = 2))

/**
 * 挑战 2: Watch 对象
 * 确保副作用函数被正确触发
 */
const state = ref({
  count: 0
})

watch(
  state,
  () => {
    console.log(state.value.count)
    console.log('The state.count updated')
  },
  {
    deep: true
  }
)

state.value.count = 2

/**
 * 挑战 3: 副作用函数刷新时机
 * 确保正确访问到更新后的`eleRef`值
 */

const eleRef = ref()
const age = ref(2)
watch(age, () => {
  console.log(eleRef.value)
}, {
  flush: 'post' // 能访问被 Vue 更新之后的DOM
})
age.value = 18
</script>

<template>
  <div>
    <p>
      {{ count }}
    </p>
    <p ref="eleRef">
      {{ age }}
    </p>
  </div>
</template>
