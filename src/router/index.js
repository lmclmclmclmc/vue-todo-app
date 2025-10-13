import { createRouter, createWebHistory } from 'vue-router';
const HomeView = () => import('@/views/ReactiveDemo.vue');
const AboutView = () => import('@/views/AboutView.vue');
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: AboutView,
        },
        { path: '/demo', component: () => import('@/views/ReactiveDemo.vue') },
    ],
});
export default router;
