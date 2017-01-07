module.exports = {
  props: ['type', 'title'],
  render: function(h) {
    var data = { staticClass: 'toolbar', class: ['toolbar-' + this.type] }
    var title = h('h1', { staticClass: 'title' }, this.title)

    return h(this.type, data, [title].concat(this.$slots.default))
  }
}
