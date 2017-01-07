module.exports = {
  render: function(h) {
    return h('ul', { staticClass: 'list-group' }, this.$slots.default)
  }
}
