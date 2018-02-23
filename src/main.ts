import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.config.productionTip = process.env.NODE_ENV === 'production';

export default new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
