import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button , Form , Field } from 'vant'


// @ts-ignore
const app = createApp(App) // 创建实例

app.use(Button).use(Form).use(Field)

app.use(store).use(router).mount('#app')


