//index.js
const app = getApp()
Page({
  data: {
    
  },
  // 立即签约
  signing() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }
})
