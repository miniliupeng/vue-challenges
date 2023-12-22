<script setup lang="ts">
// import { vFocus } from '@/directives/vFocus'
import { ref } from 'vue'

const state = ref(false)

setInterval(() => {
  state.value = !state.value
}, 2000)
</script>

<template>
  <input v-focus="state" />
</template>

<style lang="scss" scoped></style>
