import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
createApp(App).use(router).mount('#app')