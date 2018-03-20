var postsdata = require('../../data/personal-data.js')
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

this.setData({
  post_key:postsdata.postList
})
  },
onIntroduceTap:function(event){
  var pageprops = event.currentTarget.dataset.pages
  console.log(pageprops)
  var url =  'personal-'+pageprops+'/personal-'+pageprops
  console.log(url)
wx.navigateTo({
  url: url,
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