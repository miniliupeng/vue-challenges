<script setup lang="ts">
import { ref, vModelText } from 'vue'
import Input from './Input.vue'
const value = ref('')
// 影响全局
// vModelText.beforeUpdate = (el, binding) => {
//   if (el.value && binding.modifiers.capitalize) {
//     el.value = el.value.charAt(0).toUpperCase() + el.value.slice(1)
//   }
// }
</script>

<template>
  <Input v-model.capitalize="value" />
  <!-- <input type="text" v-model.capitalize="value" /> -->
</template>
