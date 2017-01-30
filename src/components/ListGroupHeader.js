export default {
  render (h) {
    return h('li', { staticClass: 'list-group-header' }, this.$slots.default)
  },
  template: `<li class="list-group-header"><slot></slot></li>`
}
