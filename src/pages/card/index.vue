<template>
    <div class="common-page">
        <g-header :title="headerTitle"></g-header>
        <main class="common-page-content">
            <g-card></g-card>
        </main>
        <footer>
            <g-pagination @current="handleCurrentChange" @size-change="handleSizeChange"></g-pagination>
        </footer>
    </div>
</template>

<script setup>
import GCard from '@/components/card/index.vue'
import GHeader from '@/components/header/index.vue'
import GPagination from '@/components/pagination/index.vue'
import { ref } from 'vue'

const headerTitle = ref('测试')

const handleCurrentChange = (current) => {
    console.log(current)
}

const handleSizeChange = (size) => {
    console.log(size)
}
</script>
