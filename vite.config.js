import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router', 'vue-i18n'],
            eslintrc: {
                enabled: true,
            },
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: { components: './src/components', '@': './src', store: './src/store' },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import '@/styles/index.scss';`,
            },
        },
    },
})
