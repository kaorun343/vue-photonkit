module.exports = {
  props: ['src', 'active'],
  render: function(h) {
    var data = {
      staticClass: 'list-group-item',
      class: { active: this.active }
    }
    return h('li', data, [

      this.src ? h('img', {
        staticClass: 'img-circle media-object pull-left',
        attrs: { src: this.src, width: 32, height: 32 }
      }) : h(),

      h('div', { staticClass: 'media-body'}, this.$slots.default)
    ])
  }
}
