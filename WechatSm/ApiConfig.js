const api = "https://www.baidu.com/";

const API_ZHI_HU_HOST = "http://news-at.zhihu.com/api/4/";// API 接口
const DoubanBase="https://api.douban.com"; //豆瓣电影域名

function getApiDomain(apiType){
    return api;
}

module.exports={
  getApiDomain: getApiDomain,
  API_ZHI_HU_HOST: API_ZHI_HU_HOST,
  DoubanBase: DoubanBase
}