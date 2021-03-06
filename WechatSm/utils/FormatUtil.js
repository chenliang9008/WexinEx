const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 获得明天时间
 */
const getTommorrowDate = ()=>{
  var dd = new Date();
  dd.setDate(dd.getDate() + 1);//获取AddDayCount天后的日期 
  var year = dd.getFullYear();
  var month = dd.getMonth() + 1;//获取当前月份的日期 
  var day = dd.getDate();
  return [year, month, day].map(formatNumber).join('-');
}

/**
 * 获得年月日日期
 */
const getYearMDOfTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-');
}

const getHourMTime = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  return [hour, minute].map(formatNumber).join(':')
}

function getCurrentDate(date,format){
  return  new Date().Format(format);
}

/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
*/
function convertMillTimeToFormat(number, format) {

  var formateArr = ['YY', 'MM', 'DD', 'hh', 'mm', 'ss'];
  var returnArr = [];

  var date = new Date(number * 1000);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
} 

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  getTommorrowDate: getTommorrowDate,
  getHourMTime:getHourMTime,
  getYearMDOfTime: getYearMDOfTime,
  getCurrentDate, getCurrentDate,
  convertMillTimeToFormat: convertMillTimeToFormat
}
