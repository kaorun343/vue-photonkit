var Icon = require('./Icon')

module.exports = {
  props: ['active', 'fixed', 'icon'],
  render: function(h) {
    var data = {
      staticClass: 'tab-item',
      class: {
        active: this.active,
        'tab-item-fixed': this.fixed
      }
    }

    return h('div', data, [
      h(Icon, {
        class: { 'icon-close-tab': !this.icon },
        props: { icon: this.icon || 'cancel' },
        nativeOn: {
          click: this.cancel
        }
      }),
      this.$slots.default
    ])
  },
  methods: {
    activate: function(e) {
      e.stopPropagation()
      this.$emit('activate')
    },
    cancel: function(e) {
      e.stopPropagation()
      this.$emit('cancel')
    }
  }
}
