import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './locales'
import 'element-plus/es/components/message/style/css'

const store = createPinia()
createApp(App).use(router).use(store).use(i18n).mount('#app')
