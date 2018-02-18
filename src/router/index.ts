import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/home/home.component.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '**',
      redirect: {name: 'home'},
    },
  ],
});
