module.exports = {
  props: ['size', 'sidebar'],
  render: function(h) {
    return h('div', {
      class: [
        this.size ? ('pane-' + this.size) : 'pane',
        { sidebar: this.sidebar }
      ]
    }, this.$slots.default)
  }
}
