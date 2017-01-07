module.exports = {
  functional: true,
  render: function(h, context) {
    return h('div', { staticClass: 'window-content' }, context.children)
  }
}
