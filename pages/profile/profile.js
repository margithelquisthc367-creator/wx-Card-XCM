const { currentUser, posts } = require('../../utils/mockData')

Page({
  data: {
    user: currentUser,
    myPosts: posts.filter((item) => item.author.id === currentUser.id),
    collections: posts.filter((item) => item.collected)
  },

  goDetail(event) {
    wx.navigateTo({ url: `/pages/detail/detail?id=${event.detail.id}` })
  }
})
