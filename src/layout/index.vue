<template>
    <div class="layout-page">
        <side-bar></side-bar>
        <main class="layout-container">
            <nav class="layout-header">导航栏</nav>
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import SideBar from './components/sideBar.vue'

defineComponent({
    name: 'LayoutPage',
})
</script>

<style lang="scss" scoped>
.layout-page {
    display: flex;
}
</style>
