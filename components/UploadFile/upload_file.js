// components/UploadFile/upload_file.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    card_type:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击选择图片
    chooseImg(){
      wx.chooseImage({
        count: 1,
        success:(res) => {
          res.tempFilePaths.map(item => {
            //上传文件
            let req = {
              card_type: this.data.card_type,
              path: item
            }
            this.triggerEvent('onEmit',req);
          })
        }
      })
    }
  }
})
