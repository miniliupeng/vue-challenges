
<script setup lang="tsx">
// 最佳实践
import { ref, toRef, toRefs } from 'vue'
import type { FComponentProps } from './fun'

const props = defineProps<FComponentProps>()
const emit = defineEmits(['toggle'])
const count = ref(0)
const { list, info } = props

const activeIndex = toRef(props, 'activeIndex')
const render = () => {
  return (
    <ul class="list">
      {info.name}
      {list.map((item, index) => {
        return (
          <li
            style={{ color: activeIndex.value === index ? 'red' : '' }}
            onClick={() => emit('toggle', index)}
          >
            {item.name}
            {count.value}
          </li>
        )
      })}
    </ul>
  )
}

// render 或 ListComponent 都可

const ListComponent = ({ list, activeIndex, count }: FComponentProps) => {
  return (
    <ul class="list">
      {list.map((item, index) => {
        return (
          <li
            style={{ color: activeIndex === index ? 'red' : '' }}
            onClick={() => emit('toggle', index)}
          >
            {item.name}{count}
          </li>
        )
      })}
    </ul>
  )
}
</script>

<template>
  <!-- <render/> -->
  <!-- <component :is="render()"></component> -->
  <ListComponent v-bind="props" :count="count" />
</template>

<style scoped>
.list {
  color: #bdbdbd;
}
</style>
