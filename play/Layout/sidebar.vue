<template lang="html">
  <window>
    <window-content>
      <pane-group>
        <pane size="sm" :sidebar="true">sidebar</pane>
        <pane>main</pane>
      </pane-group>
    </window-content>
  </window>
</template>

<script>
import { Window, WindowContent, PaneGroup, Pane } from '../../src'
export default {
  components: { Window, WindowContent, PaneGroup, Pane }
}
</script>

<style lang="sass">
</style>
