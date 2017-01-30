<template lang="html">
  <list-group title="Favorites">
    <list-group-header>
      <input class="form-control" type="text" placeholder="Search for someone">
    </list-group-header>
    <list-group-item v-for="n in 5" :active="n % 5 == 2" @click.native="clicked(n)">
      <strong>{{ n }}. {{ title }}</strong>
      <p>{{ text }}</p>
    </list-group-item>
  </list-group>
</template>

<script>
import { ListGroup, ListGroupHeader, ListGroupItem, Icon } from '../../src'

export default {
  data () {
    return {
      title: 'List item title',
      text: 'Lorem ipsum dolor sit amet.'
    }
  },
  methods: {
    clicked (n) {
      this.$log(`item ${n} clicked`)
    }
  },
  components: { ListGroup, ListGroupHeader, ListGroupItem, Icon }
}
</script>

<style lang="sass">
@import '~photon/dist/css/photon.css'
</style>
