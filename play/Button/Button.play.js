import { play } from 'vue-play'

import basic from './basic.vue'
import type from './type.vue'
import size from './size.vue'

play('Button', module)
  .add('basic', basic)
  .add('type', type)
  .add('size', size)
