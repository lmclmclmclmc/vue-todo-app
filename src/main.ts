import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

// 1. 创建 pinia 实例并安装插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 2. 创建应用实例
const app = createApp(App)

// 3. 依次挂载插件（注意只 use 一次 pinia）
app.use(pinia)
app.use(router)

// 4. 一次性挂载到 DOM
app.mount('#app')
