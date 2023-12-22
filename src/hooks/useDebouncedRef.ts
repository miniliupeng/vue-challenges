import { customRef } from 'vue'

export function useDebouncedRef(value: any, delay = 200) {
  let timeoutId: ReturnType<typeof setTimeout>
  return customRef((track, trigger) => ({
    get() {
      track()
      return value
    },
    set(newVal) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        value = newVal
        trigger()
      }, delay)
    }
  }))
}
