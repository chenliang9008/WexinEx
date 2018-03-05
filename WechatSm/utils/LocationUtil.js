// 引入定位sdk
const QQMapWX = require("../libs/qqmap-wx-jssdk.js");
const NetWorkUtil = require("../utils/NetWorkUtil.js");

var LocationResult={
  params:{

  },
  success:function(res){

  },
  fail:function(){

  }
}
/**
 * 获取定位信息
 */
function getLocation(LocationResult){

  wx.getLocation({
    success: function(res) {
      var lat=res.latitude;
      var lon=res.longitude;
      console.log("定位成功");
      var locationString = res.latitude + "," + res.longitude;
      // 根据经纬度解析详细地址
      reverseGeocoderL(LocationResult,lat,lon);
    }
  })
}

function reverseGeocoderL(LocationResult,lat, lon) {
  // 实例化API核心类
  var wxMap = new QQMapWX({
    key: "3RTBZ-UAK3P-R2JDP-LR6KR-RKMYF-7MBSS" // 必填
  });
  // 调用接口
  wxMap.reverseGeocoder({
    location: {
      latitude: lat,
      longitude: lon
    },
    success: function (res) {
      console.log(res);
      if (LocationResult!=null){
        LocationResult.success(res);
      }
    },
    fail:function(){
      if (LocationResult != null) {
        LocationResult.fail();
      }
    }
  });
}

module.exports={
  getLocation: getLocation
}