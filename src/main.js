import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import router from "./Router/index.js"
import App from './App.vue'
const pinia = createPinia()
const app  = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
