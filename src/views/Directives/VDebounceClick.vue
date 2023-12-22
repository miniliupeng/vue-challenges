<script setup lang='ts'>
import { ref } from 'vue'
const show = ref(true)
function onClick() {
  console.log("Only triggered once when clicked many times quicky")
  show.value = !show.value
}

</script>

<template>
  <button v-if="show" v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>

