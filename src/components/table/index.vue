<template>
    <el-table :data="tableData" size="small" :header-cell-style="renderHeaderStyle">
        <template v-for="config in tableConfig" :key="config.id">
            <el-table-column :label="config.label" :prop="config.columnKey" :width="config.width" align="center">
                <template v-if="config.isFormat" #default="{ row }">
                    <span v-if="config.type === 'text'">{{
                        config.formatFunction(row[config.columnKey]) || '--'
                    }}</span>
                    <div v-else-if="config.type === 'button'" class="flex-row-center">
                        <el-button size="small" type="primary">编辑</el-button>
                        <el-button size="small" type="danger">删除</el-button>
                    </div>
                </template>
            </el-table-column>
        </template>
    </el-table>
</template>

<script setup>
import { ref, defineComponent } from 'vue'

defineComponent({
    name: 'GTable',
})
const props = defineProps({
    tableData: {
        type: Array,
        required: true,
    },
    tableConfig: {
        type: Array,
        required: true,
    },
})

const renderHeaderStyle = () => ({
    backgroundColor: '#fcb4151a',
    color: '#333',
})
</script>
