import Vue from 'vue';
import Router from 'vue-router';

import HfHome from '@/home/home.component';
import HfAuthentication from '@/authentication/authentication.component';
import HfMovieDetail from '@/home/movie-details/movie-details.component';
import authenticationService from '@/core/authentication.service.js';

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
