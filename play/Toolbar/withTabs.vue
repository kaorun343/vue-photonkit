<template lang="html">
  <div class="window">
    <toolbar type="header" :title="title"></toolbar>

    <tab-group>
      <tab-item v-for="tab in tabs" :active="isActive(tab)" @cancel="cancel(tab)" @click.native="update(tab)">
        Tab {{ tab.index }}
      </tab-item>
      <tab-item :fixed="true" icon="plus" @click.native="add"></tab-item>
    </tab-group>
  </div>
</template>

<script>
import Toolbar from '../../lib/Toolbar'
import TabGroup from '../../lib/TabGroup'
import TabItem from '../../lib/TabItem'

export default {
  components: { Toolbar, TabGroup, TabItem },
  data () {
    return {
      tabs: [
        { index: 1, title: 'Tab' },
        { index: 2, title: 'Tab' },
        { index: 3, title: 'Tab' }
      ],
      active: 2
    }
  },
  computed: {
    title () {
      return `Header with tabs (active: ${this.active})`
    }
  },
  methods: {
    isActive (tab) {
      return tab.index === this.active
    },
    add () {
      this.$log('added')

      const last = this.tabs[this.tabs.length - 1].index
      this.tabs.push({ index: last + 1, title: 'Tab' })
    },
    update (tab) {
      this.$log(`updated to ${tab.index}`)
      this.active = tab.index
    },
    cancel (tab) {
      this.$log(`close tab ${tab.index}`)
      const index = this.tabs.findIndex(t => t === tab)
      this.tabs.splice(index, 1)
    }
  }
}
</script>

<style lang="sass">
@import '~photon/dist/css/photon.css'
</style>
