import { defineStore } from 'pinia';
import { ref } from 'vue';
import { http } from '@/utils/http';
export const useTodoStore = defineStore('todo', () => {
    const todos = ref([]);
    const isLoading = ref(false);
    const errorMsg = ref('');
    async function loadTodos() {
        isLoading.value = true;
        errorMsg.value = '';
        try {
            const { data } = await http.get('/todos');
            todos.value = data;
        }
        catch (e) {
            errorMsg.value = e.message || '加载失败';
        }
        finally {
            isLoading.value = false;
        }
    }
    async function addTodo(text) {
        if (!text.trim())
            return;
        const { data } = await http.post('/todos', { text, done: false });
        todos.value.push(data);
    }
    async function toggleTodo(id) {
        const t = todos.value.find(t => t.id === id);
        const { data } = await http.patch(`/todos/${id}`, { done: !t.done });
        t.done = data.done;
    }
    async function removeTodo(id) {
        await http.delete(`/todos/${id}`);
        todos.value = todos.value.filter(t => t.id !== id);
    }
    return { todos, isLoading, errorMsg, loadTodos, addTodo, toggleTodo, removeTodo };
});
