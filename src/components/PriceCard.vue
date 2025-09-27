
<script setup lang="ts">
import { watch } from 'vue'
interface Props {
  initial?: number
}
const props = withDefaults(defineProps<Props>(), {
  initial: 10
})

interface Emits {
  change: [val: number]
}
const emit = defineEmits<Emits>()
import { usePriceStore } from '../stores/price'

const store = usePriceStore()
store.price = props.initial
watch(() => store.price, (newVal) => emit('change', newVal))
</script>

<template>
  <div class="price-card">
    price = {{ store.price }}
    <button @click="store.increment">+</button>
    <button @click="store.decrement">-</button>
    <button @click="store.reset">重置</button>
    nextPrice = {{ store.double }}
  </div>
</template>

<style scoped>
.price-card {
  margin: 8px 0;
  padding: 8px;
  border: 1px solid #ccc;
  display: inline-block;
}
</style>
