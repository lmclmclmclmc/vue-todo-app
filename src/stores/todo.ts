// stores/todo.ts
import { defineStore } from 'pinia'
import axios from 'axios'

import {ref} from 'vue'
const api = 'https://mock.mengxuegu.com/todos'
export interface TodoItem {
  id?: string | number
  text: string
  done: boolean
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<TodoItem[]>([])

  async function loadTodos() {
    const { data } = await axios.get<TodoItem[]>(api)
    todos.value = data
  }

  async function addTodo(text: string) {
    if (!text.trim()) return
    const { data } = await axios.post<TodoItem>(api, { text, done: false })
    todos.value.push(data)
  }

  return { todos, loadTodos, addTodo }
})
