// pages/mine/mine.js
Page({
  data:{
    erweima: '../../image/me.png',
    displayStle: 'none'
  },

  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },

  onReady: function (e) {
    var _this = this;

    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')
    var i = 1 // 笑脸来回次数
    var v = 1 // 笑脸水平速度
    var x = 0 // 笑脸水平坐标
    var timer = setInterval(function () {
      if(i > 5){
        _this.setData({
          displayStle: 'block'
        });
        clearInterval(timer)
      }
      render(context)
      update(context)
    }, 30)

    function render(context){
      context.beginPath()
      context.setStrokeStyle("#93d16f")
      context.setLineWidth(5)
      // context.rect(0, 0, 200, 200)
      // context.stroke()
      context.setStrokeStyle("#93d16f")
      context.setLineWidth(2)
      context.moveTo(160, 100)
      context.arc(100, 100, 60, 0, 2 * Math.PI, true)
      context.moveTo(140, 100)
      context.arc(100, 100, 40, 0, Math.PI, false)
      context.moveTo(85, 80)
      context.arc(80, 80, 5, 0, 2 * Math.PI, true)
      context.moveTo(125, 80)
      context.arc(120, 80, 5, 0, 2 * Math.PI, true)
      context.stroke()
      context.draw()
      context.closePath()
    }

    function update(context){
      x += v
      if (x > 360){
        v = -1
      }else if(x < -300){
        v = 1
      }
      // 记录来回次数
      if(x == -300){
        i += 1
      }
      context.clearRect(0, 0, 200, 200)
      context.translate(x, 0)
    }

  }
})