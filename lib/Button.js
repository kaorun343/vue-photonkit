module.exports = {
  props: ['type', 'size', 'active'],
  render: function(h) {
    var size = 'btn-' + (this.size || '')
    var type = 'btn-' + (this.type ? this.type : 'default')

    var data = { staticClass: 'btn', class: [size, type, { active: this.active }] }

    return h('button', data, this.$slots.default)
  }
}
