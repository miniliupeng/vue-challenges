import type { Directive, DirectiveBinding } from 'vue'

const debounce = (fn: () => void, delay: number) => {
  let timeoutId: number
  return () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn()
    }, delay)
  }
}

/**
 * 实现以下自定义指令
 * 确保在一定时间内当快速点击按钮多次时只触发一次点击事件
 * 你需要支持防抖延迟时间选项, 用法如 `v-debounce-click:ms`
 *
 */

export const vDebounceClick: Directive = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    const { value: cb, arg: delay } = binding
    const debounced = debounce(cb, delay)
    el.addEventListener('click', debounced)
    el._debounced = debounced
  },
  unmounted: (el: HTMLElement, binding: DirectiveBinding) => {
    if (el._debounced) {
      el.removeEventListener('click', el._debounced)
    }
  }
}
