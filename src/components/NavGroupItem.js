export default {
  name: 'PhotonkitNavGroupItem',
  props: {
    active: Boolean
  },
  computed: {
    classes () {
      return { active: this.active }
    }
  },
  render (h) {
    return h('span', {
      staticClass: 'nav-group-item',
      class: this.classes
    }, this.$slots.default)
  },
  template: `<span class="nav-group-item" :class="classes"><slot></slot></span>`
}
