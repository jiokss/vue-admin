import router from './index.js';

import store from '../store/index.js'
import { getToken, removeToken, removeUsername } from '@/utils/app.js';

const whiteRouter = ['/login']; //路由白名单

/**
 * 路由守卫
 */
router.beforeEach((to, from, next) => {
    // to 跳转的当前路由
    // from 从哪里跳转来  上个路由

    if (getToken()) {
        console.log(to.path)
        if (to.path === '/login') {
            //清除cookie值
            removeToken();
            removeUsername();

            //不是vue不能用this.$store拿到,只能通过import引入
            //清除store的state值
            store.commit('login/REMOVE_TOKEN')
            store.commit('login/REMOVE_USERNAME')

            next();
        } else {
            next();
        }

        console.log("存在");
        //跳转
    } else {
        //判断跳转的路由是不是在白名单中
        if (whiteRouter.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/login');
        }

        console.log("不存在")
    }




})