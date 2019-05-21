import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/'
})

axiosInstance.interceptors.request.use(function (config) {
  // 在这里对请求进行统一处理，比如添加token
  return config
}, function (error) {
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default axiosInstance
