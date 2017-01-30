export default {
  render (h) {
    return h('div', { staticClass: 'window-content' }, this.$slots.default)
  },
  template: `<div class="window-content"><slot></slot></div>`
}
