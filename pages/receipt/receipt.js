// pages/receipt/receipt.js
const api = require('../../utils/api.js')
const utils = require('../../utils/util.js')
Page({
  data: {
    order_id:"",
    receipt_url:"",
    email: "", //接收邮箱
  },
  onLoad(option){
    this.setData({
      order_id: option.order_id
    })
    //获取详情
    this.getReceptDetail();
  },
  //获取详情
  getReceptDetail(){
    utils.get(api.applyreceipt, {
      order_id: this.data.order_id
    }).then(res => {
      if (res.code == 1) {
        this.setData({
          receipt_url: res.data.receipt_url
        })
      }
    })
  },
  //监听输入的邮箱
  changeEmail(v) {
    let email = v.detail.value;
    this.setData({
      email: email
    })
  },
  //点击发送到邮箱
  push() {
    if (this.data.email == "") {
      wx.showToast({
        title: '请输入邮箱账号',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else {
      let req = {
        order_id: this.data.order_id,
        email: this.data.email
      }
      utils.post(api.sendreceipt, req).then(res => {
        if (res.code == 1) {
          wx.showToast({
            title: res.msg,
            icon: "none",
            mask: true,
            duration: 2000
          })
          wx.navigateBack({
            delta: 1
          })
        }
      })
    }
  }
})