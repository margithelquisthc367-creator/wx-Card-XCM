const { publishCategories } = require('../../utils/mockData')

function formatDuration(seconds = 0) {
  const total = Math.max(Math.round(seconds), 0)
  const minutes = `${Math.floor(total / 60)}`.padStart(2, '0')
  const remainSeconds = `${total % 60}`.padStart(2, '0')
  return `${minutes}:${remainSeconds}`
}

function normalizeMedia(file) {
  const fileType = file.fileType || file.type || 'image'
  const isVideo = fileType === 'video'

  return {
    type: isVideo ? 'video' : 'image',
    path: file.tempFilePath,
    duration: isVideo ? formatDuration(file.duration || 0) : '',
    size: file.size || 0
  }
}

function orderMedia(mediaFiles) {
  const videos = mediaFiles.filter((item) => item.type === 'video')
  const images = mediaFiles.filter((item) => item.type === 'image')
  return videos.concat(images)
}

Page({
  data: {
    publishCategories,
    mediaFiles: [],
    submitting: false,
    errorText: '',
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

  chooseMedia() {
    if (wx.chooseMedia) {
      wx.chooseMedia({
        count: 6,
        mediaType: ['image', 'video'],
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        success: (res) => {
          const mediaFiles = orderMedia(res.tempFiles.map(normalizeMedia))
          this.setData({ mediaFiles, errorText: '' })
          wx.showToast({ title: '已选择，前端模拟', icon: 'none' })
        },
        fail: () => {
          wx.showToast({ title: '未选择媒体', icon: 'none' })
        }
      })
      return
    }

    wx.chooseImage({
      count: 6,
      sourceType: ['album', 'camera'],
      success: (res) => {
        const mediaFiles = res.tempFilePaths.map((path) => ({
          type: 'image',
          path,
          duration: '',
          size: 0
        }))
        this.setData({ mediaFiles, errorText: '' })
        wx.showToast({ title: '已选择，前端模拟', icon: 'none' })
      },
      fail: () => {
        wx.showToast({ title: '未选择图片', icon: 'none' })
      }
    })
  },

  removeMedia(event) {
    const index = event.currentTarget.dataset.index
    const mediaFiles = this.data.mediaFiles.filter((_, itemIndex) => itemIndex !== index)
    this.setData({ mediaFiles })
  },

  validateForm() {
    const { title, intro, category } = this.data.form
    if (!title.trim()) return '请填写标题'
    if (!intro.trim()) return '请填写简介'
    if (!category) return '请选择分类'
    if (this.data.mediaFiles.length === 0) return '请上传照片或视频'
    return ''
  },

  submit() {
    if (this.data.submitting) return
    const message = this.validateForm()
    if (message) {
      this.setData({ errorText: message })
      wx.showToast({ title: message, icon: 'none' })
      return
    }

    this.setData({ submitting: true, errorText: '' })
    setTimeout(() => {
      this.setData({ submitting: false })
      wx.showToast({ title: '发布成功，前端模拟', icon: 'success' })
    }, 500)
  }
})
