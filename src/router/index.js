import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: 'login',
        hidden: true,
        meta: {
            name: '主页'
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        hidden: true,
        meta: {
            name: '登录页'
        }
    },
    {
        path: '/console',
        name: 'Console',
        hidden: false,
        redirect: 'Index', //重定向路由
        component: Layout,
        meta: {
            name: '控制台',
            icon: 'console'
        },
        children: [{
            path: '/index',
            name: 'Index',
            component: () =>
                import ('../views/Console/index.vue'),
            meta: {
                name: '首页'
            }
        }]

    },
    {
        path: '/info',
        name: 'Info',
        hidden: false,
        component: Layout,
        meta: {
            name: '信息管理',
            icon: 'info'
        },
        children: [{
            path: '/infoIndex',
            name: 'InfoIndex',
            component: () =>
                import ('../views/Info/index.vue'),
            meta: {
                name: '信息列表'
            }
        }, {
            path: '/infoCategory',
            name: 'InfoCategory',
            component: () =>
                import ('../views/Info/category.vue'),
            meta: {
                name: '信息分类'
            }
        }]

    },
    {
        path: '/user',
        name: 'User',
        hidden: false,
        component: Layout,
        meta: {
            name: '用户管理',
            icon: 'user'
        },
        children: [{
            path: '/userIndex',
            name: 'UserIndex',
            component: () =>
                import ('../views/User/index.vue'),
            meta: {
                name: '用户列表'
            }
        }]

    }
]

const router = new VueRouter({
    routes
})

export default router