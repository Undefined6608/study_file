import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/home.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../pages/Login.vue')
        }
    ]
});

export default router;