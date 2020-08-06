// pages/agreement/agreement.js
const api = require('../../utils/api.js')
const utils = require('../../utils/util.js')
Page({
  data: {
    web_url:"",
  },
  onLoad: function (options) {
    let id = options.id;
    utils.get(api.sign, { id: id }).then(res => {
      if (res.code == 1) {
        this.setData({
          web_url: res.data.sign_url
        })
      }
    })
  },

})