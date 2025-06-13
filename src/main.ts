import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import NewsPage from "@/pages/NewsPage.vue";

const routes: RouteRecordRaw[] = [
    // 默认跳转都⾸⻚
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomePage},
    // 命名路由
    {path: '/about', component: AboutPage, name: 'about'},
    {path: '/news', component: NewsPage},
]

const router = createRouter({
    // 访问路径：URL不带#，斜杠链接，接近传统⽹站。缺点：容易产⽣404错误。
    // history: createWebHistory(),

    // 访问路径：URL带有#。缺点：对SEO不太友好。⽐较适合内部系统。
    history: createWebHashHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
