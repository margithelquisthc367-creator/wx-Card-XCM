const { posts } = require('../../utils/mockData')

Page({
  data: {
    visiblePosts: posts.filter((item) => item.category === '牌展')
  },

  goBack() {
    wx.navigateBack()
  },

  goDetail(event) {
    wx.navigateTo({ url: `/pages/detail/detail?id=${event.detail.id}` })
  }
})
