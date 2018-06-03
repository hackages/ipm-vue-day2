import authenticationService from '@/core/services/authentication.service';
import settingsProvider from '@/core/services/settings.provider';
import Vue from 'vue';
import App from './App.vue';

// TODO: Setup router in router.js

Vue.config.productionTip = process.env.NODE_ENV === 'production';

/* async components */
authenticationService.checkAuth();
settingsProvider.loadConfig();

export default new Vue({
  render: h => h(App),
}).$mount('#app');
