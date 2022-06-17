<template>
    <div class="layout-page">
        <side-bar></side-bar>
        <main class="layout-container">
            <nav class="layout-header flex-row-center">
                <ul class="tabs-list flex">
                    <li class="tabs-item flex-row-center">
                        <span class="tab-text">路由标签1</span>
                        <el-icon class="close-icon" color="#333" :size="12">
                            <Close />
                        </el-icon>
                    </li>
                    <li class="tabs-item">路由标签2</li>
                </ul>
                <div class="tools-container flex">
                    <el-icon :size="16" color="#666" class="avatar">
                        <User />
                    </el-icon>
                    <el-dropdown trigger="click" popper-class="dropdown-wrapper" @command="handleCommand">
                        <span class="right-menu">用户名称</span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </nav>
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import { Close, User } from '@element-plus/icons-vue'
import SideBar from './components/sideBar.vue'

defineComponent({
    name: 'LayoutPage',
})

const handleCommand = (type) => {
    console.log(type)
}
</script>

<style lang="scss" scoped>
.layout-page {
    display: flex;
}
.layout-container {
    padding: 16px 16px 0;
    box-sizing: border-box;
    background-color: #f2f2f2;
}
.layout-header {
    height: 48px;
    margin-bottom: 16px;
    background: linear-gradient(314deg, #f8f1e4 12%, #fff 53%, #fdf7e7 92%);
    box-shadow: 0 2px 20px 0 rgba(205, 228, 243, 0.34);
    padding: 0 24px;
    box-sizing: border-box;
    border-radius: 16px;

    .tabs-list {
        width: calc(100vw - 320px);
        .tabs-item {
            background-color: #fff;
            color: #666;
            height: 28px;
            line-height: 28px;
            min-width: 70px;
            font-size: 12px;
            cursor: pointer;
            border: 1px solid #f3f3f3;
            border-radius: 8px;
            margin-right: 8px;
            padding: 0 10px;
            box-sizing: border-box;
            &:hover {
                background-color: #fcb415;
                .tab-text {
                    color: #000;
                }
            }
            .close-icon {
                margin-left: 4px;
            }
            .tab-text {
                width: calc(100% - 17px);
                max-width: 56px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    .tools-container {
        width: 80px;
        .avatar {
            margin-right: 6px;
        }
        .right-menu {
            cursor: pointer;
            user-select: none;
            border-left: 1px solid #e7e7e7;
            padding-left: 9px;
            font-size: 12px;
        }
        .dropdown-wrapper {
        }
    }
}
</style>
