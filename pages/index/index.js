//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../image/show1.png',
      '../../image/show2.png',
      '../../image/show3.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    textTel: "0758-2879578",
    textIndress:"肇庆市端州区玑东路车城水果批发市场南侧",
    iconTel:'../../image/info_tel.png',
    iconIndress:'../../image/info_indress.png'
  },
  
  onLoad: function () {

  },

  toTel:function(){
    wx.makePhoneCall({
      phoneNumber: '0758-2879578'
    })
  },

  toMap:function(){
    wx.navigateTo({
      url: '../../pages/map/map'
    })
  }

})
