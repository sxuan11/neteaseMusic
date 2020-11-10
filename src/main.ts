import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'vant'


// @ts-ignore
const app = createApp(App) // 创建实例

app.use(Button)

app.use(store).use(router).mount('#app')


