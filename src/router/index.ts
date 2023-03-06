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
    },
    {
        path: '/json',
        name: 'JSON',
        component: () => import('../views/json.vue'),
        meta: {
            title: '导入 JSON'
        }
    },
    {
        path: '/glob-sync',
        name: 'GlobSync',
        component: () => import('../views/glob-sync.vue'),
        meta: {
            title: 'Glob （同步）导入'
        }
    },
    {
        path: '/glob-async',
        name: 'GlobAsync',
        component: () => import('../views/glob-async.vue'),
        meta: {
            title: 'Glob （异步）导入'
        }
    }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes
})