<script setup lang='ts'>
import { useToggle } from '../../hooks/useToggle'
/**
 * 实现一个切换状态的可组合函数
 * 确保该功能正常工作
*/


const [state, toggle] = useToggle(false)

</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">
    Toggle state
  </p>
</template>

