// pages/user_info/user_info.js
const api = require('../../utils/api.js')
const utils = require('../../utils/util.js')
Page({
  data: {
    userInfo:{}
  },
  onLoad(options) {
    //获取个人信息
    this.getUserInfo()
  },
  //获取个人信息
  getUserInfo(){
    utils.get(api.personinfo).then(res => {
      if (res.code == 1) {
        this.setData({
          userInfo: res.data,
        })
      } 
    })
  }
})