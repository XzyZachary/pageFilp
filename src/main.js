import Vue from 'vue';
import App from './App.vue';
import 'amfe-flexible/index.js'
import 'animate.css';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
