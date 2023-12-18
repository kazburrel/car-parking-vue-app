import "@/bootstrap.js";
import './assets/main.css'
import ValidationError from "@/components/ValidationError.vue";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("ValidationError", ValidationError);

app.mount('#app')
