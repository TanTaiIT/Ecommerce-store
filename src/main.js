import { createApp } from 'vue'
import './style.css'
import './assets/css/tailwind.css'
import './assets/css/global.css'
import App from './App.vue'
import router from './router/index'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LazyImage from './components/common/LazyImage.vue'


const app = createApp(App)
app.use(router)
app.component('LazyImage', LazyImage)
app.component('DefaultLayout', DefaultLayout)
app.mount('#app')
