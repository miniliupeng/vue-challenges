import { reactive, toRefs } from 'vue'
import { useEventListener } from './useEventListener'

export function useMouse() {
  const position = reactive({ x: 0, y: 0 })
  // 鼠标位置
  useEventListener(window, 'mousemove', (e: MouseEvent) => {
    position.x = e.x
    position.y = e.y
  })
  return toRefs(position)
}
