import Vue from 'vue'
import Main from './pages/00-Main.vue'
import router from './router'

Vue.config.productionTip = false

import { Alert, Badge, Breadcrumb, Button, ButtonToolbar, ButtonGroup, Card, Carousel, Collapse, Dropdown, Embed, Form, FormGroup, FormInput, FormTextarea, FormFile, FormCheckbox, FormRadio, FormSelect, Image, InputGroup, Jumbotron, Layout, Link, ListGroup, Media, Modal, Nav, Navbar, Pagination, PaginationNav, Popover, Progress, Table, Tabs, Tooltip } from 'bootstrap-vue/es/components';
Vue.use(Alert)
Vue.use(Badge)
Vue.use(Breadcrumb)
Vue.use(Button)
Vue.use(ButtonToolbar)
Vue.use(ButtonGroup)
Vue.use(Card)
Vue.use(Carousel)
Vue.use(Layout)
Vue.use(Collapse)
Vue.use(Dropdown)
Vue.use(Embed)
Vue.use(Form)
Vue.use(FormGroup)
Vue.use(FormCheckbox)
Vue.use(FormRadio)
Vue.use(FormInput)
Vue.use(FormTextarea)
Vue.use(FormFile)
Vue.use(FormSelect)
Vue.use(Image)
Vue.use(Jumbotron)
Vue.use(Link)
Vue.use(ListGroup)
Vue.use(Media)
Vue.use(Modal)
Vue.use(Nav)
Vue.use(Navbar)
Vue.use(Pagination)
Vue.use(PaginationNav)
Vue.use(Popover)
Vue.use(Progress)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Tooltip)

new Vue({
  router,
  render: h => h(Main),
}).$mount('#app')
