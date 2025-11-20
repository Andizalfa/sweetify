import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

createApp(App).mount('#app')

createApp(App).use(router).mount('#app')