<template lang="html">
  <div class="window">
    <toolbar type="header" title="Header"></toolbar>
    <div class="window-content"></div>
    <toolbar type="footer" title="Footer"></toolbar>
  </div>
</template>

<script>
import Toolbar from '../../lib/Toolbar'

export default {
  components: { Toolbar }
}
</script>

<style lang="sass">
@import '~photon/dist/css/photon.css'
</style>
