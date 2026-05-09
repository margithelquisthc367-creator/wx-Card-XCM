const { introCategories, posts } = require('../../utils/mockData')

Page({
  data: {
    tabs: introCategories,
    active: '花切新手',
    visiblePosts: []
  },

  onLoad(options) {
    const active = options.category || this.data.active
    this.setData({ active }, () => this.refreshList())
  },

  refreshList() {
    this.setData({
      visiblePosts: posts.filter((item) => item.category === this.data.active)
    })
  },

  switchTab(event) {
    this.setData({ active: event.currentTarget.dataset.value }, () => this.refreshList())
  },

  goBack() {
    wx.navigateBack()
  },

  goDetail(event) {
    wx.navigateTo({ url: `/pages/detail/detail?id=${event.detail.id}` })
  }
})
