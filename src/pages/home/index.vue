<template>
    <div class="common-page">
        <g-header :active-tab="activeTab" :title="headerTitle" show-tabs :tabs-list="tabsList"></g-header>
        <main class="common-page-content">
            <g-table :table-config="tableConfig" :table-data="tableData"></g-table>
            <!-- <g-card></g-card> -->
        </main>
        <footer>
            <g-pagination @current="handleCurrentChange" @size-change="handleSizeChange"></g-pagination>
        </footer>
    </div>
</template>

<script setup>
import { reactive, defineComponent, ref } from 'vue'
import GHeader from '@/components/header/index.vue'
import GTable from '@/components/table/index.vue'
// import GCard from '@/components/card/index.vue'
import GPagination from '@/components/pagination/index.vue'

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

const formatSex = (sex) => {
    return sex ? '男' : '女'
}

const tableConfig = ref([
    {
        type: 'text',
        columnKey: 'id',
        label: 'ID',
        width: 80,
    },
    {
        type: 'text',
        columnKey: 'name',
        label: '姓名',
        width: 120,
    },
    {
        type: 'text',
        columnKey: 'age',
        label: '年龄',
        width: 80,
    },
    {
        type: 'text',
        columnKey: 'sex',
        label: '性别',
        isFormat: true,
        formatFunction: formatSex,
    },
    {
        type: 'button',
        columnKey: '',
        label: '操作',
        isFormat: true,
    },
])
const tableData = ref([
    {
        id: 1,
        name: '张三',
        age: 5,
        sex: 1,
    },
    {
        id: 2,
        name: '王五',
        age: 18,
        sex: 0,
    },
])

const handleCurrentChange = (current) => {
    console.log(current)
}

const handleSizeChange = (size) => {
    console.log(size)
}
</script>
