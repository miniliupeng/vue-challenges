<script setup lang="tsx">
import { defineComponent, ref } from 'vue'
/**
 * 实现该函数式组件 :
 * 1. 使用`list`数据渲染列表元素 (ul/li)
 * 2. 当点击列表子元素时,将其文本颜色更改为红色
 */

// import { ListComponent } from './list-component.tsx'
// import ListComponent from './list-component.vue'

import { type FComponentProps } from './fun'
const ListComponent = defineComponent({
  props: ['list', 'activeIndex'],
  emits: ["toggle"],
  render() {
    return (
      <ul>
        {list.map((item: { name: string }, index: number) => (
          <li
            onClick={() => {
              this.$emit('toggle', index)
            }}
            style={{ color: this.activeIndex === index ? 'red' : 'black' }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    )
  }
})

// const ListComponent = defineComponent({
//   props: ['list', 'activeIndex'],
//   emits: ['toggle'],
//   setup({activeIndex}, {emit}) {
//     console.log(activeIndex);

//     return ({ list, activeIndex }) => {
//       console.log(activeIndex);

//       return (
//       <ul>
//         {list.map((item: { name: string }, index: number) => (
//           <li
//             onClick={() => {
//               emit('toggle', index)
//             }}
//             style={{ color: activeIndex === index ? 'red' : 'black' }}
//           >
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     )
//     }
//   }
// })

// const ListComponent = defineComponent(
//   (props, { emit }) => {

//     return ({ list, activeIndex }:FComponentProps) => {
//       console.log({ list, activeIndex });
//       // 渲染函数或 JSX
//       return (
//         <ul>
//           {list.map((item: { name: string }, index: number) => (
//             <li
//               onClick={() => {
//                 emit('toggle', index)
//               }}
//               style={{ color: activeIndex === index ? 'red' : 'black' }}
//             >
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       )
//     }
//   },
//   // 其他选项，例如声明 props 和 emits。
//   {
//     props: ['list', 'activeIndex']
//   }
// )


const list = [
  {
    name: 'John'
  },
  {
    name: 'Doe'
  },
  {
    name: 'Smith'
  }
]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <list-component :list="list" :active-index="activeIndex" @toggle="toggle" />
</template>
