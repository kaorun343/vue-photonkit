module.exports = {
  render (h) {
    return h('ul', { staticClass: 'list-group' }, this.$slots.default)
  },
  template: `<ul class="list-group"><slot></slot></ul>`
}
