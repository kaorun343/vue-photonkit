module.exports = {
  props: ['active'],
  render: function(h) {
    return h('span', {
      staticClass: 'nav-group-item',
      class: { active: this.active }
    }, this.$slots.default)
  }
}
