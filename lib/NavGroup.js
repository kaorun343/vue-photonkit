module.exports = {
  props: ['title'],
  render: function(h) {
    if (this.title) {
      return h('nav', { staticClass: 'nav-group' }, [
        h('h5', { staticClass: 'nav-group-title'}, this.title)
      ].concat(this.$slots.default))
    } else {
      return h('nav', { staticClass: 'nav-group' }, this.$slots.default)
    }
  }
}
