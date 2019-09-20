const ENV = process.env.ENV_CONFIG

const localUrl = window.location.href

const TEST_PATH = '' // 测试接口路径
const PRO_PATH = '' // 生产接口路径
const LOACL_PATH = 'http://127.0.0.1:8066' // 本地
export const GET_URL = () => {
  if (
    localUrl.indexOf('localhost:') > -1 ||
    localUrl.indexOf('127.0.0.1:') > -1
  ) {
    // 本地环境
    return LOACL_PATH
  }
  if (ENV === 'pro') return PRO_PATH
  if (ENV === 'test') return TEST_PATH
}
