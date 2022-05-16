import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/error',
        name: 'Error',
        component: () => import('@/pages/error/index.vue'),
        hidden: true,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/index.vue'),
        hidden: true,
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home/index.vue'),
        meta: {
            title: '首页',
            affix: true,
        },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes,
})

export default router
