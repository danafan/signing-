// components/button/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isClick:{
      type:Boolean,
      value:true
    },
    text:{
      type:String,
      value:""
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onEmit(){
      this.triggerEvent('onEmit')
    }
  }
})
