import template from './ListGroupItem.html'

export default {
  name: 'PhotonkitGroupItem',
  props: {
    src: String,
    active: Boolean
  },
  compouted: {
    classes () {
      return { active: this.active }
    }
  },
  render (h) {
    const data = {
      staticClass: 'list-group-item',
      class: this.classes
    }
    return h('li', data, [

      this.src ? h('img', {
        staticClass: 'img-circle media-object pull-left',
        attrs: { src: this.src, width: '32px', height: '32px' }
      }) : h(),

      h('div', { staticClass: 'media-body'}, this.$slots.default)
    ])
  },
  template
}
