<script setup lang="ts">
import TreeComponent from './TreeComponent.vue'
export interface TreeData {
  key: string
  title: string
  children?: TreeData[]
}
defineProps<{ data?: TreeData[] }>()
</script>

<template>
  <div v-for="item in data" :key="item.key">
    {{ item.title }}
    <TreeComponent v-if="!!item.children?.length" :data="item.children" />
  </div>
</template>

<style lang="scss" scoped></style>
