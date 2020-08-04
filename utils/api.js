//测试地址
const ApiRootUrl = 'https://csgx.gxk8090.com/mobile/';

module.exports = {
  get3rdSession: ApiRootUrl + 'login/get3rdsession',		//获取get3rdSession
  getuserstatus: ApiRootUrl + 'login/getuserstatus',    //获取用户状态
  getregistercode: ApiRootUrl + 'login/getregistercode',    //获取验证码
  register: ApiRootUrl + 'login/register',           //注册
  imgupload: ApiRootUrl + 'login/imgupload',      //上传图片
  deteleimg: ApiRootUrl + 'login/imgdel',         //删除图片
  idinfoauth: ApiRootUrl + 'login/idinfoauth',                        //实名认证
  getbankphonecode: ApiRootUrl + 'login/getbankphonecode',  //获取银行手机验证码
  commitbankinfo: ApiRootUrl + 'login/commitbankinfo',      //提交银行卡信息
  getindex: ApiRootUrl + 'user/index',                     //获取首页信息
  receiverecord: ApiRootUrl + 'user/receiverecord',        //收款记录
  receivedetail: ApiRootUrl + 'user/receivedetail',       //收款记录详情
  applyreceipt: ApiRootUrl + 'user/applyreceipt',                       //申请电子回单
  sendreceipt: ApiRootUrl + 'user/sendreceipt',           //发送邮箱
  personinfo: ApiRootUrl + 'user/personinfo',           //获取个人信息
  signinfo: ApiRootUrl + 'user/signinfo',               //获取签约信息列表
  sign: ApiRootUrl + 'user/sign',                   //获取地址
} 