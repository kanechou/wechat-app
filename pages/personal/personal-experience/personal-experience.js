var postsdata = require('../../../data/experience-data.js')
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
this.setData({
  experience_key:postsdata.experienceList
})
  },
  // onReady:function(){
  //   // 页面渲染完成
  // },
  // onShow:function(){
  //   // 页面显示
  // },
  // onHide:function(){
  //   // 页面隐藏
  // },
  // onUnload:function(){
  //   // 页面关闭
  // }
  onExperienceTap:function(event){
    wx.switchTab({
      url: '../../offers/offers',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})