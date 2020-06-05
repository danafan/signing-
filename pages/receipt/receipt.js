// pages/receipt/receipt.js
Page({
  data: {
    email: "", //接收邮箱
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
      console.log(this.data.email);
    }
  }
})