<template lang="html">
  <nav-group title="Favorites">
    <nav-group-item :active="true"><icon icon="home"></icon>Home</nav-group-item>
    <nav-group-item><icon icon="download"></icon>Downloads</nav-group-item>
    <nav-group-item><icon icon="folder"></icon>Documents</nav-group-item>
    <nav-group-item><icon icon="signal"></icon>AirPlay</nav-group-item>
    <nav-group-item><icon icon="print"></icon>Applications</nav-group-item>
    <nav-group-item><icon icon="cloud"></icon>Desktop</nav-group-item>
  </nav-group>
</template>

<script>
import NavGroup from '../../lib/NavGroup'
import NavGroupItem from '../../lib/NavGroupItem'
import Icon from '../../lib/Icon'

export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: { NavGroup, NavGroupItem, Icon }
}
</script>

<style lang="sass">
@import '~photon/dist/css/photon.css'
</style>
