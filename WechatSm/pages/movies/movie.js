// pages/movies/movie.js
const apiConfig = require('../../ApiConfig.js');
const netWorkUtil=require('../../utils/NetworkUtils.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
     doubanBase: apiConfig.DoubanBase, //豆瓣电影域名
     inTheaters: {},
     comingSoon: {},
     top250: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadTopMovies();
    this.loadMiddleMovies();
    this.loadBottomMovies();
  },

  /**
   * 加载顶部数据
   */
  loadTopMovies:function(){
    var doubanBase = this.data.doubanBase;
    var that=this;
    netWorkUtil.createGET({
      domainUrl: doubanBase,
      api: "/v2/movie/in_theaters?start=0&count=10",
      success: function (res) {
        that.processData(res.data,"inTheaters","正在热映")
      },
      fail: function () {
        console.log('news/before/ 请求出错了');
      }
    });
  },

  processData: function (douBandata,settedKey, categoryTitle){
    var movies = [];
    for (var idx in douBandata.subjects) {
      var subject = douBandata.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      var temp = {
        //stars: util.convertToStarsArray(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id
      }
      movies.push(temp)
    }
    var readyData = {};

    readyData[settedKey] = {
      categoryTitle: categoryTitle,
      movies: movies
    }
    this.setData(readyData);
  },

  /**
   * 加载中部数据
   */
  loadMiddleMovies:function(){
    var doubanBase = this.data.doubanBase;
    var that=this;
    netWorkUtil.createGET({
      domainUrl: doubanBase,
      api: "/v2/movie/coming_soon?start=0&count=10",
      success: function (res) {
        that.processData(res.data, "comingSoon", "即将上映")
      },
      fail: function () {
        console.log('news/before/ 请求出错了');
      }
    });
  },

  /**
   * 加载底部数据
   */
  loadBottomMovies:function(){
    var doubanBase = this.data.doubanBase;
    var that = this;
    netWorkUtil.createGET({
      domainUrl: doubanBase,
      api: "/v2/movie/top250?start=0&count=10",
      success: function (res) {
        that.processData(res.data, "top250", "豆瓣Top250")
      },
      fail: function () {
        console.log('news/before/ 请求出错了');
      }
    });
  },

  detailPage:function(e){
    var movieId=e.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: './detail/movieDetail?movieId=' + movieId,
    });
  },

  onPullDownRefresh:function(e){
    console.log("onPullDownRefresh");
  }

})