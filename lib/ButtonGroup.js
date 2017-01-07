module.exports = {
  functional: true,
  render: function(h, context) {
    return h('div', { staticClass: 'btn-group' }, context.children)
  }
}
