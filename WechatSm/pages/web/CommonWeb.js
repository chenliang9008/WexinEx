Page({
  
    data:{
      webUrl:'https://www.baidu.com',
      imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1510303992&di=f3db2b92ed34067f885acbbdf513dec6&src=http%3A%2F%2Fpiccdn.pptfans.cn%2F2016%2F11%2F29%2Fpptfans_20161129005410033cf22e69.jpg',
      imageUrl1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510314308868&di=f004691945ed930a50a97b900e01634c&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F4d086e061d950a7bca03340f00d162d9f3d3c9c3.jpg',
      array1:[
        {message:'我是消息1'},
        {message: '我是消息2'}
      ],
      count:10,
      systemInfo:"",
      iconSize:[30,20,30,40,50,80,60],
      iconType: [
        'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
      ],
      items: [
        { name: 'USA', value: '美国' },
        { name: 'CHN', value: '中国', checked: 'true' },
        { name: 'BRA', value: '巴西' },
        { name: 'JPN', value: '日本' },
        { name: 'ENG', value: '英国' },
        { name: 'TUR', value: '法国' },
      ],
      array: ['美国', '中国', '巴西', '日本'],

      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',


      markers: [{
        iconPath: "/pages/images/credit_press.png",
        id: 0,
        longitude:116.407526, 
        latitude:39.90403,
        width: 50,
        height: 50,
        callout:{
          content:"我是泡泡",
          bgColor:"rgba(0,0,0,0.4)",
          boderColor:"rgba(0,0,0,0.4)"
        }
      }],

      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }],
      controls: [{
        id: 1,
        iconPath: '/pages/images/credit_press.png',
        position: {
          left: 300,
          top: 240,
          width: 50,
          height: 50
        },
        clickable: true
      }]

    },

    onPullDownRefresh:function(){
      wx.stopPullDownRefresh();
    },

    onReady:function(e){
      var animation = wx.createAnimation({
        transformOrigin: "50% 50%",
        duration: 1000,
        timingFunction: "ease",
        delay: 0,
        
      });
      wx.setNavigationBarTitle({
        title: '基础控件库'
      })

      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#1E90FF',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      })

      //导航控件库上面加载loading
      wx.showNavigationBarLoading();
      setTimeout(function(){
        wx.hideNavigationBarLoading();
      },4000);
     

      // wx.showLoading({
      //   title: '加载中...',
      // })
      // wx.request({
      //   url: 'https://www.baidu.com',
      //   success:function(res){
      //     console.log(res)
      //     wx.hideLoading();
      //   },
      //   fail:function(e){

      //   },
      //   header:{
      //     'content-type':'application/json'
      //   }
      // })


      // wx.getLocation({
      //   success: function(res) {
      //     console.log(res);
      //   },
      // })


      // try {
      //   var res = wx.getSystemInfoSync()
      //   console.log(res.model)
      //   console.log(res.pixelRatio)
      //   console.log(res.windowWidth)
      //   console.log(res.windowHeight)
      //   console.log(res.language)
      //   console.log(res.version)
      //   console.log(res.platform)
      // } catch (e) {
      //   // Do something when catch error
      //   console.log(e)
      // }
    },

    onLoad: function (options) {

      // wx.showLoading({
      //   title: '正在加载中...',
      // });

      // wx.showModal({
      //   title: '温馨提示',
      //   content: '您的账户余额不足,请充值!'
      // })

      // var that=this;

      // var h="hello world".toUpperCase();
      
      // console.log(h);
      // var exp = 10;
      // switch (exp) {
      //   case "10":
      //     console.log("string 10");
      //     break;
      //   case 10:
      //     console.log("number 10");
      //     break;
      //   case exp:
      //     console.log("var exp");
      //     break;
      //   default:
      //     console.log("default");
      // }

      // console.log(Number.MAX_VALUE);


      // wx.getSystemInfo({
      //   success: function(res) {
      //     that.setData({
      //       systemInfo:res
      //     })
      //   },
      // })


    // var sysInfo=wx.getSystemInfoSync();
    // console.log(sysInfo);

    // try {
    //   wx.setStorage({
    //     key: 'userName',
    //     data: '123',
    //   });
    // } catch (e){
    //   console.log(e)
    // }


    // wx.onNetworkStatusChange(function (res) {
    //   console.log(res.isConnected)
    //   console.log(res.networkType)
    // })

    // wx.onAccelerometerChange(function(res){
    //   console.log(res.x)
    //   console.log(res.y)
    //   console.log(res.z)
    // })



    // wx.getNetworkType({
    //   success: function(res) {
    //     var netType = res.networkType;
    //     console.log(netType);
    //   },
    //   fail:function(e){
    //    console.log(e);
    //   }
    // })
      
    },

    // showToast1: function (content) {
    //   wx.showToast({
    //     title: 'content',
    //   })
    // },

    btnClick:function(){
      //方法一
      var netWork = require("../../utils/NetWorkUtil.js");
      netWork.createGetRuquest(
        "https://www.baidu.com",
        "",
        function(res){
          console.log(res)
        }
      );
      var userInfo = require("../../utils/UserInfo.js");
      console.log(userInfo.getUserName());
      console.log('-------userInfo-------');
      

      //方法二
      // var netWork=require("../../utils/NetworkUtils.js")
      // netWork.createGET({
      //    params:{
      //      userName:'Felix',
      //      pwd:'a123456'
      //    },
      //    success:function(res){
      //      console.log(res)
      //    },
      //    fail:function(){

      //    }
      // });

      // wx.showToast({
      //   title: wx.getStorageSync('userName')
      // })

      // wx.showModal({
      //   title: '提示',
      //   content: '这是一个模态弹窗',
      //   success: function (res) {
      //     if (res.confirm) {
      //       console.log('用户点击确定')
      //     } else if (res.cancel) {
      //       console.log('用户点击取消')
      //     }
      //   }
      // })


      // wx.showActionSheet({
      //   itemList: ['分享到朋友圈','分享到微信','分享到短信'],
      //   success: function(res) {
      //     console.log(res.tapIndex)
      //   },
      //   fail: function() {
      //     console.log(res.errMsg)
      //   }
      // })

    },

     

    bindItemInfo:function(e){
      console.log(e);

      wx.showToast({
        title: e.currentTarget.dataset.info,
      })
    },

    switch:function(){
      wx.showToast({
        title: '切换',
      })
    },

    radioChange:function(e){
      console.log(e.detail.value);
    },

    controltap(){
      wx.openLocation({
        longitude: 116.407526,
        latitude: 39.90403,
        name: "北京市朝阳区团结湖",
        address: "热IC很国际中心801F"
      })

      wx.showToast({
        title: '哈哈',
      })
    },

    markertap(){
     wx.showToast({
       title: '商家位置',
     })
    },

    onShareAppMessage:function(){

    }
});