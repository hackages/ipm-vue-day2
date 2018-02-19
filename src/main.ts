import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
