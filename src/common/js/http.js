/**
 * axios的封装
 * vsionly
 */
import axios from 'axios'
import Vue from 'vue'
import router from '@/router.js'
// import qs from 'qs' // 可能需要对参数处理 qs.stringify(config.data)
import { Message } from 'element-ui'
Vue.prototype.$message = Message

const vm = new Vue({
    router
})
const instance = axios.create({
    baseURL: process.env.VUE_APP_API, // 设置跨域代理接口统一的前置地址
    timeout: 0,
    headers: {
        'Content-Type': 'application/json'
    }
})
// 请求拦截器
instance.interceptors.request.use(config => {

    if (window.localStorage.getItem('expire') + '000' >= +new Date()) {
        if (config.method === 'get') {
            config.params = Object.assign(config.params || {}, { auth_code: window.localStorage.getItem('auth_code'), random: new Date() })
        } else if (config.method === 'post') {
            const data = config.data ? JSON.parse(config.data) : {}
            config.data = JSON.stringify(Object.assign(data, { auth_code: window.localStorage.getItem('auth_code'), random: new Date() }))
        }
    } else if (config.url !== 'login') {
        vm.$message.error('登录状态已失效，请重新登陆！')
        vm.$router.push('/')
        // return Promise.reject({message: '登录状态已失效，请重新登陆！'})
    }

    return config
}, error => {
    return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(res => {
    if (res.data.status !== 0) {
        vm.$message.error(res.data.message)
        if (res.data.status === 2) {
            if (res.config.url !== 'login') vm.$router.push('/')
        }
    }
    return res.data
}, function (error) {
    return Promise.reject(error);
})

export default instance
