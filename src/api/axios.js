import axios from 'axios'
import * as api from '@/api'

// 配置默认接口地址
axios.defaults.baseURL = api.config.url
// 配置默认请求超时
axios.defaults.timeout = 12000

// 请求拦截器
axios.interceptors.request.use(config => {
    // 再请求发出之前进行一些操作
    // return config
    console.log(config)
}, err => {
    // 请求错误的操作
    return Promise.reject(err)
})

// 响应拦截器
axios.interceptors.response.use(res => {
    // 在这里对返回的数据进行处理
    // return res
    console.log(config)
}, err => {
    // 响应错误的操作
    return Promise.reject(err)
})

export default axios
