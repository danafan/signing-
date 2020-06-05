// pages/identity_check/identity_check.js
Page({
  data: {
    bank_num: "", //银行卡号
    phone: "", //手机号
    code: "", //验证码
    codebutTxt:"发送验证码",    //获取验证码提示文字
    notBut:true,      //默认发送验证码按钮可点击
    time:6,           //倒计时时间
    isClick: false, //默认登录按钮不高亮
  },
  //监听输入的银行卡号
  changeBankNum(v) {
    let bank_num = v.detail.value;
    this.setData({
      bank_num: bank_num
    })
    this.watchBPC();
  },
  //监听输入的手机号
  changePhone(v) {
    let phone = v.detail.value;
    this.setData({
      phone: phone
    })
    this.watchBPC();
  },
  //监听输入的验证码
  changeCode(v) {
    let code = v.detail.value;
    this.setData({
      code: code
    })
    this.watchBPC();
  },
  //监听银行卡号、手机号、验证码不为空
  watchBPC() {
    if (this.data.bank_num !== "" && this.data.phone !== "" && this.data.code !== "") {
      this.setData({
        isClick: true
      })
    } else {
      this.setData({
        isClick: false
      })
    }
  },
  //点击获取验证码
  getCode() {
    if (this.data.phone == "") {
      wx.showToast({
        title: '请输入手机号',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else {
      if (this.data.notBut == true) { //如果按钮可以点击
        let obj = {
          phone: this.data.phone,
          type: 2
        }
        console.log(obj);
        //倒计时
        this.timeDown();
        //请求发送短信接口
      } else {
        wx.showToast({
          title: '操作频繁',
          icon: "none",
          mask: true,
          duration: 2000
        })
      }
    }

  },
  // 倒计时
  timeDown() {
    if (this.data.time > 0) {
      this.setData({
        notBut: false,
        time: this.data.time - 1,
        codebutTxt: this.data.time + "s"
      })
      setTimeout(this.timeDown, 1000);
    } else {
      this.setData({
        notBut: true,
        time: 60,
        codebutTxt: "获取验证码"
      })
    }
  },
  //提交
  submit() {
    if (this.data.bank_num == "") {
      wx.showToast({
        title: '请输入银行卡号',
        icon: "none",
        mask: true,
        duration: 2000
      })
    }else if (this.data.phone == "") {
      wx.showToast({
        title: '请输入手机号',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else if (this.data.code == "") {
      wx.showToast({
        title: '请输入验证码',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else {
      let req = {
        bank_num: this.data.bank_num,
        phone: this.data.phone,
        code: this.data.code
      }
      console.log(req);
    }

  },

})