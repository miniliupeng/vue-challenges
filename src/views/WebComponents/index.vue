<script setup lang="tsx">
import { onMounted, defineCustomElement } from 'vue'

/**
 * 实现以下代码创建一个自定义元素.
 * 确保页面输出 "Hello Vue.js".
 */
const VueJs = defineCustomElement({
  props: ['message'],
  render() {
    return <>{this.message}</>
  }
})
customElements.define('vue-js', VueJs)
onMounted(() => {
  document.getElementById('app')!.innerHTML = '<vue-js message="Hello Vue.js"></vue-js>'
})
</script>

<template>
  <div></div>
</template>
