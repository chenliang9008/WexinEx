
function getUserName() {
  return wx.getStorageSync('userName1');
}

function setUserName(userName) {
  try{
    wx.setStorageSync('userName1', userName);
  }catch(e){
    console.log(e);
  }
}

//保存json串
function saveJSONText(json){
  try {
    wx.setStorageSync('json', json);
  } catch (e) {
    console.log(e);
  }
}

//获取json串
function getJSONText(){
  return wx.getStorageSync('json');
}


module.exports={
    getUserName: getUserName,
    setUserName: setUserName,
    saveJSONText: saveJSONText,
    getJSONText: getJSONText
}