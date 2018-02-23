import Vue from 'vue';
import Router from 'vue-router';

import HfHome from '@/home/home.component.vue';
import HfAuthentication from '@/authentication/authentication.component.vue';
import HfMovieDetail from '@/home/movie-details/movie-details.component.vue';

const routes = [
  {
    path: '/auth',
    name: 'authentication',
    component: HfAuthentication,
  },
  {
    path: '/home',
    name: 'home',
    component: HfHome,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: HfMovieDetail,
  },
  {
    path: '**',
    redirect: {name: 'home'},
  },
];

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes,
});
