//index.js
//获取应用实例
const app = getApp();
const deviceInfo = require("../../utils/DeviceUtil.js");
const userInfo1 = require("../../utils/UserInfo.js");

// 引入定位sdk
const QQMapWX = require("../../libs/qqmap-wx-jssdk.js");
const LocationUtil = require("../../utils/LocationUtil.js");

Page({
  reverseGeocoderL: function (lat, lon) {
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
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },
  data: {
          motto: app.globalData.globaldata,
          userInfo: {},
          hasUserInfo: false,
          canIUse: wx.canIUse('button.open-type.getUserInfo'),
          showModal: true,
          longitude: null,
          latitude: null,
          markers: null,
          currentAddress:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady:function(){
    
  },

  onLoad: function () {
    var that=this;
    LocationUtil.getLocation({
      success:function(res){
        console.log("------定位回调成功------");
        console.log(res.result.ad_info.name);
        that.setData({
          currentAddress: res.result.ad_info.name
        })
        console.log("------定位回调成功------");
      }
    });
    
    var that=this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {

        that.reverseGeocoderL(res.latitude,res.longitude);

        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers:[{
            iconPath: "../images/wechat.png",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50
          }]
        });
      },
    })

    // var deviceInfo = require("../../utils/DeviceUtil.js");
    console.log(deviceInfo.getSystemInfoJSON());

    //var userInfo1 = require("../../utils/UserInfo.js");
    userInfo1.setUserName("Felix 测试是否调用userName成功");

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
    
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  /**
     * 弹窗
     */
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },

  onShareAppMessage:function(){

  },

  testIcon:function(e){
    wx.navigateTo({
      url: '../flowlayout/flow',
    })
  },

  testPicker:function(e){
    wx.navigateTo({
      url: '../picker/picker',
    })
  },

  testCanvas:function(e){
    wx.navigateTo({
      url: '../canvas/Circle',
    })
  },

  testHomePage:function(e){
    wx.navigateTo({
      url: '../home/home',
    })
  },

  testZhiHuPage:function(e){
    wx.navigateTo({
      url: '../zhihu/zhihu',
    })
  }
})
