<template lang="html">
  <div>
    <btn v-for="type in types" :type="type.type">{{ type.type }}</btn>
  </div>
</template>

<script>
import { Button as Btn } from '../../src'

export default {
  data () {
    const types = ['default', 'primary', 'positive', 'negative', 'warning']
    return {
      types: types.map(type => ({ type }))
    }
  },
  components: { Btn }
}
</script>

<type lang="sass">
@import '~photon/dist/css/photon.css'
</type>
