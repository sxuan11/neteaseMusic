import { createApp } from 'vue'
import './assets/css/index.css';
import './assets/icon/iconfont.css';
import App from './App.vue'
import router from "./router";
import store from './store/index';
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

const app = createApp(App)
Sentry.init({
  app,
  dsn: "https://0a09851c30e940d784bb2d369aac727b@o1162973.ingest.sentry.io/6250660",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});


app.use(router).use(store).mount('#app')
