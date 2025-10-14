import { ref } from 'vue';
const newTodo = ref('');
const todos = ref([
    { text: '学习 Vue3', done: false },
]);
function addTodo() {
    if (newTodo.value.trim()) {
        todos.value.push({ text: newTodo.value, done: false });
        newTodo.value = '';
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)({});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
__VLS_asFunctionalElement(__VLS_elements.input)({
    ...{ onKeyup: (__VLS_ctx.addTodo) },
    placeholder: "输入任务...",
});
(__VLS_ctx.newTodo);
// @ts-ignore
[addTodo, newTodo,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.addTodo) },
});
// @ts-ignore
[addTodo,];
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({});
for (const [todo, index] of __VLS_getVForSourceType((__VLS_ctx.todos))) {
    // @ts-ignore
    [todos,];
    __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
        key: (index),
    });
    __VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({});
    __VLS_asFunctionalElement(__VLS_elements.input)({
        type: "checkbox",
    });
    (todo.done);
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: ({ done: todo.done }) },
    });
    (todo.text);
}
/** @type {__VLS_StyleScopedClasses['done']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
