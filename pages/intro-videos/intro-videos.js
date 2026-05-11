const { introVideoGroups, introVideoLevels } = require('../../utils/mockData')

Page({
  data: {
    category: '',
    levels: introVideoLevels,
    activeLevel: '初级',
    allVideos: [],
    videos: []
  },

  onLoad(options) {
    const category = options.category || '入门花切'
    const allVideos = introVideoGroups[category] || []
    this.setData({
      category,
      allVideos
    }, () => this.filterVideos())
  },

  filterVideos() {
    this.setData({
      videos: this.data.allVideos.filter((item) => item.level === this.data.activeLevel)
    })
  },

  switchLevel(event) {
    this.setData({ activeLevel: event.currentTarget.dataset.level }, () => this.filterVideos())
  },

  goBack() {
    wx.navigateBack()
  },

  showPreview() {
    wx.showToast({ title: '第一阶段仅展示免费教学目录', icon: 'none' })
  },

  addVideo() {
    wx.showToast({ title: '后续可在这里添加教学视频', icon: 'none' })
  }
})
