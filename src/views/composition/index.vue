<script setup lang="ts">
// import Lifecycle from './Lifecycle.vue'
// import { ref, provide } from 'vue'

// const visible = ref(true)
// const timer = ref<number>()
// const count = ref<number>(0)
// provide('timer', timer)
// provide('count', count)

// function toggle() {
//   visible.value = !visible.value
// }
import ReactivityCore from './ReactivityCore.vue'
import ReactivityUtilities from './ReactivityUtilities.vue'
import Computed from './Computed.vue'
import Watch from './Watch.vue'
import ShallowRef from './ShallowRef.vue'
import EffectScope from './EffectScope.vue'
import CustomRef from './CustomRef.vue'



</script>

<template>
  <div>
    <!-- <Lifecycle v-if="visible" />
    <p>
      <button @click="toggle">Toggle Child Component</button>
    </p> -->

    <!-- <ReactivityCore /> -->
    <!-- <ReactivityUtilities /> -->
    <!-- <Computed /> -->
    <!-- <Watch /> -->
    <!-- <ShallowRef /> -->
    <!-- <EffectScope /> -->
    <CustomRef />
  </div>
</template>

<style lang="scss" scoped></style>
