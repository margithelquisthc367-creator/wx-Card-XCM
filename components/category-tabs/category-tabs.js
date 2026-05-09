Component({
  properties: {
    categories: {
      type: Array,
      value: []
    },
    active: {
      type: String,
      value: '推荐'
    }
  },
  methods: {
    handleTap(event) {
      const value = event.currentTarget.dataset.value
      this.triggerEvent('change', { value })
    }
  }
})
