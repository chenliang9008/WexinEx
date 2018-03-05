const util = require('FormatUtil.js');

/**
 *获得时间 格式为yyyy/mm/dd hh:mm:ss
 * 其它格式的时间可以根据此进行改造
 */
function getNowDate(){
  return util.formatTime(new Date());
}

/**
 * 获得明天时间
 */
const getTommorrowDate = () =>{
  return util.getTommorrowDate();
}
/**
 * 获得指定格式的时间 
 * number是服务器返回的  毫秒数
 */
function convertMillTimeToFormat(number, format) {
  return util.convertMillTimeToFormat(number,format);
}

function getCurrentDate(date, format){
  return util.getCurrentDate(date, format);
}

/**
 * date 是 new Date()
 * 获得时间 hh:mm
 */
function getHourMTime(date){
  return util.getHourMTime(date);
}

/**
 * 获得日期格式为 yyyy-mm-dd
 */
function getYearMDOfTime(){
  return util.getYearMDOfTime(new Date());
}
module.exports={
  getNowDate: getNowDate,
  getTommorrowDate: getTommorrowDate,
  getCurrentDate: getCurrentDate,
  getHourMTime: getHourMTime,
  getYearMDOfTime: getYearMDOfTime,
  convertMillTimeToFormat: convertMillTimeToFormat
}