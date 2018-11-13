import Vue from 'vue'
import App from './App.vue'
import router from './router';

// import BootstrapVue from 'bootstrap-vue';
// Vue.use(BootstrapVue);

Vue.config.productionTip = false

// import bCard from 'bootstrap-vue/es/components/card/card'
// Vue.component('b-card', bCard);

// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
import { Button } from 'bootstrap-vue/es/components';
Vue.component('b-button7', Button);
// Vue.use(Button);

// import { Card } from 'bootstrap-vue/es/components/card/card';
// Vue.use(Card);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
