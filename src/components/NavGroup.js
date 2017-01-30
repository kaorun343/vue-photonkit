export default {
  name: 'PhotonkitNavGroup',
  props: {
    title: String
  },
  render (h) {
    if (this.title) {
      return h('nav', { staticClass: 'nav-group' }, [
        h('h5', { staticClass: 'nav-group-title'}, this.title)
      ].concat(this.$slots.default))
    } else {
      return h('nav', { staticClass: 'nav-group' }, this.$slots.default)
    }
  },
  template: `
    <nav class="nav-group">
      <h5 v-if="title" class="nav-group-title">{{ title }}</h5>
      <slot></slot>
    </nav>
  `
}
