export default {
  user: {
    authenticated: false,
  },
  login(ctx, creds): void {
    if (creds.password === 'h4Xflix') {
      localStorage.setItem('access_token', 'b623JSDSDLQI23BSsqjdkqséç');
      this.user.authenticated = true;
      ctx.$router.push({path: '/home'});
    } else {
      ctx.errorLogin = true;
    }
  },
  logout(ctx): void {
    localStorage.removeItem('access_token');
    this.user.authenticated = false;
    ctx.$router.push({path: '/auth'});
  },
  checkAuth(): void {
    const jwt = localStorage.getItem('access_token');
    this.user.authenticated = !!jwt;
  },
};
