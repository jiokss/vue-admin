//拦截器
import axios from 'axios';

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';

//创建axios,赋值给service
const service = axios.create({
    baseURL: BASEURL,
    timeout: 1000
});
// const service 

//添加请求拦截器
//请求接口前，数据处理
service.interceptors.request.use(function(config) {
    //请求发送前做些什么
    //给请求头添加数据：token,userId,suid

    console.log(config.headers); //请求头
    config.headers.token = '1111'

    return config;
}, function(error) {
    //请求错误做些什么
    return Promise.reject(error);
})

//添加响应拦截器
//请求接口后，返回数据进行拦截
service.interceptors.response.use(function(response) {
    //对响应数据做些什么
    let data = response.data
    if (data.code != 0) {
        console.log(data.message);
        return Promise.reject(data.message);
    } else {
        return response;
    }


    // return response
}, function(error) {
    //响应错误做些什么
    return Promise.reject(error);
});


export default service;