import { play } from 'vue-play'

import application from './application.vue'
import paned from './paned.vue'
import sidebar from './sidebar.vue'
import miniSidebar from './miniSidebar.vue'
import common from './common.vue'

play('Layout', module)
  .add('Application layout', application)
  .add('Paned layout', paned)
  .add('Sidebar layout', sidebar)
  .add('Mini-sidebar layout', miniSidebar)
  .add('Common layout', common)
