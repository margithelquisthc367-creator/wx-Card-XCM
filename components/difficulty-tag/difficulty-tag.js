Component({
  properties: {
    level: {
      type: String,
      value: '简单',
      observer(value) {
        this.setData({ variant: this.getVariant(value) })
      }
    }
  },
  data: {
    variant: 'easy'
  },
  methods: {
    getVariant(level) {
      const map = {
        简单: 'easy',
        中等: 'medium',
        困难: 'hard'
      }
      return map[level] || 'easy'
    }
  }
})
