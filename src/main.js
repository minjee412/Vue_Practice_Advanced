import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index';
import { store } from './store';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store, // store: store 의 줄인 표현
}).$mount('#app');
