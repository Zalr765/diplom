import './assets/main.css'
import { createRouter, createWebHistory } from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'

import Home from './pages/Home.vue'
import Man from './pages/Man.vue'
import Woman from './pages/Woman.vue'
import Poizon from './pages/Poizon.vue'
import Pay from './pages/Pay.vue'
import News from './pages/News.vue';

const routes = [ 
    { path: '/', name: 'main', component: Home },
    { path: '/man', name: 'man', component: Man },
    { path: '/woman', name: 'woman', component: Woman },
    { path: '/poizon', name: 'poizon', component: Poizon },
    { path: '/pay', name: 'pay', component: Pay },
    { path: '/news', name: 'news', component: News }
]
const router = createRouter({
    history: createWebHistory(),
    routes
}) 

const app = createApp(App);
app.use(router);
app.mount('#app');