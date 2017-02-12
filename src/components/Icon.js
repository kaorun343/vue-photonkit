export default {
  name: 'PhotonkitIcon',
  props: {
    icon: String,
    text: Boolean
  },
  computed: {
    classes () {
      return [`icon-${this.icon}`, { 'icon-text': this.text }]
    }
  },
  render (h) {
    return h('span', {
      staticClass: 'icon',
      class: this.classes
    }, this.$slots.default)
  },
  template: `<span class="icon" :class="classes"><slot></slot></span>`
}
