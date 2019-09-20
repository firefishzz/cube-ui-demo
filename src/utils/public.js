// 获取base64图片
export const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
// 获取当前时间
export const getNowDate = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return year + '/' + month + '/' + day
}
// 检测是否中文字符
export const checkChineseName = name => {
  return /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/.test(name)
}
// 校验身份证
export const checkSFZ = idcode => {
  idcode = idcode.toUpperCase()
  let weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  let check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  let code = idcode + ''
  let last = idcode[17]
  let seventeen = code.substring(0, 17)
  let arr = seventeen.split('')
  let len = arr.length
  let num = 0
  for (let i = 0; i < len; i++) {
    num = num + arr[i] * weight_factor[i]
  }
  let resisue = num % 11
  let last_no = check_code[resisue]
  let idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/
  let format = idcard_patter.test(idcode)
  return last === last_no && format ? true : false
}
// 检测是否合法手机号
export const checkMobileNumber = mobile => {
  return /^1(3|5|6|7|8|9)\d{9}$/.test(mobile)
}
// 获取id
export const getUniqueId = () => {
  let d = new Date().getTime()
  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now() //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}
