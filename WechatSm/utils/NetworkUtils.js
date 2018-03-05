// 方法二
var requestHandler = {
  api:null,
  domainUrl:null,
  params:{
     // params 可以为空
  },
  success: function (res) {
    // success
  },
  fail: function () {
    // fail
  },
  complete:function(){
    
  }
}

//GET请求
function createGET(requestHandler) {
  this.request('GET', requestHandler)
}
//POST请求
function createPOST(requestHandler) {
  this.request('POST', requestHandler)
}


function request(method, requestHandler) {

  console.log(requestHandler);

  //注意：可以对params加密等处理
  var params = null;
  if (requestHandler.params!=null) {
     params = requestHandler.params;
  }
  wx.showLoading({
    title: '正在请求...',
  })
  // const apiConfig = require('../ApiConfig.js');
  // var API_URL = apiConfig.API_ZHI_HU_HOST;
 
  var API_URL = requestHandler.domainUrl + requestHandler.api;
  console.log("request url = " + API_URL);
  wx.request({
    url: API_URL,
    data: params!=null?params:'',
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
      "Content-Type": "json"
    }, // 设置请求的 header
    success: function (res) {
      console.log(res);
      wx.hideLoading();
      //注意：可以对参数解密等处理
      requestHandler.success(res)
    },
    fail: function () {
      wx.hideLoading();
      requestHandler.fail()
    },
    complete: function () {

    },
  })
}
//导出方法体
module.exports = {
  request: request,
  createGET: createGET,
  createPOST: createPOST
}