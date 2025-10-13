<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import PriceCard from '../components/PriceCard.vue'
import { useTodoStore }from '../stores/todo'
import { onMounted } from 'vue'
const num = ref(0)
const user = reactive({ name: '小明', age: 18 })
const nextAge = computed(() => user.age + num.value)
const store = useTodoStore()
onMounted(async () => {
  await store.loadTodos()
})

watch(num, n => console.log(`num → ${n}`))
//watch(price, p => p > 20 && console.warn('[价格警告] 超过 20 元'))


</script>

<template>
  <h2>响应式演示</h2>

  <p>
    num = {{ num }}
    <button @click="num++">+</button>
  </p>

<PriceCard

/>

  <p>
    姓名：<input v-model="user.name" />
    年龄：<input type="number" v-model="user.age" />
  </p>

  <p>明年 {{ user.name }} 就 {{ nextAge }} 岁了。</p>
  <hr />
<h3>Todo 列表（Pinia + 持久化）</h3>
<input
  placeholder="输入新事项回车添加"
  @keyup.enter="store.addTodo(($event.target as HTMLInputElement).value); (($event.target as HTMLInputElement).value = '')"
/>
<ul>
  <li v-for="(item, idx) in store.todos" :key="idx">
    <label>
      <input type="checkbox" v-model="item.done" />
      <span :class="{ done: item.done }">{{ item.text }}</span>
    </label>
  </li>
</ul>
</template>
<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
