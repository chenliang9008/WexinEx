// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
// method: 请求方法 GET OR POST

//方法一
function requestLoading(method,url, params, message, success, fail) {
  console.log(params)
  wx.showLoading({
    title: message,
  })
  wx.request({
    url: url,
    data: params,
    method: method,
    success: function (res) {
      wx.hideLoading();
      if (res.statusCode == 200) {
        success(res)
      } else {
        fail()
      }
    },
    fail: function (res) {
      wx.hideLoading()
      fail()
    },
    complete:function(){

    },
    header: {
      'content-type': 'application/json'
    }
  })
}

function createGetRuquest(url, params, success, fail){
  this.requestLoading("GET", url, params, "", success, fail)
}

function createPostRuquest(url, params, success, fail) {
  this.requestLoading("POST", url, params, "", success, fail)
}

module.exports = {
  createGetRuquest: createGetRuquest,
  createPostRuquest: createPostRuquest,
  requestLoading: requestLoading
}