import { createApp } from 'vue'
import './assets/css/index.css';
import './assets/icon/iconfont.css';
import App from './App.vue'
import router from "./router";
import store from './store/index';

createApp(App).use(router).use(store).mount('#app')
