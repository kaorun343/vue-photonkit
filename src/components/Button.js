export default {
  props: {
    type: String,
    size: String,
    active: Boolean
  },
  computed: {
    classes () {
      const size = `btn-${this.size || ''}`
      const type = `btn-${this.type ? this.type : 'default'}`
      return [size, type, { active: this.active }]
    }
  },
  render (h) {
    return h('button', {
      staticClass: 'btn',
      class: this.classes
    }, this.$slots.default)
  },
  template: `
    <button class="btn" :class="classes">
      <slot></slot>
    </button>
  `
}
