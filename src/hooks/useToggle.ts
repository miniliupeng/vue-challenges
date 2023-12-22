import { ref } from 'vue'

export const useToggle = (defaultState: boolean) => {
  const state = ref(defaultState)
  const toggle = () => {
    state.value = !state.value
  }
  return [state, toggle] as const
}
