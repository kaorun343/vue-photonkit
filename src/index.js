import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Icon from './components/Icon'
import ListGroup from './components/ListGroup'
import ListGroupHeader from './components/ListGroupHeader'
import ListGroupItem from './components/ListGroupItem'
import NavGroup from './components/NavGroup'
import NavGroupItem from './components/NavGroupItem'
import Pane from './components/Pane'
import PaneGroup from './components/PaneGroup'
import TabGroup from './components/TabGroup'
import TabItem from './components/TabItem'
import Toolbar from './components/Toolbar'
import ToolbarActions from './components/ToolbarActions'
import PhotonkitWindow from './components/Window'
import WindowContent from './components/WindowContent'

export {
  Button, ButtonGroup,
  Icon,
  ListGroup, ListGroupHeader, ListGroupItem,
  NavGroup, NavGroupItem,
  Pane, PaneGroup,
  TabGroup, TabItem,
  Toolbar, ToolbarActions,
  PhotonkitWindow as Window, WindowContent
}

export default function install(Vue) {
  Vue.component('ph-button', Button)
  Vue.component('ph-button-group', ButtonGroup)
  Vue.component('ph-icon', Icon)
  Vue.component('ph-list-group', ListGroup)
  Vue.component('ph-list-group-header', ListGroupHeader)
  Vue.component('ph-list-group-item', ListGroupItem)
  Vue.component('ph-nav-group', NavGroup)
  Vue.component('ph-nav-group-item', NavGroupItem)
  Vue.component('ph-pane', Pane)
  Vue.component('ph-pane-group', PaneGroup)
  Vue.component('ph-tab-group', TabGroup)
  Vue.component('ph-tab-item', TabItem)
  Vue.component('ph-toolbar', Toolbar)
  Vue.component('ph-toolbar-actions', ToolbarActions)
  Vue.component('ph-window', PhotonkitWindow)
  Vue.component('ph-window-content', WindowContent)
}
