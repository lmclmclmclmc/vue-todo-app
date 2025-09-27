const props = withDefaults(defineProps(), {
    initial: 10
});
const emit = defineEmits();
import { usePriceStore } from '../stores/price';
const store = usePriceStore();
store.price = props.initial;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    initial: 10
});
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "price-card" },
});
(__VLS_ctx.store.price);
// @ts-ignore
[store,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.store.increment) },
});
// @ts-ignore
[store,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.store.decrement) },
});
// @ts-ignore
[store,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.store.reset) },
});
// @ts-ignore
[store,];
(__VLS_ctx.store.double);
// @ts-ignore
[store,];
/** @type {__VLS_StyleScopedClasses['price-card']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        store: store,
    }),
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
