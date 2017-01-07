<template lang="html">
  <window>
    <window-content>
      <pane-group>
        <pane>pane A</pane>
        <pane>pane B</pane>
        <pane>pane C</pane>
      </pane-group>
    </window-content>
  </window>
</template>

<script>
import Window from '../../lib/Window'
import WindowContent from '../../lib/WindowContent'
import PaneGroup from '../../lib/PaneGroup'
import Pane from '../../lib/Pane'
export default {
  components: { Window, WindowContent, PaneGroup, Pane }
}
</script>

<style lang="sass">
</style>
