// pages/collection_detail/collection_detail.js
Page({
  data: {

  },
  //点击申请电子回单
  apply(){
    wx.navigateTo({
      url:"/pages/receipt/receipt"
    })
  }
})