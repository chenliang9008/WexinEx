const DeviceInfo = require("../../utils/DeviceUtil.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl:"http://imgsrc.baidu.com/imgad/pic/item/5243fbf2b21193136c4bb4896e380cd791238dfb.jpg",
    userName:'Felix',
    listItems: ['', '', '', '', '', '', '', '', '', ''],
    scrollHeight:'',
    hotshidden: false,
    hothidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(DeviceInfo.getScreenHeight());
    this.setData({
      scrollHeight:DeviceInfo.getScreenHeight()*2
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
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  //图片回调处理
  bindLoad:function(){
    console.log("bindLoad...");
  },

  scrolltolower:function(e){
     console.log('scrolltolower');

     this.setData({
       hotshidden: false,
       hothidden: true
     })

     var that = this;

     var time = setInterval(function () {
       that.setData({
         hotshidden: true,
         hothidden: false
       });
       clearInterval(time);
     }, 4 * 1000);
  },

  scrolltoupper: function (e) {
    console.log("scrolltoupper");
  }

  
})