<template>
  <main class="login-block">
    <h1>Authentication login</h1>
    <form class="login-form" @submit.prevent="onSubmit('form-1')"  data-vv-scope="form-1">
      <p>Hint: password of login backend is h4Xflix </p>
      <p v-if="errorLogin" class="form-control-feedback"> Login Fail</p>
      <label class="label">Email</label>
      <p class="control has-icon has-icon-right">
          <input class="form-control"
            name="email"
            v-model="form.email"
            v-validate="'required|email'"
            :class="{'input': true, 'is-danger': errors.has('form-1.email') }"
            type="text"
            placeholder="Email">
          <i v-show="errors.has('form-1.email')"
            class="fa fa-warning"></i>
          <span v-show="errors.has('form-1.email')"
            class="help is-danger">
            {{ errors.first('form-1.email') }}
          </span>
      </p>
      <label class="label">Password</label>
      <p class="control has-icon has-icon-right">
          <input class="form-control"
            name="password"
            v-model="form.password"
            v-validate="'required|min:6'"
            :class="{'input': true, 'is-danger': errors.has('form-1.password') }"
            type="password"
            placeholder="Password">
          <i v-show="errors.has('form-1.password')"
            class="fa fa-warning"></i>
          <span v-show="errors.has('form-1.password')"
            class="help is-danger">
            {{ errors.first('form-1.password') }}
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
import auth from '../core/services/authentication.service';

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
    onSubmit(scope) {
      this.errorLogin = false;
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          auth.login(this, this.form);
        }
      });
    },
  },
};
</script>
