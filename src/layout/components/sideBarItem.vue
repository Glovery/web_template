<template>
    <div v-if="!props.router.hidden">
        <template
            v-if="
                hasOneShowingChild(props.router.children, props.router) &&
                (!onlyOneChild.children || onlyOneChild.noShowingChild)
            "
        >
            <side-bar-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)">
                    <template #title>
                        <span class="subtitle">{{ onlyOneChild.meta.title }}</span>
                    </template>
                </el-menu-item>
            </side-bar-link>
        </template>
        <el-sub-menu v-else :index="resolvePath(props.router.path)">
            <template #title>
                <span class="title">{{ props.router?.meta.title }}</span>
            </template>
            <side-bar-item
                v-for="child in props.router?.children"
                :key="child.path"
                :base-path="resolvePath(child.path)"
                :router="child"
            />
        </el-sub-menu>
    </div>
</template>
<script setup>
import { defineProps, ref } from 'vue'
import path from 'path-browserify'
import { isExternal } from '@/utils/validate'
import sideBarLink from './sideBarLink.vue'

const props = defineProps({
    router: {
        type: Object,
        required: true,
    },
    basePath: {
        type: String,
        required: true,
    },
})

const onlyOneChild = ref(null)
const hasOneShowingChild = (children, parent) => {
    let showingChildren = []
    if (children) {
        showingChildren = children.filter((child) => {
            if (child.hidden) return false
            onlyOneChild.value = child
            return true
        })
    }
    if (showingChildren.length === 1) return true
    if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: '', noShowingChild: true }
        return true
    }
    return false
}

const resolvePath = (routePath) => {
    if (isExternal(routePath)) return routePath
    if (isExternal(props.basePath)) return props.basePath
    return path.resolve(props.basePath, routePath)
}
</script>

<style lang="scss" scoped>
.title {
    font-weight: 700;
}
.el-menu-item {
    position: relative;
    min-width: 50px;
    background-color: transparent;
    &:hover {
        background-color: rgb(204, 204, 204, 0.2);
    }
    &.is-active {
        background: linear-gradient(to right, transparent, rgba(252, 180, 21, 0.3));
        .subtitle {
            color: #fcb415;
        }
        &::after {
            position: absolute;
            right: 0px;
            top: 1px;
            content: '';
            width: 7px;
            height: 95%;
            background: #f9bc35;
            border-radius: 3px;
        }
    }
}
</style>
