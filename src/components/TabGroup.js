export default {
  render (h) {
    return h('div', { staticClass: 'tab-group' }, this.$slots.default)
  },
  template: `<div class="tab-group"><slot></slot></div>`
}
