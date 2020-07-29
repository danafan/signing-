const api = require('./api.js')
const utils = require('./util.js')

function login() {
  const rd_Session = wx.getStorageSync('3rd_session');
  if (rd_Session) {
    //判断微信服务端是否过期
    _checkWXSession();
  } else {
    //微信登录
    _wxLogin();
  }
}

//判断微信服务端是否过期
function _checkWXSession() {
  wx.checkSession({
    success: () => {
      //微信未过期，获取用户状态
      getUserStatus();
    },
    fail: () => {
      //已过期，先微信登录，再用户登录
      _wxLogin();
    }
  })
}

//获取用户状态
function getUserStatus() {
  utils.get(api.getuserstatus).then(res => {
    console.log(res.code)
    switch (res.code) {
      case 200:
        //正常
        wx.navigateTo({
          url: '/pages/my/my'
        })
        break;
      case 400:
        //未注册
        wx.navigateTo({
          url: '/pages/index/index'
        })
        break;
      case 402:
        //未实名认证
        wx.navigateTo({
          url: '/pages/realname/realname'
        })
        break;
      case 403:
        //银行卡信息未完善
        wx.navigateTo({
          url: '/pages/identity_check/identity_check'
        })
        break;
    }
  })
}

//先微信登录，再用户登录
function _wxLogin() {
  wx.login({
    success: (res) => {
      _serLogin(res.code)
    },
    fail: (err) => {
      console.log(err);
    }
  })
}

//用户登录
function _serLogin(code) {
  utils.get(api.get3rdSession, {
    code: code
  }).then(res => {
    wx.setStorageSync('3rd_session', res.data);
    //获取用户状态
    getUserStatus();
  }).catch(err => {
    console.log('开发者服务器登录失败')
  })
}

module.exports = {
  login: login
}