import Icon from './Icon'
import template from './TabItem.html'

export default {
  name: 'PhotonkitTabItem',
  components: { Icon },
  props: {
    active: Boolean,
    fixed: Boolean,
    icon: String
  },
  computed: {
    tabItemClasses () {
      return { active: this.active, 'tab-item-fixed': this.fixed }
    },
    iconClasses () {
      return { 'icon-close-tab': !this.icon }
    }
  },
  render (h) {
    const icon = h('icon', {
      class: this.iconClasses,
      props: { icon: this.icon || 'cancel' },
      nativeOn: { click: this.cancel }
    })

    return h('div', {
      class: this.tabItemClasses,
      staticClass: 'tab-item'
    }, [ icon, this.$slots.default ])
  },
  methods: {
    cancel (e) {
      e.stopPropagation()
      this.$emit('cancel')
    }
  },
  template
}
