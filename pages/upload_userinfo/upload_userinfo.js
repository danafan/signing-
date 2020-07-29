// pages/upload_userinfo/upload_userinfo.js
const api = require('../../utils/api.js')
const utils = require('../../utils/util.js')
Page({
  data: {
    show_card_front: "",
    show_card_back: "",
    id_card_front: "",
    id_card_back: "",
    name: "",
    id_card_no: ""
  },
  onLoad: function(options) {

  },
  //姓名
  changeName(v) {
    let name = v.detail.value;
    this.setData({
      name: name
    })
  },
  //身份证号
  changeIdCardNo(v) {
    let id_card_no = v.detail.value;
    this.setData({
      id_card_no: id_card_no
    })
  },
  //上传图片
  cardInfo(e) {
    wx.uploadFile({
      url: api.imgupload, //上传图片
      filePath: e.detail.path,
      name: 'file',
      formData:{
        _3rd_session: wx.getStorageSync('3rd_session')
      },  
      success: (res) => {
        if (JSON.parse(res.data).code == 1) {
          if (e.detail.card_type == 'front') {
            this.setData({
              show_card_front: e.detail.path,
              id_card_front: JSON.parse(res.data).data
            })
          } else {
            this.setData({
              show_card_back: e.detail.path,
              id_card_back: JSON.parse(res.data).data
            })
          };
        }
      }
    })
  },
  //删除图片
  close(e) {
    let type = e.currentTarget.dataset.type;
    var req = {
      filename: ""
    }
    if (type == 'front') {
      req.filename = this.data.id_card_front;
    } else {
      req.filename = this.data.id_card_back;
    };
    utils.get(api.deteleimg, req).then(res => {
      if (type == 'front') {
        this.setData({
          show_card_front: "",
          id_card_front: ""
        })
      } else {
        this.setData({
          show_card_back: "",
          id_card_back: ""
        })
      };
    })
  },
  submit() {
    if (this.data.id_card_front == '') {
      wx.showToast({
        title: '请上传身份证正面照片',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else if (this.data.id_card_back == '') {
      wx.showToast({
        title: '请上传身份证反面照片',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else if (this.data.name == '') {
      wx.showToast({
        title: '请输入姓名',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else if (this.data.id_card_no == '') {
      wx.showToast({
        title: '请输入身份证号',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else {
      let req = {
        id_card_front: this.data.id_card_front,
        id_card_back: this.data.id_card_back,
        name: this.data.name,
        id_card_no: this.data.id_card_no
      }
      utils.post(api.idinfoauth, req).then(res => {
        wx.showToast({
          title: res.msg,
          icon: "none",
          mask: true,
          duration: 2000
        })
        wx.navigateTo({
          url: '/pages/identity_check/identity_check'
        })
      })
    }
  }

})