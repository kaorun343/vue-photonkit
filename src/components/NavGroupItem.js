export default {
  name: 'PhotonkitNavGroupItem',
  props: {
    active: Boolean
  },
  render (h) {
    return h('span', {
      staticClass: 'nav-group-item',
      class: { active: this.active }
    }, this.$slots.default)
  },
  template: `
    <span class="nav-group-item" :class="{ active: active }">
      <slot></slot>
    </span>
  `
}
