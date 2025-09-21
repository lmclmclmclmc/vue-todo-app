import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface TodoItem {
  text: string
  done: boolean
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<TodoItem[]>([{ text: '学习 Pinia 持久化', done: false }])

  function addTodo(text: string) {
    if (text.trim()) todos.value.push({ text, done: false })
  }
  function toggleTodo(todo: TodoItem) {
    todo.done = !todo.done
  }

  return { todos, addTodo, toggleTodo }
}, {
  persist: true
})
