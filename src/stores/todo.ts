import { defineStore } from 'pinia'
import { ref } from 'vue'
import { http } from '@/utils/http'

export interface TodoItem {
  id: string        // ✅ 只保留 string，与后端一致
  text: string
  done: boolean
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<TodoItem[]>([])
  const isLoading = ref(false)
  const errorMsg = ref('')

  async function loadTodos() {
    isLoading.value = true
    errorMsg.value = ''
    try {
      const { data } = await http.get<TodoItem[]>('/todos')
      todos.value = data
    } catch (e: unknown) {
  errorMsg.value = (e as Error).message || '加载失败'
    } finally {
      isLoading.value = false
    }
  }

  async function addTodo(text: string) {
    if (!text.trim()) return
    const { data } = await http.post<TodoItem>('/todos', { text, done: false })
    todos.value.push(data)
  }

  async function toggleTodo(id: string) {
    const t = todos.value.find(t => t.id === id)!
    const { data } = await http.patch<TodoItem>(`/todos/${id}`, { done: !t.done })
    t.done = data.done
  }

  async function removeTodo(id: string) {
    await http.delete(`/todos/${id}`)
    todos.value = todos.value.filter(t => t.id !== id)
  }

  return { todos, isLoading, errorMsg, loadTodos, addTodo, toggleTodo, removeTodo }
})
