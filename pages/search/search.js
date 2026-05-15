const { posts } = require('../../utils/mockData')

Page({
  data: {
    keyword: '',
    results: []
  },

  onLoad() {
    this.setData({ results: posts })
  },

  updateKeyword(event) {
    const keyword = event.detail.value
    this.setData({ keyword }, () => this.search())
  },

  search() {
    const keyword = this.data.keyword.trim().toLowerCase()
    if (!keyword) {
      this.setData({ results: posts })
      return
    }
    const results = posts.filter((item) => {
      return [item.title, item.intro, item.author.nickname].some((value) => {
        return String(value).toLowerCase().includes(keyword)
      })
    })
    this.setData({ results })
  },

  clearSearch() {
    this.setData({ keyword: '', results: posts })
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
