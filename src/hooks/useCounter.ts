import { ref } from 'vue'

interface UseCounterOptions {
  min?: number
  max?: number
}

/**
 * 实现计数器函数,确保功能正常工作
 * 1. 加 (+)
 * 2. 减 (-)
 * 3. 重置
 * 4. 最小值 & 最大值 选项支持
 */
export const useCounter = (initialValue = 0, { min, max }: UseCounterOptions = {}) => {
  const count = ref(initialValue)
  const inc = () => {
    max && count.value < max && count.value++
  }
  const dec = () => {
    min && count.value > min && count.value--
  }
  const reset = () => {
    count.value = initialValue
  }
  return { count, inc, dec, reset }
}
