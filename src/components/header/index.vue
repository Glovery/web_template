<template>
    <header class="flex-row-between">
        <div class="title-container flex">
            <h1 class="title">{{ props.title }}</h1>
            <el-icon class="search-icon">
                <search />
            </el-icon>
        </div>
        <ul class="tabs-container flex" @click="handleClickTab($event)">
            <li
                v-for="tab in tabsList"
                :key="tab.value"
                class="tab-item"
                :class="{ active: currentTab === tab.value }"
                :data-type="tab.value"
            >
                {{ `${tab.label}(${tab.num})` }}
            </li>
        </ul>
        <div class="tools-container">
            <el-icon class="plus-icon">
                <plus />
            </el-icon>
            <el-dropdown trigger="click" @command="handleCommand">
                <el-icon class="more-icon">
                    <more-filled />
                </el-icon>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="importFile">导入</el-dropdown-item>
                        <el-dropdown-item command="exportFile">导出</el-dropdown-item>
                        <slot name="menuItem"></slot>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </header>
</template>

<script setup>
import { defineComponent, defineEmits, watch, ref } from 'vue'
import { Search, MoreFilled, Plus } from '@element-plus/icons-vue'

defineComponent({
    name: 'GHeader',
})

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    showTabs: {
        type: Boolean,
        default: false,
    },
    tabsList: {
        type: Array,
        default: () => [],
    },
    activeTab: {
        type: String,
        default: () => '',
    },
})
const currentTab = ref('')
watch(
    () => props.activeTab,
    () => {
        currentTab.value = props.activeTab
    },
    {
        immediate: true,
    }
)
const emit = defineEmits(['import', 'export'])
const handleCommand = (type) => {
    if (type === 'importFile') {
        emit('import')
    } else {
        emit('export')
    }
}

const handleClickTab = ({ target }) => {
    const { type } = target.dataset
    currentTab.value = type
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 24px;
    font-weight: 600;
    line-height: 39px;
    margin-right: 24px;
}
.search-icon {
    font-size: 22px;
    width: 38px;
    height: 38px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #eaeaea;
    text-align: center;
    line-height: 38px;
    color: #888b8d;
    cursor: pointer;
}
.plus-icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-right: 25px;
    border: 1px solid transparent;
    border-radius: 50%;
    background: linear-gradient(#f8f1e4, #fdf7e7);
    box-shadow: 0 2px 20px 0 #f8f1e4;
    color: #000;
    font-weight: 600;
}
.more-icon {
    transform: rotate(90deg);
    cursor: pointer;
}
.tab-item {
    position: relative;
    padding: 8px 0px;
    margin: 0 20px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    color: #999;
    &:hover {
        color: #333;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: auto;
        right: 0;
        width: 0;
        height: 5px;
        border-radius: 5px;
        background: linear-gradient(to right, #f8c656, $themeColor);
        box-shadow: 0 1px 3px 0 $themeColor;
        transition: all 0.3s;
    }
    &:hover::after {
        width: 100%;
        left: 0;
        right: auto;
    }
    &.active::after {
        width: 100%;
    }
    &.active {
        color: #000;
        font-size: 16px;
        font-weight: 600;
    }
}
</style>
