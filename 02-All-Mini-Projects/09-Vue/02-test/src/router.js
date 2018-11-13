import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/01-Home.vue';
import Swapi from './pages/02-Swapi.vue';
import About from './pages/03-About.vue';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/swapi',
    component: Swapi
  }, {
    path: '/about',
    component: About
  }, ]
})