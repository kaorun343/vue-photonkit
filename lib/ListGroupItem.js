module.exports = {
  props: ['src', 'title', 'text'],
  render: function(h) {
    return h('li', { staticClass: 'list-group-item' }, [

      this.src ? h('img', {
        staticClass: 'img-circle media-object pull-left',
        attrs: { src: this.src, width: 32, height: 32 }
      }) : h(),

      h('div', { staticClass: 'media-body'}, [
        h('strong', this.title),
        h('p', this.text)
      ])
    ])
  }
}
