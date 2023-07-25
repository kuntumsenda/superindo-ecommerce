import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from '@kyvg/vue3-notification'
import './assets/css/app.css'
import filter from '@/filter/Filter'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Notifications)
app.config.globalProperties.$filters = filter
app.mount('#app')
