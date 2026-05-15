const { getUserActivityById } = require('../../utils/mockData')

Page({
  data: {
    activity: null
  },

  onLoad(options) {
    this.setData({ activity: getUserActivityById(options.id) })
  },

  goBack() {
    wx.navigateBack()
  },

  goDetail(event) {
    wx.navigateTo({ url: `/pages/detail/detail?id=${event.detail.id}` })
  },

  goAuthor(event) {
    wx.navigateTo({ url: `/pages/user-dynamic/user-dynamic?id=${event.detail.id}` })
  }
})
