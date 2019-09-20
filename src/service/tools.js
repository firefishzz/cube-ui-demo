import axios from 'axios'
import { GET_URL } from './config'
import { initApi } from '@/utils/init.js'
const { ToastWithText } = initApi
const service = axios.create({
  baseURL: GET_URL(),
  timeout: 10000
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    ToastWithText('服务器返回错误,请稍后再试')
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    ToastWithText('服务器返回错误,请稍后再试')
    return Promise.reject(error)
  }
)
export default service
