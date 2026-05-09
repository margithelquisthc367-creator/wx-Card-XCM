const { categories, posts } = require('../../utils/mockData')

Page({
  data: {
    categories,
    activeCategory: '推荐',
    keyword: '',
    page: 1,
    pageSize: 5,
    visiblePosts: [],
    allPosts: posts
  },

  onLoad() {
    this.refreshList()
  },

  refreshList() {
    const list = this.getFilteredPosts()
    this.setData({
      page: 1,
      visiblePosts: list.slice(0, this.data.pageSize)
    })
  },

  getFilteredPosts() {
    const { activeCategory, allPosts } = this.data
    if (activeCategory === '推荐') return allPosts
    if (activeCategory === '入门XCM') {
      return allPosts.filter((item) => ['花切新手', '魔术流程'].includes(item.category))
    }
    return allPosts.filter((item) => item.category === activeCategory)
  },

  handleCategoryChange(event) {
    const value = event.detail.value
    if (value === '入门XCM') {
      wx.navigateTo({ url: '/pages/intro/intro' })
      return
    }
    if (value === '牌展') {
      wx.navigateTo({ url: '/pages/card-show/card-show' })
      return
    }
    this.setData({ activeCategory: value }, () => this.refreshList())
  },

  goSearch() {
    wx.navigateTo({ url: '/pages/search/search' })
  },

  goDetail(event) {
    wx.navigateTo({ url: `/pages/detail/detail?id=${event.detail.id}` })
  },

  onPullDownRefresh() {
    wx.showToast({ title: '已刷新', icon: 'success' })
    this.refreshList()
    setTimeout(() => wx.stopPullDownRefresh(), 500)
  },

  onReachBottom() {
    const nextPage = this.data.page + 1
    const list = this.getFilteredPosts()
    const nextVisible = list.slice(0, nextPage * this.data.pageSize)
    if (nextVisible.length === this.data.visiblePosts.length) {
      wx.showToast({ title: '没有更多了', icon: 'none' })
      return
    }
    wx.showLoading({ title: '加载中' })
    setTimeout(() => {
      this.setData({ page: nextPage, visiblePosts: nextVisible })
      wx.hideLoading()
    }, 400)
  }
})
