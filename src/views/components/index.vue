<script setup lang="ts">
import IProps from './my-props.vue'
import IFun from './i-fun.vue'
import { ref } from 'vue'
import TreeComponent from './TreeComponent.vue'
const treeData = ref([
  {
    key: '1',
    title: 'Parent 1',
    children: [
      {
        key: '1-1',
        title: 'child 1'
      },
      {
        key: '1-2',
        title: 'child 2',
        children: [
          {
            key: '1-2-1',
            title: 'grandchild 1'
          },
          {
            key: '1-2-2',
            title: 'grandchild 2'
          }
        ]
      }
    ]
  },
  {
    key: '2',
    title: 'Parent 2',
    children: [
      {
        key: '2-1',
        title: 'child 1',
        children: [
          {
            key: '2-1-1',
            title: 'grandchild 1'
          },
          {
            key: '2-1-2',
            title: 'grandchild 2'
          }
        ]
      },
      {
        key: '2-2',
        title: 'child 2'
      }
    ]
  }
])
</script>

<template>
  <div>
    <!-- <IProps type="primary" /> -->
    <!-- <IFun /> -->
    <TreeComponent :data="treeData" />
  </div>
</template>

<style lang="scss" scoped></style>
