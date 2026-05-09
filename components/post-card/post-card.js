Component({
  properties: {
    post: {
      type: Object,
      value: {}
    }
  },
  methods: {
    handleTap() {
      this.triggerEvent('tapcard', { id: this.data.post.id })
    }
  }
})
