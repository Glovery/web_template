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
        component: () => import('@/layout/index.vue'),
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/pages/home/index.vue'),
                meta: {
                    title: '首页',
                    affix: true,
                },
            },
        ],
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('@/layout/index.vue'),
        meta: {
            title: '路由测试',
        },
        children: [
            {
                path: 'test1',
                component: () => import('@/pages/home/index.vue'),
                meta: {
                    title: 'test1',
                    affix: true,
                },
            },
            {
                path: 'test2',
                component: () => import('@/pages/home/index.vue'),
                meta: {
                    title: 'test2',
                    affix: true,
                },
            },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes,
})

export default router
