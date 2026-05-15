const { currentUser, profileFeeds } = require('../../utils/mockData')

Page({
  data: {
    user: currentUser,
    tabs: [
      { key: 'published', name: '发布' },
      { key: 'collected', name: '收藏' },
      { key: 'liked', name: '获赞' }
    ],
    activeTab: 'published',
    visiblePosts: profileFeeds.published
  },

  switchTab(event) {
    const key = event.currentTarget.dataset.key
    this.setData({
      activeTab: key,
      visiblePosts: profileFeeds[key] || []
    })
  },

  goDetail(event) {
    wx.navigateTo({ url: `/pages/detail/detail?id=${event.detail.id}` })
  },

  goAuthor(event) {
    wx.navigateTo({ url: `/pages/user-dynamic/user-dynamic?id=${event.detail.id}` })
  }
})
