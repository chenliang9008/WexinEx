// login.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
     userName:'',
     loading:false,
     message:'im message',
     id:98,
     hiddenLoading:true,

     list:[
       {
         leftTitle: getApp().globaldata
       },
       {
         leftTitle: 'bbbb'
       }
     ],

     imgUrls: [
       'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
       'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
       'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
     ],
     indicatorDots: true,
     autoplay: true,
     interval: 5000,
     duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
    
     var sysytemInfo=wx.getSystemInfo({
       success: function(res) {
         console.log(res)
       },
     })
     var app=getApp();
     console.log('aaaaa')
     console.log(getApp().globaldata)

      this.setData({
        userName: 'Felix'
      })

      var that =this;
      wx.request({
        url: 'https://www.baidu.com',
        header:{
          'content-type': 'application/json' // 默认值
        },
        method:'GET',
        fail:function(e){
          console.log(e)
        },
        success:function(res){
          console.log(res)
          that.setData({
            loading:true
          })
        }
        
      })
  },

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})