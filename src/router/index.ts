import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home.vue'),
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../views/test.vue'),
        meta: {
            title: 'Test'
        }
    }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes
})