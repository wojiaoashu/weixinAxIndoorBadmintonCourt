// pages/booking/booking.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowHour:8,
    nums: 16,
    tdBgColor: "#16b9e9",
    tdColor: "#fff"
  },

  onLoad: function () {
    var _this = this;
    var h = new Date().getHours();
    switch (h) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        _this.setData({
          nowHour: h,
          nums: 24 - h
        });
        break;
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
        _this.setData({
          nowHour: 18,
          nums: 6
        });
        break;          
      default:
        return false;
    }
  },

  toBook:function(){
    wx.makePhoneCall({
      phoneNumber: '0758-2879578'
    })
  }


})