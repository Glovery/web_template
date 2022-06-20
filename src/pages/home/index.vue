<template>
    <div class="common-page">
        <g-header :active-tab="activeTab" :title="headerTitle" show-tabs :tabs-list="tabsList"></g-header>
        <main>主体内容区域</main>
        <footer>底部内容</footer>
    </div>
</template>

<script setup>
import { reactive, defineComponent, ref } from 'vue'
import GHeader from '@/components/header/index.vue'

defineComponent({
    name: 'HomePage',
})

const headerTitle = ref('首页')
const activeTab = ref('all')
const tabsList = ref([
    {
        label: '全部',
        value: 'all',
        num: 24,
    },
    {
        label: '成品',
        value: 'complete',
        num: 12,
    },
    {
        label: '半成品',
        value: 'half',
        num: 6,
    },
    {
        label: '原材料',
        value: 'material',
        num: 6,
    },
])
</script>
