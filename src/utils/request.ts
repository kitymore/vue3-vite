import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseurl:any = import.meta.env.VITE_BASE_API
const request = Axios.create({
  baseURL: baseurl,
  timeout: 50000 // 请求超时 50s
})

// 前置拦截器（发起请求之前的拦截）
request.interceptors.request.use(
  (response) => {
    /**
     * 根据项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
     const token = ''; //从缓存获取token
     if (token && response.headers) {
       // 请求头token信息，请根据实际情况进行修改
       response.headers['Authorization'] = token;
     }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
request.interceptors.response.use(
  (response) => {
    /**
     * 根据项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response.data
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default request
