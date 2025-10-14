<script setup lang="ts">
import { useRouter } from 'vue-router'
import PriceCard from '../components/PriceCard.vue'
const router = useRouter()
</script>

<template>
  <div style="padding: 20px;">
    <h1>关于</h1>
    <p>这是我在自学 Vue3 过程中做的小项目，包含 Todo、响应式演示和组件通信练习。</p>
    <button @click="router.push('/')">返回首页</button>
  </div>
  <price-card></price-card>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
