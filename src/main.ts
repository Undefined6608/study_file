import { createApp } from 'vue'
import './assets/css/base.less'
import App from './App.vue'
import Router from './router/index';
import Store from './store/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// @ts-ignore
const app = createApp(App)
app.use(Router)
app.use(Store)
app.use(ElementPlus)
app.mount('#app')
