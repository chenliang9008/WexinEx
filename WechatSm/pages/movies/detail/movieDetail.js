const netWorkUtil = require('../../../utils/NetworkUtils.js');
const apiConfig = require('../../../ApiConfig.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    doubanBase: apiConfig.DoubanBase, //豆瓣电影域名
    movieInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url = this.data.doubanBase;
    var movieId=options.movieId;
    this.loadData(url, movieId);
  },

  loadData: function (url, movieId){
    var that = this;
    netWorkUtil.createGET({
      domainUrl: url,
      api: "/v2/movie/subject/" + movieId,
      success: function (res) {
        that.setNavigationTitle(res.data.title);//设置导航标题
        that.processLoadInfo(res);  //处理请求回来的信息
      },
      fail: function () {

      }
    });
  },

  setNavigationTitle:function(title){
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  processLoadInfo:function(res){
    var data = res.data;
    var directorsName = data.directors[0].name;

    var moviePersons = new Array();
    var casts = data.casts;
    for (var castIdx in casts) {
      var name = casts[castIdx].name;
      var avatars = casts[castIdx].avatars.large;
      moviePersons.push(name);
      if (castIdx != casts.length - 1) {
        moviePersons.push("/");
      }
    }

    var movieGenres = new Array();
    var genres = data.genres;
    for (var genreId in genres) {
      var genre = genres[genreId];
      movieGenres.push(genre);
      if (genreId != genres.length - 1) {
        movieGenres.push("、");
      }
    }

    var moviePic = data.images.large;

    var movieInfo = {};
    movieInfo['movieInfo'] = {
      movieTitle: data.title,
      summary: data.summary,
      average: data.rating.average,
      directorsName: directorsName,
      moviePersons: moviePersons.join(""),
      movieGenres: movieGenres.join(""),
      moviePic: moviePic,
      collect_count: data.collect_count,
      comments_count: data.comments_count,
      year: data.year,
      country: data.countries[0],
      casts: data.casts
    }
    this.setData(movieInfo);
  }

})