import { defineStore } from 'pinia'

const userInfo = defineStore('user-store', {
    state() {
        return {
            username: '张三',
            role: 'admin',
        }
    },
    getters: {},
    actions: {},
})

export default userInfo
