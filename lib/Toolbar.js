module.exports = {
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
    var data = { staticClass: 'toolbar', class: this.classes }
    var title = h('h1', { staticClass: 'title' }, this.title)

    return h(this.type, data, [title, this.$slots.default])
  },
  template: `
    <div class="toolbar" :class="classes">
      <h1 class="title">{{ title }}</h1>
      <slot></slot>
    </div>
  `
}
