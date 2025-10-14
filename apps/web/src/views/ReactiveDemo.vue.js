import { ref, reactive, computed, watch } from 'vue';
import { useTodoStore } from '../stores/todo';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
const PriceCard = defineAsyncComponent(() => import('@/components/PriceCard.vue'));
const num = ref(0);
const user = reactive({ name: '小明', age: 18 });
const nextAge = computed(() => user.age + num.value);
const store = useTodoStore();
onMounted(async () => {
    await store.loadTodos();
});
onMounted(async () => {
    console.log('store keys:', Object.keys(useTodoStore()));
    await useTodoStore().loadTodos();
});
console.log('>>> todo.ts 被加载', new Date().toLocaleTimeString());
watch(num, n => console.log(`num → ${n}`));
//watch(price, p => p > 20 && console.warn('[价格警告] 超过 20 元'))
onMounted(() => {
    console.log('store', store); // 看有没有 isLoading/errorMsg
    console.log('isLoading', store.isLoading);
    console.log('errorMsg', store.errorMsg);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.store.isLoading) {
    // @ts-ignore
    [store,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
}
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
(__VLS_ctx.num);
// @ts-ignore
[num,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.num++;
            // @ts-ignore
            [num,];
        } },
});
const __VLS_0 = {}.PriceCard;
/** @type {[typeof __VLS_components.PriceCard, ]} */ ;
// @ts-ignore
PriceCard;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
__VLS_asFunctionalElement(__VLS_elements.input)({});
(__VLS_ctx.user.name);
// @ts-ignore
[user,];
__VLS_asFunctionalElement(__VLS_elements.input)({
    type: "number",
});
(__VLS_ctx.user.age);
// @ts-ignore
[user,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
(__VLS_ctx.user.name);
(__VLS_ctx.nextAge);
// @ts-ignore
[user, nextAge,];
__VLS_asFunctionalElement(__VLS_elements.hr)({});
if (__VLS_ctx.store.errorMsg) {
    // @ts-ignore
    [store,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ style: {} },
    });
    (__VLS_ctx.store.errorMsg);
    // @ts-ignore
    [store,];
}
if (__VLS_ctx.store.errorMsg) {
    // @ts-ignore
    [store,];
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (__VLS_ctx.store.loadTodos) },
    });
    // @ts-ignore
    [store,];
}
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({});
__VLS_asFunctionalElement(__VLS_elements.input)({
    ...{ onKeyup: (...[$event]) => {
            __VLS_ctx.store.addTodo($event.target.value);
            ($event.target.value = '');
            // @ts-ignore
            [store,];
        } },
    placeholder: "输入新事项回车添加",
});
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({});
for (const [item, idx] of __VLS_getVForSourceType((__VLS_ctx.store.todos))) {
    // @ts-ignore
    [store,];
    __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
        key: (idx),
    });
    __VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({});
    __VLS_asFunctionalElement(__VLS_elements.input)({
        type: "checkbox",
    });
    (item.done);
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: ({ done: item.done }) },
    });
    (item.text);
}
/** @type {__VLS_StyleScopedClasses['done']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
