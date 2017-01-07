module.exports = {
  render: function(h) {
    return h('div', { staticClass: 'pane-group' }, this.$slots.default)
  }
}
