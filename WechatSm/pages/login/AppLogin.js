var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:null,
    userPwd:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '极客学院',
    })

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#1E90FF',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
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
    this.setData({
      userName:null,
      userPwd:null
    })
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
   
  testLogin:function(e){
   console.log(e);
  },

  inputUserName:function(e){
    this.setData({
      userName:e.detail.value
    });
  },

  inputUserPwd:function(e){
    this.setData({
      userPwd: e.detail.value
    });
  },

  loginAction:function(e){
    var userName=this.data.userName;
    var userPwd=this.data.userPwd;
    console.log("="+userName)
    console.log("="+userPwd)

    if(userName==null){
       wx.showToast({
         title: '请输入用户名',
       })
    }else if (userPwd == null) {
      wx.showToast({
        title: '请输入密码',
      })
    }else {

      wx.showToast({
      title: '恭喜您啊，登录成功',
      })
      
      app.globalData.userInfo={
        userName:userName,
        userPwd:userPwd
      };

      wx.switchTab({
        url: '../mine/mine',
      })

    }
  }


})