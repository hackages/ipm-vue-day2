import axios from 'axios';
import settingsProvider from '../services/settings.provider';

export default {
  user: {
    authenticated: false,
  },
  login(creds) {
    return axios
      .post(`${settingsProvider.getBackendUrl()}/login`, {
        password: creds.password,
      })
      .then(d => d.data)
      .then(d => d.token)
      .then(token => {
        localStorage.setItem('access_token', token);
        this.user.authenticated = true;
        return true;
      })
      .catch(() => false);
  },
  logout() {
    localStorage.removeItem('access_token');
    this.user.authenticated = false;
  },
  getToken() {
    return localStorage.getItem('access_token');
  },
  checkAuth() {
    this.user.authenticated = !!this.getToken();
  },
};
