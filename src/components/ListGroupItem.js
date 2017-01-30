export default {
  name: 'PhotonkitGroupItem',
  props: {
    src: String,
    active: Boolean
  },
  render (h) {
    const data = {
      staticClass: 'list-group-item',
      class: { active: this.active }
    }
    return h('li', data, [

      this.src ? h('img', {
        staticClass: 'img-circle media-object pull-left',
        attrs: { src: this.src, width: '32px', height: '32px' }
      }) : h(),

      h('div', { staticClass: 'media-body'}, this.$slots.default)
    ])
  },
  template: `
    <li class="img-group-item" :class="{ active: active }">
      <img v-if="src" class="img-circle media-object pull-left" :src="src" width="32px" height="32px">
      <div class="media-body">
        <slot></slot>
      </div>
    </li>
  `
}
