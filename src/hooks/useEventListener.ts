import { onMounted, onUnmounted } from "vue";

export function useEventListener<K extends keyof WindowEventMap>(target: any, event: K, callback: (ev: WindowEventMap[K]) => any) {
  onMounted(() => {
    target.addEventListener(event, callback);
  });
  onUnmounted(() => {
    target.removeEventListener(event, callback);
  });
}