import { watchEffect, type Directive, type DirectiveBinding } from 'vue'

/**
 * 实现该指令 :
 * 当切换该选项卡时，列表项文本颜色变为红色
 *
 */

export const vActiveStyle: Directive = (el: HTMLElement, binding: DirectiveBinding) => {
  const [{ color }, fn] = binding.value
  watchEffect(() => {
    el.style.color = fn() ? color : ''
  })
}