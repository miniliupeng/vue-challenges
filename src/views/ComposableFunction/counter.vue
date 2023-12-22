<script setup lang="ts">
import { useCounter } from '@/hooks/useCounter'

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })
</script>
