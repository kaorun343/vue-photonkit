module.exports = {
  render: function(h) {
    return h('li', { staticClass: 'list-group-header' }, this.$slots.default)
  }
}
