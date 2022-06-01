<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps({
    msg: String,
})
const { t } = useI18n()
console.log(t('login.title'))

const count = ref(0)
const title = ref('')
</script>

<template>
    <h1>{{ msg }}</h1>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <p v-t="'login.title'"></p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<style lang="scss" scoped>
a {
    color: $errorColor;
}
</style>
