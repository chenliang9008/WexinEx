Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    contentItems: ['aa', 'bb', 'cc', 'dd'],
    listItems: ['', '', '', '', '', '', ''],
    animations:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showActionSheet({
    //   itemList: ["新浪","腾讯","Facebook","Twitter"],
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.chooseLocation({
    //   success: function(res) {
    //     console.log(res);
    //   },
    // })
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
    wx.showActionSheet({
      itemList: ["aaaaaa"]
    })
  },

  goToDetail:function(e){
    console.log(e); 
    //用户点击时进行动画
    this.animationAction();

    wx.navigateTo({
      url: '../detail/Detail',
    })
  },

  animationAction:function(){
    this.animations = wx.createAnimation({
      duration: 400,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: "50% 50% 0",
    })
    this.animations.opacity(0.5).scale(1).step();
    this.animations.opacity(1).scale(-1).step();
    this.animations.translateX(-10).step();
    this.animations.translateX(10).step();

    this.setData({
      animations: this.animations.export()
    });
  }

  
})