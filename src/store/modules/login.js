import { Login } from '@/api/login.js';
import { setToken, setUserName, getUserName, removeToken, removeUsername } from '../../utils/app.js';
const state = { //初始属性,类似data
    isCollapse: JSON.parse(localStorage.getItem("isCollapse")) || false,
    count: 10,
    to_ken: '',
    username: getUserName() || '',
}

const getters = { //类似于computed 计算属性,对数据进行加工
    // count: function(state) {
    //     return state.count + 10;
    // }
}
const mutations = { //对初始属性进行修改     //同步,没有回调处理事情
    SET_COUNT(state, value) { //通过调用方法的方式修改初始值,第一个参必传   this.$store.commit
        state.count = value
        console.log(state.count)
    },

    SET_COLLAPSE(state) {
        state.isCollapse = !state.isCollapse
        console.log(state.isCollapse)
        localStorage.setItem("isCollapse", JSON.stringify(state.isCollapse))
    },

    SET_TOKEN(state, value) {
        state.to_ken = value
    },
    SET_USERNAME(state, value) {
        state.username = value
    },
    REMOVE_TOKEN(state) {
        console.log("成")
        state.to_ken = ''
    },
    REMOVE_USERNAME(state) {
        console.log("共")
        state.username = ''
    },

}
const actions = { //同步和mutations一样,也可做一部请求  fn(content)   content->指的整个store,
    //异步,可以回调处理事情
    setCount(content, value) { //  调用方式  this.$store.dispatch  获取
        // content.commit  指上面的mutations
        // content.state   指上面的state
        // content.getters 指上面的getters
    },
    //登录接口
    setLogin(content, data) {
        return new Promise((resolve, reject) => {
            //接口
            Login(data)
                .then(res => {

                    // content.commit('SET_TOKEN', data.token);
                    // content.commit('SET_USERNAME', data.username);
                    // setToken(data.token)
                    // setUserName(data.token)
                    resolve(res)
                })
                .catch(err => {
                    console
                    content.commit('SET_TOKEN', 'ssssdddddd');
                    content.commit('SET_USERNAME', 'jioks');
                    setToken('ssssdddddd')
                    setUserName('jioks')
                        // console.log("失败")
                    reject(err)
                })
        })
    },
    //退出登录接口
    exit({ commit }) {
        return new Promise((resolve, reject) => {
            removeToken();
            removeUsername();
            commit('REMOVE_TOKEN');
            commit('REMOVE_USERNAME');
            resolve();
        })

    }
}

// const login = {
//     state: { //初始属性,类似data
//         isCollapse: JSON.parse(localStorage.getItem("isCollapse")) || false,
//         count: 10,
//     },
//     getters: { //类似于computed 计算属性,对数据进行加工
//         // count: function(state) {
//         //     return state.count + 10;
//         // }
//     },
//     mutations: { //对初始属性进行修改     //同步,没有回调处理事情
//         SET_COUNT(state, value) { //通过调用方法的方式修改初始值,第一个参必传   this.$store.commit
//             state.count = value
//             console.log(state.count)
//         },

//         SET_COLLAPSE(state) {
//             state.isCollapse = !state.isCollapse
//             console.log(state.isCollapse)
//             localStorage.setItem("isCollapse", JSON.stringify(state.isCollapse))
//         },

//     },
//     actions: { //同步和mutations一样,也可做一部请求  fn(content)   content->指的整个store,
//         //异步,可以回调处理事情
//         setCount(content, value) { //  调用方式  this.$store.dispatch  获取
//             // content.commit  指上面的mutations
//             // content.state   指上面的state
//             // content.getters 指上面的getters
//         },
//         // setLogin(content, data) {
//         //     return new Promise((resolve, reject) => {
//         //         //接口
//         //         Login(data)
//         //             .then(res => {
//         //                 resolve(res)
//         //             })
//         //             .catch(err => {
//         //                 console.log("失败")
//         //                 reject(err)
//         //             })
//         //     })
//         // }
//     }
// }


export default {
    namespaced: true, //声明命名空间
    state,
    getters,
    mutations,
    actions
};