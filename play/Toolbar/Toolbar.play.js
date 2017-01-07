import { play } from 'vue-play'

import basic from './basic.vue'
import withActions from './withActions.vue'
import withTabs from './withTabs.vue'

play('Toolbar', module)
  .add('basic', basic)
  .add('with actions', withActions)
  .add('with tabs', withTabs)
