import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePriceStore = defineStore('price', () => {
  // state
  const price = ref(10)

  // getters
  const double = computed(() => price.value * 2)

  // actions
  function increment() { price.value++ }
  function decrement() { price.value-- }
  function reset(){price.value=10}

  return { price, double, increment, decrement, reset }
}, {
  persist: true          // ← 一键持久化
})
