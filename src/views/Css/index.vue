<script setup>
import { ref } from 'vue'
const theme = ref('red')

const colors = ['blue', 'yellow', 'red', 'green']

setInterval(() => {
  theme.value = colors[Math.floor(Math.random() * 4)]
}, 1000)
</script>

<template>
  <p :style="{ color: theme }">hello</p>
</template>

<style scoped>
/* 修改以下代码绑定动态颜色 */
/* p {
  color: v-bind(theme);
} */

/* 使其工作 */
:global(body) {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>
