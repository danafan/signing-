// pages/realname/realname.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  //跳转到实名认证
  goRealname(){
    wx.navigateTo({
      url: '/pages/upload_userinfo/upload_userinfo'
    })
  }
})