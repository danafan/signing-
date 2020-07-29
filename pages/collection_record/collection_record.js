// pages/collection_record/collection_record.js
const api = require('../../utils/api.js')
const utils = require('../../utils/util.js')
Page({
  data: {
    record_list:[],
    isLoad: true, //默认可以加载
    page: 1, //当前页码
    pagesize:10
  },
  onLoad(){
    //获取信息列表
    let req = { page: this.data.page, page: this.data.pagesize }
    this.getList(req);
  },
  //上拉加载
  onReachBottom() {
    if (this.data.isLoad) {
      this.setData({
        page: this.data.page + 1
      })
      //获取信息列表
      let req = { page: this.data.page, page: this.data.pagesize }
      this.getList(req);
    }
  },
  //获取列表
  getList(req){
    utils.get(api.receiverecord, req).then(res => {
      if (res.code == 1) {
        this.setData({
          record_list: [...this.data.record_list, ...res.data]
        })
      } 
    })
  },
  //获取详情
  getRecord(e){
    let order_id = e.currentTarget.dataset.order_id;
    wx.navigateTo({
      url: '/pages/collection_detail/collection_detail?order_id=' + order_id
    })
  }
})