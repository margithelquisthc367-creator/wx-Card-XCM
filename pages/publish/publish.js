const { publishCategories } = require('../../utils/mockData')

Page({
  data: {
    publishCategories,
    form: {
      title: '',
      intro: '',
      category: ''
    }
  },

  updateTitle(event) {
    this.setData({ 'form.title': event.detail.value.slice(0, 30) })
  },

  updateIntro(event) {
    this.setData({ 'form.intro': event.detail.value.slice(0, 200) })
  },

  chooseCategory(event) {
    this.setData({ 'form.category': event.currentTarget.dataset.value })
  },

  showUploadToast() {
    wx.showToast({ title: '第一阶段暂不支持真实上传', icon: 'none' })
  },

  submit() {
    const { title, intro, category } = this.data.form
    if (!title.trim()) {
      wx.showToast({ title: '请填写标题', icon: 'none' })
      return
    }
    if (!intro.trim()) {
      wx.showToast({ title: '请填写简介', icon: 'none' })
      return
    }
    if (!category) {
      wx.showToast({ title: '请选择分类', icon: 'none' })
      return
    }
    wx.showToast({ title: '发布成功，这是前端模拟效果', icon: 'none' })
  }
})
