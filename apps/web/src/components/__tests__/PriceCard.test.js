import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import PriceCard from '@/components/PriceCard.vue';
beforeEach(() => {
    setActivePinia(createPinia());
});
describe('PriceCard', () => {
    it('renders initial price', () => {
        const wrapper = mount(PriceCard, { props: { initial: 20 } });
        expect(wrapper.text()).toContain('price = 20');
    });
    it('emits change on increment', async () => {
        const wrapper = mount(PriceCard, { props: { initial: 10 } });
        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted('change')?.[0]).toEqual([11]);
    });
});
