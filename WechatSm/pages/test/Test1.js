// Test1.js
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {itemName:'1'},
      {itemName:'2'},
      { itemName: '3' },
      { itemName: '3' },
      { itemName: '3' },
      { itemName: '3' },
      { itemName: '3' },
      { itemName: '3' },
      { itemName: '3' },
      { itemName: '3' },
      { itemName: '3' },
      { itemName: '3' },
      { itemName: '3' },
      { itemName: '3' },
    ],
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("log");
    var userInfo = app.globalData.userInfo;
    console.log(userInfo);

    if (userInfo == null) {
      wx.redirectTo({
        url: '../login/AppLogin',
      })
    } else {
      this.setData({ userName: userInfo.userName })
    }
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
  
  },

  testClick:function(){
    wx.navigateTo({
      url: '../web/CommonWeb'
    })
  },

  loadMore:function(e){
    console.log('loadMore...')
  },

  lower:function(){
    console.log('loadMore...')
  },

  scroll:function(e){
    console.log(e);
  },

  onPullDownRefresh: function () {
    console.log('onPullDownRefresh...')
  },

  onReachBottom: function () {
    console.log('onReachBottom...')
    this.setData({
      loading:true
    })
  }


})