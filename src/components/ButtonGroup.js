export default {
  render (h) {
    return h('div', { staticClass: 'btn-group' }, this.$slots.default)
  },
  template: `<div class="btn-group"><slot></slot></div>`
}
