import { useRouter } from 'vue-router';
import PriceCard from '../components/PriceCard.vue';
const router = useRouter();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.router.push('/');
            // @ts-ignore
            [router,];
        } },
});
/** @type {[typeof PriceCard, typeof PriceCard, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(PriceCard, new PriceCard({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
