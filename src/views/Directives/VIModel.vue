<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Hello Vue.js')
defineExpose({ value })
</script>

<template>
  <input v-oh-model="value" type="text" />
  {{ value }}
</template>
