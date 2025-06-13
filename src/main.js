import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import NewsPage from "@/pages/NewsPage.vue";

const routes = [
    // 默认跳转都⾸⻚
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomePage},
    // 命名路由
    {path: '/about', component: AboutPage, name: 'about'},
    {path: '/news', component: NewsPage},
]

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
