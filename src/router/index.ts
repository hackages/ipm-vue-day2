import Vue from 'vue';
import Router from 'vue-router';

import HfHome from '@/home/home.component.vue';
import HfAuthentication from '@/authentication/authentication.component.vue';
import HfMovieDetail from '@/home/movie-details/movie-details.component.vue';
import authenticationService from '@/core/authentication.service.ts';

const authGuard = (to, from, next) => {
  return authenticationService.user.authenticated ? next() : next('/auth');
};

const cannotGoOnAuthPageIfAuthenticatedGuard = (to, from, next) => {
  return authenticationService.user.authenticated ? next('/home') : next();
};

const routes = [
  {
    path: '/auth',
    name: 'authentication',
    component: HfAuthentication,
    beforeEnter: cannotGoOnAuthPageIfAuthenticatedGuard,
  },
  {
    path: '/home',
    name: 'home',
    component: HfHome,
    beforeEnter: authGuard,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: HfMovieDetail,
    beforeEnter: authGuard,
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
