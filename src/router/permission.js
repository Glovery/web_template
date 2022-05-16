import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './index'

const whiteList = ['/login', '/error']

router.beforeEach((to, from, next) => {
    Nprogress.start()
    const hasToken = 'xxxx'
    if (!whiteList.includes(to.path) && hasToken) {
        next()
    } else if (whiteList.includes(to.path)) {
        next()
    } else {
        next('/login')
    }
})
