<script setup lang="ts">
import { usePriceStore } from '@/stores/price'
const store = usePriceStore()
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
