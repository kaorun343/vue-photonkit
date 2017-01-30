import template from './NavGroup.html'

export default {
  name: 'PhotonkitNavGroup',
  props: {
    title: String
  },
  render (h) {
    return h('nav', { staticClass: 'nav-group' }, [
      this.title ? h('h5', { staticClass: 'nav-group-title' }, this.title) : h(),
      this.$slots.default
    ])
  },
  template
}
