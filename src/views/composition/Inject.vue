
<script setup lang="ts">
import { inject } from 'vue';

// 添加代码,使`count`值注入子组件
const count = inject('count')
</script>

<template>
  {{ count }}
</template>
