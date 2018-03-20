// pages/offers/offers.js
Page({
  data: {

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },

  onBindFocus: function (event) {

  },
  formSubmit: function (event) {
    const username = event.detail.value.username.trim();
    const telephone = event.detail.value.telephone.trim();
    const floorSpace = event.detail.value.floorSpace.trim();
    if(username.length == 0){
      wx.showModal({
        title:'您的姓名不能为空!',
        content:'您的姓名不能为空',
        confirmColor:'#ed6c00'
      })
      return false;
    }
    if(telephone.length !== 11){
      wx.showModal({
        title:'您的手机号码格式不正确!',
        content:'请输入您正确的11位手机号码',
        confirmColor:'#ed6c00'
      })
      return false;
    }
    if(floorSpace.length == 0){
      wx.showModal({
        title:'您的姓名不能为空!',
        content:'您的姓名不能为空',
        confirmColor:'#ed6c00'
      })
      return false;
    }
    const dsp = {
      username:username,
      telephone:telephone,
      floorSpace:floorSpace
    }
    console.log(dsp)
    wx.showModal({
        title:'恭喜您申请成功!',
        content:'我们将在24小时之内联系您',
        confirmColor:'#ed6c00'
      })
  },
  formReset: function (event) {
    console.log('重置')
  }
})