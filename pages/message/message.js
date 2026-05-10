const { messages, messageGroups } = require('../../utils/mockData')

Page({
  data: {
    messages: [],
    entries: messageGroups,
    activeType: '发布'
  },

  onLoad() {
    this.filterMessages()
  },

  filterMessages() {
    this.setData({
      messages: messages.filter((item) => item.type === this.data.activeType)
    })
  },

  switchType(event) {
    this.setData({ activeType: event.currentTarget.dataset.type }, () => this.filterMessages())
  }
})
