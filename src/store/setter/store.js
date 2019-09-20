import * as mutations from './mutations'
import * as actions from './actions'
const state = {
  tabbarRouter: [
    {
      label: '首页',
      path: '/home',
      icon: 'cubeic-home'
    },
    {
      label: '分类',
      path: '/classify',
      icon: 'cubeic-search'
    },
    {
      label: '个人中心',
      path: '/personal',
      icon: 'cubeic-person'
    }
  ]
}
const getters = {
  // 是否为tabbar路由
  isTabbarRouter: stateObj => path => {
    const { tabbarRouter } = stateObj
    return tabbarRouter.some(item => item.path === path)
  }
}
const user = {
  state,
  getters,
  mutations,
  actions
}
export default user
