// Test1.js

var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'Felix ,You are the best one !'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人中心',
    })

    console.log("log");
    var userInfo = app.globalData.userInfo;
    console.log(userInfo);

    // if(userInfo==null){
    //    wx.redirectTo({
    //      url: '../login/AppLogin',
    //    })
    // }else{
    //   this.setData({ userName: userInfo.userName })
    // }

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

  

  onShareAppMessage:function(){
    
  },

  clickItemView: function (e) {
    let itemValue=e.currentTarget.dataset.itemvalue;
    if (itemValue=='个人设置'){
      wx.showToast({
        title: e.currentTarget.dataset.itemvalue,
      })
    }
  },

  clickItemView1: function () {
    wx.showToast({
      title: '名片',
    })
  }
})