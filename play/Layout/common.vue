<template lang="html">
  <window>
    <toolbar type="header" title="Header"></toolbar>
    <window-content>
      <pane-group>
        <pane size="sm" :sidebar="true">sidebar</pane>
        <pane>main</pane>
      </pane-group>
    </window-content>
    <toolbar type="footer" title="Footer"></toolbar>
  </window>
</template>

<script>
import Window from '../../lib/Window'
import WindowContent from '../../lib/WindowContent'
import PaneGroup from '../../lib/PaneGroup'
import Pane from '../../lib/Pane'
import Toolbar from '../../lib/Toolbar'
export default {
  components: { Window, WindowContent, PaneGroup, Pane, Toolbar }
}
</script>

<style lang="sass">
</style>
