export default {
  user: {
    authenticated: false,
  },
  login(creds) {
    if (creds.password === 'h4Xflix') {
      localStorage.setItem('access_token', 'b623JSDSDLQI23BSsqjdkqséç');
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }

    return this.user.authenticated;
  },
  logout() {
    localStorage.removeItem('access_token');
    this.user.authenticated = false;
  },
  checkAuth() {
    const jwt = localStorage.getItem('access_token');
    this.user.authenticated = !!jwt;
  },
};
