<template>
    <a v-if="isExternal(props.to)" :href="props.to">
        <slot />
    </a>
    <div v-else @click="push">
        <slot />
    </div>
</template>

<script setup>
import { isExternal } from '@/utils/validate'
import { useRouter } from 'vue-router'

const props = defineProps({
    to: {
        type: String,
        required: true,
    },
})
const router = useRouter()
const push = () => {
    router.push(props.to)
}
</script>
