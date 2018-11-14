import Vue from 'vue'
import Main from './pages/00-Main.vue'
import router from './router'

Vue.config.productionTip = false

import bButton from 'bootstrap-vue/es/components/button/button.js'
Vue.component('b-button', bButton);

new Vue({
  router,
  render: h => h(Main),
}).$mount('#app')
