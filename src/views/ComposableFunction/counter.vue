<script setup lang="ts">
import { useCounter } from '@/hooks/useCounter'

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })
</script>
<template>
   {{count}}
   <button @click="inc">+</button>
   <button @click="dec">-</button>
   <button @click="reset">reset</button>
</template>
