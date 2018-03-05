// FlexView.js

var data={

  /**
     * 页面的初始数据
     */
  data: {
    userInfo: 'Felix You can change the youself',
    imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510227791946&di=5da42ebcf39b962c6aa86c128e7ccabd&imgtype=0&src=http%3A%2F%2Fi1.sanwen.net%2Fdoc%2F1607%2F704-160GQ60S9.jpg',
    newsData:[
      { userName: 'Felix', userPwd: '123' },
      { userName: 'Felix_1', userPwd: '456' },
      { userName: 'Felix_2', userPwd: '789' }
    ],
    length:9,
    userName:'Felix',
    userPwd:238
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showLoading({
    //   title: '页面加载...',
    // })
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

  clickMe:function(e){
    var id=e.currentTarget.id;
    console.log(id+e.currentTarget.dataset.json)
  },

  clickView:function(){
    wx.showModal({
      title: '确认信息',
      content: '您点击了这项ITEM',
    })
  },

  cancelEvent:function(){
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 2000
    })
  },

  templateItemSelected:function(){
    wx.showToast({
      title: '模板被点击啦',
    })
  }

}

Page(data)