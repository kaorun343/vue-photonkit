import Icon from './Icon'

export default {
  name: 'PhotonkitTabItem',
  components: { Icon },
  props: {
    active: Boolean,
    fixed: Boolean,
    icon: String
  },
  computed: {
    classes () {
      return {
        active: this.active,
        'tab-item-fixed': this.fixed
      }
    },
    iconClasses () {
      return { staticClass: 'tab-item', class: this.classes }
    }
  },
  render (h) {
    return h('div', this.iconClasses, [
      this.renderIcon(h),
      this.$slots.default
    ])
  },
  methods: {
    renderIcon (h) {
      return h('icon', {
        class: { 'icon-close-tab': !this.icon },
        props: { icon: this.icon || 'cancel' },
        nativeOn: { click: this.cancel }
      })
    },
    cancel (e) {
      e.stopPropagation()
      this.$emit('cancel')
    }
  },
  template: `
    <div class="tab-item" :class="classes">
      <icon :class="icon-classes" :icon="icon || 'cancel'" @click.native="cancel"></icon>
      <slot></slot>
    </div>
  `
}
