<script setup lang="ts">
  const props = defineProps({
    modelValue: String,
    modelModifiers: { default: () => ({}) }
  })
  const emit =  defineEmits(['update:modelValue'])
  // console.log(props.modelModifiers) // { capitalize: true }
  function emitValue(e: any) {
    let value = e.target.value
    if (props.modelModifiers.capitalize) {
      value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emit('update:modelValue', value)
  }
</script>

<template>
 <input
    type="text"
    :value="modelValue"
    @input="emitValue"
  />
</template>

<style lang="scss" scoped>
  
</style>