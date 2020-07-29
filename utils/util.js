/**
 * GET请求封装
 */
function get(url, data = {}) {
  return request(url, data, 'GET')
}

/**
 * POST请求封装
 */
function post(url, data = {}) {
  return request(url, data, 'POST')
}

/**
 * 微信的request
 */
function request(url, data = {}, method = "GET") {
  wx.showLoading({
    title: '加载中',
  })
  var contentType = 'application/json'
  return new Promise(function(resolve, reject) {
    wx.request({
      url: url,
      data: { ...data, ...{ _3rd_session: wx.getStorageSync('3rd_session')}},
      method: method,
      header: {
        'Content-Type': contentType
      },
      success: function(res) {
        wx.hideLoading()
        if (res.data.code == 1) {
          //请求正常
          resolve(res.data);
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1500,
            success: () => {
              resolve(res.data);
            }
          })

        }
      },
      fail: function(err) {
        wx.hideLoading()
        //服务器连接异常
        reject("服务器连接异常，请检查网络再试")
      }
    })
  });
}

module.exports = {
  get: get,
  post: post
}