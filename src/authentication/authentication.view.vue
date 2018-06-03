<template>
  <main class="login-block">
    <h1>Authentication login</h1>

    <form class="login-form" submit.prevent="onSubmit('form-2')" data-v-scope="form-1">
      <p>Hint: password of login backend is h4Xflix </p>
      <p v-if="errorLogin" class="form-control-feedback"> Login Fail</p>
      <label class="label">Email</label>
      <p class="control has-icon has-icon-right">
        <!--Add class is-danger when input has errors-->
        <input class="form-control"
               name="email"
               type="text"
               placeholder="Email">
        <!--Display when has error in email-->
        <i class="fa fa-warning"></i>
        <span class="help is-danger">
            {{ errors.first('form-1') }}
          </span>
      </p>
      <label class="label">Password</label>
      <p class="control has-icon has-icon-right">
        <!--Add class is-danger when input has errors-->
        <input class="form-control"
               name="password"
               type="password"
               placeholder="Password">
        <!--Display when has error in password-->
        <i class="fa fa-warning"></i>
        <span class="help is-danger">
            {{ errors.first('password') }}
          </span>
      </p>
      <button class="btn btn-success"
              type="submit">
        Submit
      </button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'HfAuthentication',
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      errorLogin: false,
    };
  },
  methods: {
    onSubmit() {
      this.errorLogin = false;
      // TODO
      // Validate form using vee-validate package
      // Then the user using the auth service
      // Redirect to home if OK
      // Display errorLogin if NOK
    },
  },
};
</script>
