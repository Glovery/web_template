<template>
    <div class="pagination-container flex-row-center">
        <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :layout="props.layout"
            :total="props.total"
            background
            :page-sizes="props.pageSizes"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
        ></el-pagination>
    </div>
</template>

<script setup>
import { defineComponent, ref, watch } from 'vue'

defineComponent({
    name: 'GPagination',
})
const props = defineProps({
    current: {
        type: Number,
        default: 1,
    },
    size: {
        type: Number,
        default: 60,
    },
    pageSizes: {
        type: Array,
        default: () => [30, 60, 90, 180],
    },
    total: {
        type: Number,
        default: 0,
    },
    layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper',
    },
})

const pageSize = ref(60)
const currentPage = ref(1)

watch(
    () => [props.current, props.size],
    ([currentRef, sizeRef]) => {
        currentPage.value = currentRef
        pageSize.value = sizeRef
    }
)

const emits = defineEmits(['sizeChange', 'current'])

const handleSizeChange = (size) => {
    emits('sizeChange', size)
}

const handleCurrentChange = (current) => {
    emits('current', current)
}
</script>
