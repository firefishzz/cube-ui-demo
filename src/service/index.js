import axios from './tools'

// 获得查询验证码
export const userQueryOrderGetcode = data => {
  return axios.post('/app_kaduofenSdk/api/userQueryOrderGetcode', data)
}

// 获得购买记录
export const userQueryOrder = data => {
  return axios.post('/app_kaduofenSdk/api/userQueryOrder', data)
}
