
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from "./router";

const app = createApp(App)
app.use(router)
app.mount('#app')
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
