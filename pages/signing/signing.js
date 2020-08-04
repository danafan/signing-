// pages/signing/signing.js
const api = require('../../utils/api.js')
const utils = require('../../utils/util.js')
Page({
  data: {
    sign_list: [],
    isLoad: true, //默认可以加载
    page: 1, //当前页码
    pagesize: 10
  },
  onLoad(options) {
    //获取信息列表
    let req = {
      page: this.data.page,
      page: this.data.pagesize
    }
    this.getUserInfo(req);
  },
  //上拉加载
  onReachBottom() {
    if (this.data.isLoad) {
      this.setData({
        page: this.data.page + 1
      })
      //获取信息列表
      let req = {
        page: this.data.page,
        page: this.data.pagesize
      }
      this.getUserInfo(req);
    }
  },
  //获取列表
  getUserInfo() {
    utils.get(api.signinfo).then(res => {
      if (res.code == 1) {
        this.setData({
          sign_list: [...this.data.sign_list, ...res.data.data]
        })
      }
    })
  },
  //点击
  agreement(e) {
    let sign_status = e.currentTarget.dataset.sign_status;
    let id = e.currentTarget.dataset.id;
    if (sign_status == 2) {
      wx.navigateTo({
        url: '/pages/agreement/agreement?id=' + id,
      })
    } else {
      utils.get(api.sign,{id:id}).then(res => {
        if (res.code == 1) {
          wx.downloadFile({
            url: res.data,
            success: function(res) {
              const filePath = res.tempFilePath
              wx.openDocument({
                filePath: filePath,
                success: res => {
                  console.log('打开文档成功')
                }
              })
            }
          })
        }
      })

    }


  }
})