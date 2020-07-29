// pages/my/my.js
const api = require('../../utils/api.js')
const utils = require('../../utils/util.js')
Page({
  data: {
    index_info:{},
  },
  onLoad(){
    //获取首页信息
    this.getIndexInfo();
  },
  //获取首页信息
  getIndexInfo(){
    utils.get(api.getindex).then(res => {
      if(res.code == 1){
        this.setData({
          index_info: res.data
        })
      }
    })
  },
  //收款记录
  goCollection(){
    wx.navigateTo({
      url: '/pages/collection_record/collection_record'
    })
  },
  //个人信息
  goUserInfo() {
    wx.navigateTo({
      url: '/pages/user_info/user_info'
    })
  },
  //签约信息
  goSign() {
    wx.navigateTo({
      url: '/pages/signing/signing'
    })
  }
})