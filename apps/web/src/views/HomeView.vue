<script setup lang="ts">
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref<{ text: string; done: boolean }[]>([
  { text: '学习 Vue3', done: false },
])

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value, done: false })
    newTodo.value = ''
  }
}


</script>

<template>
  <main>
    <h1>我的待办事项</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="输入任务..." />
    <button @click="addTodo">添加</button>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <label>
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </label>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
