<script setup lang="tsx">
import type { FComponentProps } from './fun'

const props =  defineProps<FComponentProps>()
const emit = defineEmits(['toggle'])

const ListComponent = ({ list, activeIndex }: FComponentProps) => {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li
            style={{ color: activeIndex === index ? 'red' : '' }}
            onClick={() => emit('toggle', index)}
          >
            {item.name}
          </li>
        )
      })}
    </ul>
  )
}
</script>

<template>
  <ListComponent v-bind="props" />
</template>

<style lang="scss" scoped></style>
