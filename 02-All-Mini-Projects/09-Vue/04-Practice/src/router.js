import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/01-Home.vue'
import Swapi from './pages/02-Swapi.vue'
import About from './pages/03-About.vue'
import Extra from './pages/04-Extra.vue'
import VBClasses from './pages/05-VBT-Classes.vue'
import Bootstrap1 from './pages/06-Bootstrap1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home },
    {path: '/swapi', component: Swapi },
    {path: '/about', component: About },
    {path: '/extra', component: Extra },
    {path: '/cssclasses', component: VBClasses },
    {path: '/boots1', component: Bootstrap1 },
  ]
})