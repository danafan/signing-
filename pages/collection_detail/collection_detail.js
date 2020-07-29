// pages/collection_detail/collection_detail.js
const api = require('../../utils/api.js')
const utils = require('../../utils/util.js')
Page({
  data: {
    order_id:"",
    infoObj:{},
  },
  onLoad(option) {
    this.setData({
      order_id: option.order_id
    })
    //获取详情
    this.getDetail();
  },
  //获取详情
  getDetail() {
    utils.get(api.receivedetail, {
      order_id: this.data.order_id
    }).then(res => {
      if (res.code == 1) {
        this.setData({
          infoObj: res.data
        })
      }
    })
  },
  //点击申请电子回单
  apply() {
    wx.navigateTo({
      url: "/pages/receipt/receipt?order_id=" + order_id
    })
  }
})