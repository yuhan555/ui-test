import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

import jquery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/style/bootstrap-datetimepicker.min.css'

window.jQuery = window.$ = jquery;

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')