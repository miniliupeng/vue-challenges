import type { Directive, DirectiveBinding } from "vue";

export const vFocus: Directive = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    if (binding.value) {
      el.focus()
    }
  },
  updated: (el: HTMLElement, binding: DirectiveBinding) => {
    binding.value?el.focus(): el.blur();
  }
}