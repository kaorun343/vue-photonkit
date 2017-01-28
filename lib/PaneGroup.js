module.exports = {
  render (h) {
    return h('div', { staticClass: 'pane-group' }, this.$slots.default)
  },
  template: `<div class="pane-group"><slot></slot></div>`
}
