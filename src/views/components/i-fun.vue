<script setup lang="tsx">
import { defineComponent, reactive, ref, toRefs } from 'vue'
/**
 * 实现该函数式组件 :
 * 1. 使用`list`数据渲染列表元素 (ul/li)
 * 2. 当点击列表子元素时,将其文本颜色更改为红色
 */

// import { ListComponent } from './list-component.tsx'
import ListComponent from './list-component.vue'

import { type FComponentProps } from './fun'
// const ListComponent = defineComponent({
//   props: ['list', 'activeIndex'],
//   emits: ["toggle"],
//   render() {
//     const count = ref(0)
//     console.log(count);
    
//     return (
//       <ul>
//         {list.map((item: { name: string }, index: number) => (
//           <li
//             onClick={() => {
//               this.$emit('toggle', index)
//             }}
//             style={{ color: this.activeIndex === index ? 'red' : 'black' }}
//           >
//             {item.name}{count.value}
//           </li>
//         ))}
//       </ul>
//     )
//   }
// })

// const ListComponent = defineComponent({
//   props: ['list', 'activeIndex'],
//   emits: ['toggle'],
//   setup(props, ctx) {
//     // const { activeIndex } = props // 丢失响应性
//     // const { activeIndex, list } = toRefs(props) //props不用声明，直接用
//     // 这么写吧！
//     return () => (
//       <ul>
//         {list.map((item: { name: string }, index: number) => (
//           <li
//             onClick={() => {
//               ctx.emit('toggle', index)
//             }}
//             style={{ color: activeIndex.value === index ? 'red' : 'black' }}
//           >
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     )
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

const info = reactive({
  name: 'lp',
  age: 18
})
const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
  info.name = 'jb'
}

</script>

<template>
  <list-component :list="list" :active-index="activeIndex" :info="info" @toggle="toggle" />
</template>
