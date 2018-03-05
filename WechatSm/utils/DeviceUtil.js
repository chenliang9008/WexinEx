function getSystemInfoJSON() {
   return wx.getSystemInfoSync();
}

function getSDKVersion(){
  return getSystemInfoJSON().SDKVersion;
}

function getBrand() {
  return getSystemInfoJSON().brand;
}

function getLanguage() {
  return getSystemInfoJSON().language;
}

function getModel() {
  return getSystemInfoJSON().model;
}

function getPixelRatio() {
  return getSystemInfoJSON().pixelRatio;
}

function getPlatform() {
  return getSystemInfoJSON().platform;
}

function getScreenHeight() {
  return getSystemInfoJSON().screenHeight;
}

function getScreenWidth() {
  return getSystemInfoJSON().screenWidth;
}

function getSystem() {
  return getSystemInfoJSON().system;
}

function getVersion() {
  return getSystemInfoJSON().version;
}

function getWindowHeight() {
  return getSystemInfoJSON().windowHeight
}

function getWindowWidth() {
  return getSystemInfoJSON().windowWidth;
}

module.exports={
  getSystemInfoJSON: getSystemInfoJSON,
  getSDKVersion: getSDKVersion,
  getBrand: getBrand,
  getLanguage: getLanguage,
  getModel: getModel,
  getPixelRatio: getPixelRatio,
  getPlatform: getPlatform,
  getScreenHeight: getScreenHeight,
  getScreenWidth: getScreenWidth,
  getSystem: getSystem,
  getVersion: getVersion,
  getWindowHeight: getWindowHeight,
  getWindowWidth: getWindowWidth
}