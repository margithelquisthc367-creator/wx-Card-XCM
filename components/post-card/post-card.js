Component({
  properties: {
    post: {
      type: Object,
      value: {}
    }
  },
  methods: {
    handleTap() {
      this.triggerEvent('tapcard', { id: this.data.post.id || this.data.post._id })
    },

    handleAuthorTap() {
      const author = this.data.post.author || {}
      this.triggerEvent('tapauthor', { id: author.id })
    }
  }
})
