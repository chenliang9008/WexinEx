const network = require('../../utils/NetworkUtils.js');
const dateUtil= require('../../utils/DateUtil.js');
const apiConfig = require('../../ApiConfig.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotshidden:false,
    hothidden:false,
    currentDate: dateUtil.getTommorrowDate().replace(/-/, '').replace(/-/, ''),
    stories:[],
    scrollHeight:1200,
    loading:false
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!this.data.loading){
      this.loadData(this.data.currentDate);
    }
  },

  loadData:function(date){
  
    this.setData({
      loading:true
    });
    
    var that = this;
    var netWork1 = require("../../utils/NetworkUtils.js")
    netWork1.createGET({
      domainUrl: apiConfig.API_ZHI_HU_HOST,
      api: "news/before/" + date,
      success: function (res) {

        var list = that.data.stories;
        var arr =res.data;
       
        that.setData({
          currentDate: res.data.date,
          stories: list.concat(arr),
          hotshidden: true,
          hothidden: false,
          loading:false
        });
      },
      fail: function () {
        console.log('news/before/ 请求出错了');
      }
    });
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

  scrolltolower:function(){
    if(!this.data.loading){
      this.setData({
        hotshidden: false,
        hothidden: true,
      });
      this.loadData(this.data.currentDate);
    }
  },

  scrolltoupper:function(){
    console.log('scrolltoupper....');
  }
})