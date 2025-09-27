import { ref, reactive, computed, watch } from 'vue';
import PriceCard from '../components/PriceCard.vue';
import { useTodoStore } from '../stores/todo';
const num = ref(0);
const user = reactive({ name: '小明', age: 18 });
const nextAge = computed(() => user.age + num.value);
const store = useTodoStore();
watch(num, n => console.log(`num → ${n}`));
//watch(price, p => p > 20 && console.warn('[价格警告] 超过 20 元'))
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
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
/** @type {[typeof PriceCard, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(PriceCard, new PriceCard({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
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
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        PriceCard: PriceCard,
        num: num,
        user: user,
        nextAge: nextAge,
        store: store,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
