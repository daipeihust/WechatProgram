const app = getApp()



Page({
  data: {
  },
  onLoad() {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },

  go1() {
    wx.navigateTo({
      url: '/demo-1/index',
    })
  },

  go2() {
    wx.navigateTo({
      url: '/demo-2/index',
    })
  },

  goGrid1() {
    wx.navigateTo({
      url: '/grid-demo-1/index',
    })
  },

  goGrid2() {
    wx.navigateTo({
      url: '/grid-demo-2/index',
    })
  },

  goGrid3() {
    wx.navigateTo({
      url: '/grid-demo-3/index',
    })
  },

  goGrid4() {
    wx.navigateTo({
      url: '/grid-demo-4/index',
    })
  }
})