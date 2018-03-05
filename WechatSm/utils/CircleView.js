//画带有进度的弧度
function drawCircle(progress) {
    // 页面渲染完成 
    var cxt_arc = wx.createCanvasContext('canvasArc');
  
    //创建并返回绘图上下文context对象。 
    cxt_arc.setLineWidth(6);
    cxt_arc.setStrokeStyle('#d2d2d2');
    cxt_arc.setLineCap('round')
    cxt_arc.beginPath();//开始一个新的路径 
    cxt_arc.arc(60, 60, 50, 0, 2 * Math.PI, false);
    //设置一个原点(106,106)，半径为100的圆的路径到当前路径 
    cxt_arc.stroke();//对当前路径进行描边 

    cxt_arc.setLineWidth(6);
    cxt_arc.setStrokeStyle('#3ea6ff');
    cxt_arc.setLineCap('round')
    cxt_arc.beginPath();//开始一个新的路径 
    cxt_arc.arc(60, 60, 50, 0, Math.PI * 4 / 2 / 100 * progress, false);
    cxt_arc.stroke();//对当前路径进行描边 
    cxt_arc.draw();
}

module.exports = {
    drawCircle: drawCircle
}