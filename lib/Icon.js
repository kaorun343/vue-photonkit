module.exports = {
  props: ['icon', 'text'],
  render: function(h) {

    var data = {
      staticClass: 'icon',
      class: ['icon-' + this.icon, { 'icon-text': this.text }]
    }

    return h('span', data, this.$slots.default)
  }
}
