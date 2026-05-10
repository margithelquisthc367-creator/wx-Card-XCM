const { posts, comments } = require('../../utils/mockData')

Page({
  data: {
    post: null,
    comments: [],
    inputValue: ''
  },

  onLoad(options) {
    const id = Number(options.id || posts[0].id)
    const post = posts.find((item) => item.id === id) || posts[0]
    this.setData({
      post: { ...post },
      comments: comments.filter((item) => item.postId === post.id)
    })
  },

  goBack() {
    wx.navigateBack()
  },

  goUser(event) {
    wx.navigateTo({ url: `/pages/user-dynamic/user-dynamic?id=${event.currentTarget.dataset.id}` })
  },

  stopTap() {},

  toggleLike() {
    const post = this.data.post
    const liked = !post.liked
    this.setData({
      post: {
        ...post,
        liked,
        likes: liked ? post.likes + 1 : post.likes - 1
      }
    })
  },

  toggleCollect() {
    const post = this.data.post
    this.setData({ post: { ...post, collected: !post.collected } })
  },

  updateComment(event) {
    this.setData({ inputValue: event.detail.value })
  },

  sendComment() {
    const value = this.data.inputValue.trim()
    if (!value) {
      wx.showToast({ title: '请输入评论', icon: 'none' })
      return
    }
    const comment = {
      id: Date.now(),
      postId: this.data.post.id,
      author: { id: 1, nickname: '我', avatar: '我', level: 'Lv.1' },
      content: value,
      likes: 0,
      createdAt: '刚刚'
    }
    this.setData({
      comments: [comment, ...this.data.comments],
      inputValue: '',
      'post.comments': this.data.post.comments + 1
    })
  }
})
