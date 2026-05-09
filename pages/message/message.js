const { messages } = require('../../utils/mockData')

Page({
  data: {
    messages,
    entries: [
      { name: '评论', icon: '☷', count: 12 },
      { name: '点赞', icon: '♡', count: 28 },
      { name: '收藏', icon: '☆', count: 9 }
    ]
  }
})
