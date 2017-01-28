module.exports = {
  props: {
    size: String,
    sidebar: Boolean
  },
  computed: {
    classes () {
      return [
        this.size ? `pane-${this.size}` : 'pane',
        { sidebar: this.sidebar }
      ]
    }
  },
  render (h) {
    return h('div', { class: this.classes }, this.$slots.default)
  },
  template: `<div :class="classes"><slot></slot></div>`
}
