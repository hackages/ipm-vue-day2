import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VeeValidate from 'vee-validate';
import store from './core/state/store';
import authenticationService from '@/core/authentication.service.ts';

Vue.use(VeeValidate);

Vue.config.productionTip = process.env.NODE_ENV === 'production';
authenticationService.checkAuth();
export default new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
