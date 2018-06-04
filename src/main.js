import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VeeValidate from 'vee-validate';
import authenticationService from '@/core/services/authentication.service';
import settingsProvider from '@/core/services/settings.provider';

Vue.use(VeeValidate);

Vue.config.productionTip = process.env.NODE_ENV === 'production';

authenticationService.checkAuth();
settingsProvider.loadConfig();

export default new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
