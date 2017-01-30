export default {
  props: {
    icon: String,
    text: String
  },
  computed: {
    classes () {
      const icon = `icon-${this.icon}`
      return [`icon-${this.icon}`, { 'icon-text': this.text }]
    }
  },
  render (h) {
    return h('span', {
      staticClass: 'icon',
      class: this.classes
    }, this.$slots.default)
  },
  template: `
    <span class="icon" :class="classes"><slot></slot></span>
  `
}
