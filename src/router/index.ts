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
    },
    {
        path: '/raw',
        name: 'Raw',
        component: () => import('../views/raw.vue'),
        meta: {
            title: 'Raw'
        }
    }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes
})