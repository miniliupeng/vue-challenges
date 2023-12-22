import { customRef, ref, watchEffect } from 'vue'

export function useLocalStorage(key: string, initialValue: any) {
  const value = ref(localStorage.getItem(key) || initialValue)
  watchEffect(() => {
    localStorage.setItem(key, value.value)
  })
  return value
}

// export function useLocalStorage(key: string, initialValue: any) {
//   return customRef((track, trigger) => {
//     return {
//       get() {
//         track()
//         return localStorage.getItem(key) || initialValue
//       },
//       set(newValue) {
//         localStorage.setItem(key, newValue)
//         trigger()
//       }
//     }
//   })
// }
