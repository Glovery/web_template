<template>
    <aside class="side-bar-container">
        <div class="logo-container">
            <img :src="imageUrl" alt="logo" class="logo" />
        </div>
        <el-scrollbar wrap-class="scroller-wrapper">
            <el-menu
                :default-active="activeMenu"
                text-color="#fff"
                active-text-color="#f0cd10"
                background-color="transparent"
            >
                <side-bar-item
                    v-for="item in routes"
                    :key="item.path"
                    :router="item"
                    :base-path="item.path"
                ></side-bar-item>
            </el-menu>
        </el-scrollbar>
    </aside>
</template>

<script setup>
import { ref } from 'vue'
import logoImage from '@/assets/images/logo.png'
import { useRoute, useRouter } from 'vue-router'
import SideBarItem from './sideBarItem.vue'

const imageUrl = ref(logoImage)

const route = useRoute()
const { routes } = useRouter().options

const activeMenu = ref('')
const getActiveMenu = () => {
    const { path } = route
    activeMenu.value = path
}
getActiveMenu()
</script>

<style lang="scss" scoped>
.side-bar-container {
    width: 160px;
    height: 100vh;
    background: linear-gradient(137deg, #000000, #2f2f2f 97%);
    border-radius: 0 24px 24px 0;
    .logo-container {
        height: 120px;
        width: 100%;
        padding: 10px;
        overflow: hidden;
        box-sizing: border-box;
        line-height: 50px;
        text-align: center;
        .logo {
            width: 135px;
            vertical-align: middle;
        }
    }
    ::v-deep(.el-scrollbar) {
        height: calc(100% - 160px);
    }
}
</style>
