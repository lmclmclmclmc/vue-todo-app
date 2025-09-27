import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useTodoStore = defineStore('todo', () => {
    const todos = ref([{ text: '学习 Pinia 持久化', done: false }]);
    function addTodo(text) {
        if (text.trim())
            todos.value.push({ text, done: false });
    }
    function toggleTodo(todo) {
        todo.done = !todo.done;
    }
    return { todos, addTodo, toggleTodo };
}, {
    persist: true
});
