<template>
    <div class="login-page flex-col-center">
        <h1 class="login-title">后台管理平台</h1>
        <el-form :form="loginForm" label-width="80px">
            <el-form-item label="账号" prop="username" class="login-form-item">
                <el-input v-model.trim="loginForm.username" class="form-input" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" class="login-form-item">
                <el-input
                    v-model.trim="loginForm.password"
                    placeholder="请输入密码"
                    show-password
                    class="form-input"
                ></el-input>
            </el-form-item>
            <footer class="footer">
                <el-button class="login-button" @click="handleLogin">登录</el-button>
            </footer>
        </el-form>
    </div>
</template>
<script setup>
import { defineComponent, reactive } from 'vue'

defineComponent({
    name: 'LoginPage',
})
const loginForm = reactive({
    username: '',
    password: '',
})
const handleLogin = () => {
    console.log('处理登录方法')
}
</script>
<style lang="scss" scoped>
.login-page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #ededed;

    .login-title {
        text-align: center;
    }
    .login-form-item {
        margin-top: $marginTop;
    }
    .form-input {
        width: $inputWidth;
    }
    .footer {
        text-align: center;
        .login-button {
            margin-left: 60px;
            margin-top: $marginTop;
        }
    }
}
</style>
