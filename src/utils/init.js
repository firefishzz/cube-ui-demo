import Vue from 'vue'
import { Toast, Dialog } from 'cube-ui'

// rem布局
const setFontSize = () => {
  var designWidth = 750
  var base = 75
  var pageWidth = window.innerWidth
  if (pageWidth <= 320) {
    pageWidth = 320
  }
  if (pageWidth >= 750) {
    pageWidth = 750
  }
  document.documentElement.style.fontSize =
    (base / designWidth) * pageWidth + 'px'
  window.onresize = () => {
    var designWidth = 750
    var base = 75
    var pageWidth = window.innerWidth
    if (pageWidth <= 320) {
      pageWidth = 320
    }
    if (pageWidth >= 750) {
      pageWidth = 750
    }
    document.documentElement.style.fontSize =
      (base / designWidth) * pageWidth + 'px'
  }
}
export const initApi = {
  // toast
  Toast(config) {
    const type = typeof config
    if (type === 'string' || type === 'number') {
      const toast = Toast.$create({
        txt: config.toString(),
        type: 'txt',
        mask: true
      })
      toast.show()
    }
    if (type === 'object') {
      return Toast.$create(config)
    }
  },
  // loading
  Loading(config) {
    const type = typeof config
    if (type === 'number') {
      let time = 0
      if (config > 0) {
        time = config * 1000
      }
      Toast.$create({ time }).show()
    }
    if (type === 'undefined') {
      return Toast.$create({
        time: 0
      })
    }
    if (type === 'object') {
      return Toast.$create(config)
    }
  },
  MessageBox(config) {
    const type = typeof config
    if (type === 'object') {
      return Dialog.$create(config)
    }
  }
}
export const init = () => {
  Object.keys(initApi).forEach(key => {
    Vue.prototype[key] = initApi[key]
  })
  setFontSize()
}
