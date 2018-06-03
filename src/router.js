import {Router} from 'vue-router';

// TODO: Implement the guard
// If user is isAuthenticated ( see ./core/services/authentication.service.js)
// Then continue navigation
// Else redirect to /auth
const authGuard = () => {};

// TODO: Implement the guard
// If user is isAuthenticated ( see ./core/services/authentication.service.js)
// Then redirect to /home
// Else continue navigation
const cannotGoOnAuthPageIfAuthenticatedGuard = () => {};

const routes = [
  //TODO
  // Setup /auth route with HfAuthentication component with 'cannotGoOnAuthPageIfAuthenticatedGuard' for 'beforeEnter'
  // Setup /home route with HfHome component with 'authGuard' for 'beforeEnter'
  // Setup /details/:id route with HfMovieDetail component with 'authGuard' for 'beforeEnter'
  // Setup fallback route that redirects to /home
];

export default new Router({
  routes,
});
