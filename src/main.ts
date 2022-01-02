import { createApp } from 'vue'
import './assets/css/index.css';
import './assets/icon/iconfont.css';
import App from './App.vue'
import router from "./router";

createApp(App).use(router).mount('#app')
