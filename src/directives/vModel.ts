import { watch, type Directive, type DirectiveBinding, watchEffect, toRef } from 'vue'

/**
 * 实现以下自定义指令
 * 在表单输入元素和数据间创建双向绑定
 *
 */

export const vOhModel: Directive = {
  mounted: (el, binding: DirectiveBinding) => {
    const { instance, value } = binding
    el.value = value
    const _input = (e) => {
      instance.value = e.target.value
    }
    el._input = _input
    el.addEventListener('input', _input)
  },
  unmounted: (el, binding: DirectiveBinding) => {
    if (el._input) {
      el.removeEventListener('input', el._input)
    }
  }
}
