const { introCategories } = require('../../utils/mockData')

Page({
  data: {
    tabs: introCategories
  },

  openDirectory(event) {
    wx.navigateTo({ url: `/pages/intro-videos/intro-videos?category=${event.currentTarget.dataset.value}` })
  },

  goBack() {
    wx.navigateBack()
  }
})
