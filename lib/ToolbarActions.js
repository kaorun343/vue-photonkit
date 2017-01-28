module.exports = {
  render (h) {
    return h('div', { staticClass: 'toolbar-actions' }, this.$slots.default)
  },
  template: `<div class="toolbar-actions"><slot></slot></div>`
}
