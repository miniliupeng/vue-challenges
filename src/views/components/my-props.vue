<script setup lang="ts">
type Type = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
const { type } = withDefaults(defineProps<{ type: Type }>(), {
  type: 'default'
})

</script>

<template>
  <button>{{ type }}</button>
</template>
