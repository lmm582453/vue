import axios from 'axios'
import qs from 'qs'

// 系统配置参数
export const config = {
  url: 'http://hma.d.youjiadv.com/backend/', // 接口地址
  limit: 10 // 每页显示条数
}

// 配置默认接口地址
axios.defaults.baseURL = config.url
// 配置默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 配置默认请求超时
axios.defaults.timeout = 12000

const user = JSON.parse(localStorage.getItem('user'))
if (user) {
    // 配置默认TOKEN
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
}

// 请求拦截器
axios.interceptors.request.use(config => {
    // 再请求发出之前进行一些操作
    if (config.data) {
        config.data = config.data.json
            ? qs.stringify({
                json: JSON.stringify(config.data)
            })
            : qs.stringify(config.data)
    }
    return config
}, err => {
    // 请求错误的操作
    return Promise.reject(err)
})

// 响应拦截器
axios.interceptors.response.use(res => {
    // 在这里对返回的数据进行处理
    if (res.data.code == 1) {
      return res
    } else {
      this.$message.error(res.data.msg)
    }
}, err => {
    // 响应错误的操作
    return Promise.reject(err)
})

// GET请求
export const fetchGet = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {params})
    .then(res => { resolve(res.data) }, err => { reject(err) })
      .catch(err => { reject(err) })
  })
}

// POST请求
export const fetchPost = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => { resolve(res.data) }, err => { reject(err) })
      .catch(err => { reject(err) })
  })
}

// 公共接口
export const commen = {
  fileUpload: 'file-upload' // 单个文件上传
}

export default {
  axios
}