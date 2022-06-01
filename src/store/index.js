import { defineStore } from 'pinia'

const userStore = defineStore('user', {
    state() {
        return {
            username: '张三',
            role: 'admin',
            userInfo: {},
        }
    },
    getters: {},
    actions: {
        login({ username, password }) {
            const code = 200
            const data = 'token'
            console.log(username, password)
            if (code === 200) {
                this.getUserInfo()
            }
        },
        getUserInfo() {
            console.log('获取用户信息')
            this.userInfo = {
                username: 'admin',
                role: 'admin',
            }
        },
    },
})

export default userStore
