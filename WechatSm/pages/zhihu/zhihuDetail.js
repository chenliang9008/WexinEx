const network = require('../../utils/NetworkUtils.js');
const dateUtil= require('../../utils/DateUtil.js');
const apiConfig = require('../../ApiConfig.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
   data:[],
   databody:'',
   winWidth: 0,
   winHeight:0,
   shareShow: 'none',
   shareBottom:{},
   shareOpacity:{}
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.systemInfo();  //获取系统信息
    var contentId = options.id;
    this.loadData(contentId);
  },

  systemInfo:function(){
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },

  loadData:function(id){
    var that=this;
    network.createGET({
      domainUrl: apiConfig.API_ZHI_HU_HOST,
      api: "news/" + id,
      success: function (res) {
        console.log(res);

        var arr = res.data;
        var body = that.getBody(arr.body);
        that.setData({
          data:arr,
          databody: body
        });

        wx.setNavigationBarTitle({
          title: arr.title,
        })
      },
      fail: function () {
        console.log("news/" + id + " 请求出错了");
      }
    });
  },

  getBody:function(body){
    body = body.match(/<p>.*?<\/p>/g);
    var ss = [];
    for (var i = 0, len = body.length; i < len; i++) {
      ss[i] = /<img.*?>/.test(body[i]);
      if (ss[i]) {
        body[i] = body[i].match(/(http:|https:).*?\.(jpg|jpeg|gif|png)/);
      } else {
        body[i] = body[i].replace(/<p>/g, '')
          .replace(/<\/p>/g, '')
          .replace(/<strong>/g, '')
          .replace(/<\/strong>/g, '')
          .replace(/<a.*?\/a>/g, '')
          .replace(/&nbsp;/g, ' ')
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"');
      }
    }
    return body;
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
    wx.showActionSheet({
      itemList: ['a'],
    })
  },

  /**
   * 显示分享对话框
   */
  showShare:function(e){
    // 创建动画
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: "ease",
    })
    this.animation = animation;

    var that = this;
    that.setData({
      shareShow: "block",
    });

    setTimeout(function () {
      that.animation.bottom(0).step();
      that.setData({
        shareBottom: animation.export()
      });
    }, 400);

    // 遮罩层
    setTimeout(function () {
      that.animation.opacity(0.3).step();
      that.setData({
        shareOpacity: animation.export()
      });
    }, 400);
  },

  /**
   * 关闭分享框
   */
  shareClose:function(e){
    // 创建动画
    var animation = wx.createAnimation({
      duration: 0,
      timingFunction: "ease"
    })
    this.animation = animation;

    var that = this;

    setTimeout(function () {
      that.animation.bottom(-210).step();
      that.setData({
        shareBottom: animation.export()
      });
    }.bind(this), 500);

    setTimeout(function () {
      that.animation.opacity(0).step();
      that.setData({
        shareOpacity: animation.export()
      });
    }.bind(this), 500);

    setTimeout(function () {
      that.setData({
        shareShow: "none",
      });
    }.bind(this), 1500);
  }

})