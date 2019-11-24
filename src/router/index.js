import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './config'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        name: RouterConfig.home,
        component: Home
    },
    {
        path: '/about',
        name: RouterConfig.about,
        component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router