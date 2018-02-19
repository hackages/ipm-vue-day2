import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/home/home.component.vue';
import MovieDetail from '@/home/movie-details/movie-details.component.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: MovieDetail,
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
