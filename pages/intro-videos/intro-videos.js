const { introVideoGroups } = require('../../utils/mockData')

Page({
  data: {
    category: '',
    videos: []
  },

  onLoad(options) {
    const category = options.category || '花切新手'
    this.setData({
      category,
      videos: introVideoGroups[category] || []
    })
  },

  goBack() {
    wx.navigateBack()
  },

  showPreview() {
    wx.showToast({ title: '第一阶段仅展示免费教学目录', icon: 'none' })
  }
})
