import template from './Toolbar.html'

export default {
  name: 'PhotonkitToolbar',
  props: {
    type: String,
    title: String
  },
  computed: {
    classes () {
      return [
        `toolbar-${this.type}`
      ]
    }
  },
  render (h) {
    const data = { staticClass: 'toolbar', class: this.classes }
    const title = h('h1', { staticClass: 'title' }, this.title)

    return h(this.type, data, [title, this.$slots.default])
  },
  template
}
